"use client"
import { composeRenderProps, Button as RACButton } from "react-aria-components"
import { tv } from "tailwind-variants"
import { focusRing } from "ui"
import type { ButtonProps } from "./Button"

const button = tv({
	extend: focusRing,
	base: "relative flex cursor-default items-center justify-center rounded-md border-0 bg-transparent pressed:bg-muted p-1 text-center font-sans text-muted-foreground text-sm transition [-webkit-tap-highlight-color:transparent] hover:bg-muted/80 disabled:bg-transparent",
	variants: {
		isDisabled: {
			true: "bg-muted/50 text-muted-foreground/50 forced-colors:text-[GrayText]",
		},
	},
})

export function FieldButton(props: ButtonProps) {
	return (
		<RACButton
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				button({ ...renderProps, className })
			)}
		>
			{props.children}
		</RACButton>
	)
}
