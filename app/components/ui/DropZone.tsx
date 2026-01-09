"use client"
import {
	composeRenderProps,
	type DropZoneProps,
	DropZone as RACDropZone,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const dropZone = tv({
	base: "flex min-h-24 w-[30%] items-center justify-center text-balance rounded-lg border border-border bg-background p-8 text-center font-sans text-base",
	variants: {
		isFocusVisible: {
			true: "outline-2 outline-ring -outline-offset-1 forced-colors:outline-[Highlight]",
		},
		isDropTarget: {
			true: "bg-primary/20 outline-2 outline-primary -outline-offset-1 forced-colors:outline-[Highlight]",
		},
	},
})

export function DropZone(props: DropZoneProps) {
	return (
		<RACDropZone
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				dropZone({ ...renderProps, className })
			)}
		/>
	)
}
