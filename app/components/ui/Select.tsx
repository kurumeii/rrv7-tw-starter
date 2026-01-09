"use client"
import { RiArrowDownSLine } from "@remixicon/react"
import type React from "react"
import {
	Select as AriaSelect,
	type SelectProps as AriaSelectProps,
	Button,
	ListBox,
	type ListBoxItemProps,
	SelectValue,
	type ValidationResult,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { composeTwRenderProps, focusRing } from "ui"
import { Description, FieldError, Label } from "~/components/ui/Field"
import {
	DropdownItem,
	DropdownSection,
	type DropdownSectionProps,
} from "~/components/ui/ListBox"
import { Popover } from "~/components/ui/Popover"

const styles = tv({
	extend: focusRing,
	base: "flex h-9 w-full min-w-45 cursor-default items-center gap-4 rounded-lg border border-border bg-background pr-2 pl-3 text-start font-sans transition [-webkit-tap-highlight-color:transparent]",
	variants: {
		isDisabled: {
			false:
				"pressed:bg-muted text-foreground hover:bg-muted/80 group-invalid:outline group-invalid:outline-error forced-colors:group-invalid:outline-[Mark]",
			true: "border-transparent bg-muted text-muted-foreground/50 forced-colors:text-[GrayText]",
		},
	},
})

export interface SelectProps<T extends object>
	extends Omit<AriaSelectProps<T>, "children"> {
	label?: string
	description?: string
	errorMessage?: string | ((validation: ValidationResult) => string)
	items?: Iterable<T>
	children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function Select<T extends object>({
	label,
	description,
	errorMessage,
	children,
	items,
	...props
}: SelectProps<T>) {
	return (
		<AriaSelect
			{...props}
			className={composeTwRenderProps(
				props.className,
				"group relative flex flex-col gap-1 font-sans"
			)}
		>
			{label && <Label>{label}</Label>}
			<Button className={styles}>
				<SelectValue className='flex-1 text-sm'>
					{({ selectedText, defaultChildren }) =>
						selectedText || defaultChildren
					}
				</SelectValue>
				<RiArrowDownSLine
					aria-hidden
					className='h-4 w-4 text-muted-foreground group-disabled:opacity-50 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]'
				/>
			</Button>
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
			<Popover className='min-w-(--trigger-width)'>
				<ListBox
					items={items}
					className='box-border max-h-[inherit] overflow-auto p-1 outline-hidden [clip-path:inset(0_0_0_0_round_.75rem)]'
				>
					{children}
				</ListBox>
			</Popover>
		</AriaSelect>
	)
}

export function SelectItem(props: ListBoxItemProps) {
	return <DropdownItem {...props} />
}

export function SelectSection<T extends object>(
	props: DropdownSectionProps<T>
) {
	return <DropdownSection {...props} />
}
