import { cx } from "configs/ui.config"
import { composeRenderProps } from "react-aria-components"
import { tv } from "tailwind-variants"

const focusButtonStyles = tv({
	base: "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
})

const focusRing = tv({
	base: "outline outline-blue-600 outline-offset-2 dark:outline-blue-500 forced-colors:outline-[Highlight]",
	variants: {
		isFocusVisible: {
			false: "outline-0",
			true: "outline-2",
		},
	},
})

function composeTwRenderProps<T>(
	className: string | ((v: T) => string) | undefined,
	tw: string
): string | ((v: T) => string) {
	return composeRenderProps(className, (className) => cx(tw, className))
}

export {
	composeRenderProps,
	composeTwRenderProps,
	focusButtonStyles,
	focusRing,
}
