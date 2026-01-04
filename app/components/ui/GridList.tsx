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
import { Checkbox } from "~/components/ui/Checkbox"
import { composeTwRenderProps, focusRing } from "~/components/ui/primitives"

export function GridList<T extends object>({
	children,
	...props
}: GridListProps<T>) {
	return (
		<AriaGridList
			{...props}
			className={composeTwRenderProps(
				props.className,
				"relative w-50 overflow-auto rounded-lg border border-neutral-300 bg-white font-sans empty:flex empty:items-center empty:justify-center empty:text-sm empty:italic dark:border-neutral-700 dark:bg-neutral-900"
			)}
		>
			{children}
		</AriaGridList>
	)
}

const itemStyles = tv({
	extend: focusRing,
	base: "relative flex cursor-default select-none gap-3 border-transparent border-t px-3 py-2 text-neutral-900 text-sm -outline-offset-2 first:rounded-t-lg first:border-t-0 last:mb-0 last:rounded-b-lg dark:border-t-neutral-700 dark:text-neutral-200",
	variants: {
		isSelected: {
			false:
				"pressed:bg-neutral-100 hover:bg-neutral-100 dark:pressed:bg-neutral-700/60 dark:hover:bg-neutral-700/60",
			true: "z-20 border-y-blue-200 bg-blue-100 pressed:bg-blue-200 hover:bg-blue-200 dark:border-y-blue-900 dark:bg-blue-700/30 dark:pressed:bg-blue-700/40 dark:hover:bg-blue-700/40",
		},
		isDisabled: {
			true: "z-10 text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]",
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
