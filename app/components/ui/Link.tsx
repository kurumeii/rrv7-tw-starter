"use client"

import { tv, type VariantProps } from "configs/ui.config"
import type { ComponentProps } from "react"
import * as RAC from "react-aria-components"
import { focusRing } from "ui"

const linkStyles = tv({
	extend: focusRing,
	base: "rounded-xs underline transition [-webkit-tap-highlight-color:transparent] disabled:cursor-default disabled:no-underline forced-colors:disabled:text-[GrayText]",
	variants: {
		variant: {
			primary: "text-primary decoration-primary/60 hover:decoration-primary",
			secondary:
				"text-secondary decoration-secondary/50 hover:decoration-secondary",
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
			className={RAC.composeRenderProps(className, (cls, renderProps) =>
				linkStyles({ ...renderProps, className: cls, variant })
			)}
		/>
	)
}

export { linkStyles, type LinkProps, Link }
