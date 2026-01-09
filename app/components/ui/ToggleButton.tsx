"use client"
import {
	composeRenderProps,
	ToggleButton as RACToggleButton,
	type ToggleButtonProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { focusRing } from "ui"

const styles = tv({
	extend: focusRing,
	base: "relative box-border inline-flex h-9 cursor-default items-center justify-center gap-2 rounded-lg border border-border px-3.5 text-center font-sans text-sm transition [-webkit-tap-highlight-color:transparent] [&:has(>svg:only-child)]:aspect-square [&:has(>svg:only-child)]:h-8 [&:has(>svg:only-child)]:px-0",
	variants: {
		isSelected: {
			false:
				"bg-background pressed:bg-muted text-foreground hover:bg-muted/80 forced-colors:bg-[ButtonFace]! forced-colors:text-[ButtonText]!",
			true: "bg-primary pressed:bg-primary/90 text-primary-foreground forced-colors:bg-[Highlight]! forced-colors:text-[HighlightText]!",
		},
		isDisabled: {
			true: "border-transparent bg-muted text-muted-foreground forced-colors:bg-[ButtonFace]! forced-colors:text-[GrayText]!",
		},
	},
})

export function ToggleButton(props: ToggleButtonProps) {
	return (
		<RACToggleButton
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				styles({ ...renderProps, className })
			)}
		/>
	)
}
