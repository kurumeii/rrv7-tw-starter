import { composeRenderProps } from "react-aria-components"
import { type ClassNameValue, twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

export function cx(...inputs: Array<ClassNameValue>) {
	return twMerge(...inputs)
}

const focusButtonStyles = tv({
	base: "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
})

const focusRing = tv({
	base: "outline outline-ring outline-offset-2 forced-colors:outline-[Highlight]",
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

export type { VariantProps } from "tailwind-variants"
export { composeTwRenderProps, focusButtonStyles, focusRing, tv }
