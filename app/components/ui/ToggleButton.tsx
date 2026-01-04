"use client"
import {
	composeRenderProps,
	ToggleButton as RACToggleButton,
	type ToggleButtonProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { focusRing } from "~/components/ui/primitives"

const styles = tv({
	extend: focusRing,
	base: "relative box-border inline-flex h-9 cursor-default items-center justify-center gap-2 rounded-lg border border-black/10 px-3.5 text-center font-sans text-sm transition forced-color-adjust-none [-webkit-tap-highlight-color:transparent] dark:border-white/10 [&:has(>svg:only-child)]:aspect-square [&:has(>svg:only-child)]:h-8 [&:has(>svg:only-child)]:px-0",
	variants: {
		isSelected: {
			false:
				"bg-neutral-50 pressed:bg-neutral-200 text-neutral-800 hover:bg-neutral-100 dark:bg-neutral-700 dark:pressed:bg-neutral-500 dark:text-neutral-100 dark:hover:bg-neutral-600 forced-colors:bg-[ButtonFace]! forced-colors:text-[ButtonText]!",
			true: "bg-neutral-700 pressed:bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-300 dark:pressed:bg-neutral-100 dark:text-black dark:hover:bg-neutral-200 forced-colors:bg-[Highlight]! forced-colors:text-[HighlightText]!",
		},
		isDisabled: {
			true: "border-transparent bg-neutral-100 text-neutral-300 dark:border-transparent dark:bg-neutral-800 dark:text-neutral-600 forced-colors:bg-[ButtonFace]! forced-colors:text-[GrayText]!",
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
