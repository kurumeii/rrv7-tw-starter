"use client"
import { composeRenderProps, Button as RACButton } from "react-aria-components"
import { tv } from "tailwind-variants"
import { focusRing } from "~/components/ui/primitives"
import type { ButtonProps } from "./Button"

const button = tv({
	extend: focusRing,
	base: "relative flex cursor-default items-center justify-center rounded-md border-0 bg-transparent pressed:bg-black/10 p-1 text-center font-sans text-neutral-600 text-sm transition [-webkit-tap-highlight-color:transparent] hover:bg-black/5 disabled:bg-transparent dark:pressed:bg-white/20 dark:text-neutral-400 dark:hover:bg-white/10",
	variants: {
		isDisabled: {
			true: "border-black/5 bg-neutral-100 text-neutral-300 dark:border-white/5 dark:bg-neutral-800 dark:text-neutral-600 forced-colors:text-[GrayText]",
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
