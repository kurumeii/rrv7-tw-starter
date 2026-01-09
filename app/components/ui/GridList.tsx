"use client"
import {
	GridList as AriaGridList,
	GridListItem as AriaGridListItem,
	Button,
	composeRenderProps,
	type GridListItemProps,
	type GridListProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { composeTwRenderProps, focusRing } from "ui"
import { Checkbox } from "~/components/ui/Checkbox"

export function GridList<T extends object>({
	children,
	...props
}: GridListProps<T>) {
	return (
		<AriaGridList
			{...props}
			className={composeTwRenderProps(
				props.className,
				"relative w-50 overflow-auto rounded-lg border border-border bg-background font-sans empty:flex empty:items-center empty:justify-center empty:text-sm empty:italic"
			)}
		>
			{children}
		</AriaGridList>
	)
}

const itemStyles = tv({
	extend: focusRing,
	base: "relative flex cursor-default select-none gap-3 border-transparent border-t px-3 py-2 text-foreground text-sm -outline-offset-2 first:rounded-t-lg first:border-t-0 last:mb-0 last:rounded-b-lg",
	variants: {
		isSelected: {
			false: "pressed:bg-muted hover:bg-muted",
			true: "z-20 border-y-primary/20 bg-primary/10 pressed:bg-primary/20 hover:bg-primary/20 forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
		},
		isDisabled: {
			true: "z-10 text-muted-foreground forced-colors:text-[GrayText]",
		},
	},
})

export function GridListItem({ children, ...props }: GridListItemProps) {
	const textValue = typeof children === "string" ? children : undefined
	return (
		<AriaGridListItem textValue={textValue} {...props} className={itemStyles}>
			{composeRenderProps(
				children,
				(children, { selectionMode, selectionBehavior, allowsDragging }) => (
					<>
						{/* Add elements for drag and drop and selection. */}
						{allowsDragging && <Button slot='drag'>≡</Button>}
						{selectionMode !== "none" && selectionBehavior === "toggle" && (
							<Checkbox slot='selection' />
						)}
						{children}
					</>
				)
			)}
		</AriaGridListItem>
	)
}
