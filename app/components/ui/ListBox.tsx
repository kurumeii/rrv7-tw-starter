"use client"
import { RiCheckLine } from "@remixicon/react"
import {
	ListBox as AriaListBox,
	ListBoxItem as AriaListBoxItem,
	type ListBoxProps as AriaListBoxProps,
	Collection,
	composeRenderProps,
	Header,
	type ListBoxItemProps,
	ListBoxSection,
	type SectionProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { composeTwRenderProps, focusRing } from "~/components/ui/primitives"

interface ListBoxProps<T>
	extends Omit<AriaListBoxProps<T>, "layout" | "orientation"> {}

export function ListBox<T extends object>({
	children,
	...props
}: ListBoxProps<T>) {
	return (
		<AriaListBox
			{...props}
			className={composeTwRenderProps(
				props.className,
				"w-50 rounded-lg border border-neutral-300 bg-white p-1 font-sans outline-0 dark:border-neutral-700 dark:bg-neutral-900"
			)}
		>
			{children}
		</AriaListBox>
	)
}

export const itemStyles = tv({
	extend: focusRing,
	base: "group relative flex cursor-default select-none items-center gap-8 rounded-md px-2.5 py-1.5 text-sm will-change-transform forced-color-adjust-none",
	variants: {
		isSelected: {
			false:
				"pressed:bg-neutral-100 text-neutral-700 -outline-offset-2 hover:bg-neutral-100 dark:pressed:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800",
			true: "bg-blue-600 text-white outline-white -outline-offset-4 dark:outline-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:outline-[HighlightText] [&+[data-selected]]:rounded-t-none [&:has(+[data-selected])]:rounded-b-none",
		},
		isDisabled: {
			true: "text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]",
		},
	},
})

export function ListBoxItem(props: ListBoxItemProps) {
	const textValue =
		props.textValue ||
		(typeof props.children === "string" ? props.children : undefined)
	return (
		<AriaListBoxItem {...props} textValue={textValue} className={itemStyles}>
			{composeRenderProps(props.children, (children) => (
				<>
					{children}
					<div className='absolute right-4 bottom-0 left-4 hidden h-px bg-white/20 forced-colors:bg-[HighlightText] [.group[data-selected]:has(+[data-selected])_&]:block' />
				</>
			))}
		</AriaListBoxItem>
	)
}

export const dropdownItemStyles = tv({
	base: "group flex cursor-default select-none items-center gap-4 rounded-lg py-2 pr-3 selected:pr-1 pl-3 text-sm no-underline outline forced-color-adjust-none [-webkit-tap-highlight-color:transparent] [[href]]:cursor-pointer",
	variants: {
		isDisabled: {
			false: "text-neutral-900 dark:text-neutral-100",
			true: "text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]",
		},
		isPressed: {
			true: "bg-neutral-100 dark:bg-neutral-800",
		},
		isFocused: {
			true: "bg-blue-600 text-white dark:bg-blue-600 forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
		},
	},
	compoundVariants: [
		{
			isFocused: false,
			isOpen: true,
			className: "bg-neutral-100 dark:bg-neutral-700/60",
		},
	],
})

export function DropdownItem(props: ListBoxItemProps) {
	const textValue =
		props.textValue ||
		(typeof props.children === "string" ? props.children : undefined)
	return (
		<AriaListBoxItem
			{...props}
			textValue={textValue}
			className={dropdownItemStyles}
		>
			{composeRenderProps(props.children, (children, { isSelected }) => (
				<>
					<span className='flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold'>
						{children}
					</span>
					<span className='flex w-5 items-center'>
						{isSelected && <RiCheckLine className='h-4 w-4' />}
					</span>
				</>
			))}
		</AriaListBoxItem>
	)
}

export interface DropdownSectionProps<T> extends SectionProps<T> {
	title?: string
	items?: Iterable<T>
}

export function DropdownSection<T extends object>(
	props: DropdownSectionProps<T>
) {
	return (
		<ListBoxSection className="after:block after:h-1.25 after:content-[''] first:-mt-1.25 last:after:hidden">
			<Header className='sticky -top-1.25 z-10 -mx-1 -mt-px truncate border-y border-y-neutral-200 bg-neutral-100/60 px-4 py-1 font-semibold text-neutral-500 text-sm backdrop-blur-md supports-[-moz-appearance:none]:bg-neutral-100 dark:border-y-neutral-700 dark:bg-neutral-700/60 dark:text-neutral-300 [&+*]:mt-1'>
				{props.title}
			</Header>
			<Collection items={props.items}>{props.children}</Collection>
		</ListBoxSection>
	)
}
