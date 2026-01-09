"use client"
import type React from "react"
import {
	Popover as AriaPopover,
	type PopoverProps as AriaPopoverProps,
	composeRenderProps,
	OverlayArrow,
} from "react-aria-components"
import { tv } from "tailwind-variants"

export interface PopoverProps extends Omit<AriaPopoverProps, "children"> {
	showArrow?: boolean
	children: React.ReactNode
}

const styles = tv({
	base: "rounded-xl border border-border bg-popover bg-clip-padding font-sans text-popover-foreground shadow-2xl outline-0 dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas]",
	variants: {
		isEntering: {
			true: "fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 animate-in duration-200 ease-out",
		},
		isExiting: {
			true: "fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 animate-out duration-150 ease-in",
		},
	},
})

export function Popover({
	children,
	showArrow,
	className,
	...props
}: PopoverProps) {
	const offset = showArrow ? 12 : 8
	return (
		<AriaPopover
			offset={offset}
			{...props}
			className={composeRenderProps(className, (className, renderProps) =>
				styles({ ...renderProps, className })
			)}
		>
			{showArrow && (
				<OverlayArrow className='group'>
					<svg
						width={12}
						height={12}
						viewBox='0 0 12 12'
						aria-hidden='true'
						className='block fill-popover stroke-1 stroke-border group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]'
					>
						<path d='M0 0 L6 6 L12 0' />
					</svg>
				</OverlayArrow>
			)}
			{children}
		</AriaPopover>
	)
}
