"use client"
import { RiCloseLine } from "@remixicon/react"
import { createContext, useContext } from "react"
import {
	Tag as AriaTag,
	TagGroup as AriaTagGroup,
	type TagGroupProps as AriaTagGroupProps,
	type TagProps as AriaTagProps,
	Button,
	composeRenderProps,
	TagList,
	type TagListProps,
	Text,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"
import { focusRing } from "ui"
import { Description, Label } from "~/components/ui/Field"

const colors = {
	gray: "bg-background text-muted-foreground border-border hover:border-input",
	green: "bg-success/10 text-success border-success/20 hover:border-success/30",
	yellow:
		"bg-warning/10 text-warning border-warning/20 hover:border-warning/30",
	blue: "bg-primary/10 text-primary border-primary/20 hover:border-primary/30",
}

type Color = keyof typeof colors
const ColorContext = createContext<Color>("gray")

const tagStyles = tv({
	extend: focusRing,
	base: "flex max-w-fit cursor-default items-center gap-1 rounded-full border px-3 py-0.5 font-sans text-xs transition [-webkit-tap-highlight-color:transparent]",
	variants: {
		color: {
			gray: "",
			green: "",
			yellow: "",
			blue: "",
		},
		allowsRemoving: {
			true: "pr-1",
		},
		isSelected: {
			true: "border-transparent bg-primary text-primary-foreground forced-color-adjust-none forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
		},
		isDisabled: {
			true: "opacity-50 forced-colors:text-[GrayText]",
		},
	},
	compoundVariants: (Object.keys(colors) as Array<Color>).map((color) => ({
		isSelected: false,
		isDisabled: false,
		color,
		class: colors[color],
	})),
})

export interface TagGroupProps<T>
	extends Omit<AriaTagGroupProps, "children">,
		Pick<TagListProps<T>, "items" | "children" | "renderEmptyState"> {
	color?: Color
	label?: string
	description?: string
	errorMessage?: string
}

export interface TagProps extends AriaTagProps {
	color?: Color
}

export function TagGroup<T extends object>({
	label,
	description,
	errorMessage,
	items,
	children,
	renderEmptyState,
	...props
}: TagGroupProps<T>) {
	return (
		<AriaTagGroup
			{...props}
			className={twMerge("flex flex-col gap-2 font-sans", props.className)}
		>
			<Label>{label}</Label>
			<ColorContext.Provider value={props.color || "gray"}>
				<TagList
					items={items}
					renderEmptyState={renderEmptyState}
					className='flex flex-wrap gap-1'
				>
					{children}
				</TagList>
			</ColorContext.Provider>
			{description && <Description>{description}</Description>}
			{errorMessage && (
				<Text slot='errorMessage' className='text-error text-sm'>
					{errorMessage}
				</Text>
			)}
		</AriaTagGroup>
	)
}

const removeButtonStyles = tv({
	extend: focusRing,
	base: "flex cursor-default items-center justify-center rounded-full border-0 bg-transparent pressed:bg-muted p-0.5 text-inherit transition-[background-color] hover:bg-muted/80",
})

export function Tag({ children, color, ...props }: TagProps) {
	const textValue = typeof children === "string" ? children : undefined
	const groupColor = useContext(ColorContext)
	return (
		<AriaTag
			textValue={textValue}
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tagStyles({ ...renderProps, className, color: color || groupColor })
			)}
		>
			{composeRenderProps(children, (children, { allowsRemoving }) => (
				<>
					{children}
					{allowsRemoving && (
						<Button slot='remove' className={removeButtonStyles}>
							<RiCloseLine aria-hidden className='h-3 w-3' />
						</Button>
					)}
				</>
			))}
		</AriaTag>
	)
}
