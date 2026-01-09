"use client"
import { RiArrowRightSLine } from "@remixicon/react"
import {
	Tree as AriaTree,
	TreeItem as AriaTreeItem,
	TreeItemContent as AriaTreeItemContent,
	type TreeItemProps as AriaTreeItemProps,
	Button,
	type TreeProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { composeTwRenderProps, focusRing } from "ui"
import { Checkbox } from "~/components/ui/Checkbox"

const itemStyles = tv({
	extend: focusRing,
	base: "group relative flex cursor-default select-none gap-3 border-transparent border-t bg-background px-3 py-1 font-sans text-foreground text-sm -outline-offset-2 first:rounded-t-lg first:border-t-0 last:rounded-b-lg",
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

export function Tree<T extends object>({ children, ...props }: TreeProps<T>) {
	return (
		<AriaTree
			{...props}
			className={composeTwRenderProps(
				props.className,
				"relative w-48 max-w-full overflow-auto rounded-lg border border-border"
			)}
		>
			{children}
		</AriaTree>
	)
}

const expandButton = tv({
	extend: focusRing,
	base: "flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-lg border-0 bg-transparent p-0 text-start [-webkit-tap-highlight-color:transparent]",
	variants: {
		isDisabled: {
			true: "opacity-50 forced-colors:text-[GrayText]",
		},
	},
})

const chevron = tv({
	base: "h-4.5 w-4.5 text-muted-foreground transition-transform duration-200 ease-in-out",
	variants: {
		isExpanded: {
			true: "rotate-90 transform",
		},
		isDisabled: {
			true: "opacity-50 forced-colors:text-[GrayText]",
		},
	},
})

export interface TreeItemProps extends Partial<AriaTreeItemProps> {
	title: string
}

export function TreeItem(props: TreeItemProps) {
	return (
		<AriaTreeItem className={itemStyles} textValue={props.title} {...props}>
			<AriaTreeItemContent {...props}>
				{({
					selectionMode,
					selectionBehavior,
					hasChildItems,
					isExpanded,
					isDisabled,
				}) => (
					<div className={`flex items-center`}>
						{selectionMode !== "none" && selectionBehavior === "toggle" && (
							<Checkbox slot='selection' />
						)}
						<div className='w-[calc(calc(var(--tree-item-level)-1)*calc(var(--spacing)*3))] shrink-0' />
						{hasChildItems ? (
							<Button slot='chevron' className={expandButton({ isDisabled })}>
								<RiArrowRightSLine
									aria-hidden
									className={chevron({ isExpanded, isDisabled })}
								/>
							</Button>
						) : (
							<div className='h-8 w-8 shrink-0' />
						)}
						{props.title}
					</div>
				)}
			</AriaTreeItemContent>
			{props.children}
		</AriaTreeItem>
	)
}
