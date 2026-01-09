"use client"
import type React from "react"
import {
	Switch as AriaSwitch,
	type SwitchProps as AriaSwitchProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { composeTwRenderProps, focusRing } from "ui"

export interface SwitchProps extends Omit<AriaSwitchProps, "children"> {
	children: React.ReactNode
}

const track = tv({
	extend: focusRing,
	base: "box-border flex h-5 w-9 shrink-0 cursor-default items-center rounded-full border border-transparent px-px font-sans shadow-inner transition duration-200 ease-in-out",
	variants: {
		isSelected: {
			false: "border-border bg-muted group-pressed:bg-muted-foreground/20",
			true: "bg-primary group-pressed:bg-primary/90 forced-colors:bg-[Highlight]!",
		},
		isDisabled: {
			true: "opacity-50 forced-colors:border-[GrayText]",
		},
	},
})

const handle = tv({
	base: "h-4 w-4 transform rounded-full shadow-xs outline-1 outline-transparent -outline-offset-1 transition duration-200 ease-in-out",
	variants: {
		isSelected: {
			false: "translate-x-0 bg-background",
			true: "translate-x-full bg-primary-foreground",
		},
	},
})

export function Switch({ children, ...props }: SwitchProps) {
	return (
		<AriaSwitch
			{...props}
			className={composeTwRenderProps(
				props.className,
				"group relative flex items-center gap-2 text-foreground text-sm transition [-webkit-tap-highlight-color:transparent] disabled:text-muted-foreground forced-colors:disabled:text-[GrayText]"
			)}
		>
			{(renderProps) => (
				<>
					<div className={track(renderProps)}>
						<span className={handle(renderProps)} />
					</div>
					{children}
				</>
			)}
		</AriaSwitch>
	)
}
