"use client"

import { tv, type VariantProps } from "configs/ui.config"
import type { ComponentProps } from "react"
import * as RAC from "react-aria-components"
import { composeRenderProps, focusRing } from "~/components/ui/primitives"

const linkStyles = tv({
	extend: focusRing,
	base: "rounded-xs underline transition [-webkit-tap-highlight-color:transparent] disabled:cursor-default disabled:no-underline forced-colors:disabled:text-[GrayText]",
	variants: {
		variant: {
			primary:
				"text-blue-600 underline decoration-blue-600/60 hover:decoration-blue-600 dark:text-blue-500 dark:decoration-blue-500/60 dark:hover:decoration-blue-500",
			secondary:
				"text-muted-foreground underline decoration-muted-foreground/50 hover:decoration-muted-foreground",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
})

interface LinkProps
	extends ComponentProps<typeof RAC.Link>,
		VariantProps<typeof linkStyles> {}

const Link = (props: LinkProps) => {
	const { variant, className, ...rest } = props
	return (
		<RAC.Link
			{...rest}
			className={composeRenderProps(className, (cls, renderProps) =>
				linkStyles({ ...renderProps, className: cls, variant })
			)}
		/>
	)
}

export { linkStyles, type LinkProps, Link }
