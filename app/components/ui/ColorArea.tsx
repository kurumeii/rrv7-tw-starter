"use client"
import {
	ColorArea as AriaColorArea,
	type ColorAreaProps as AriaColorAreaProps,
} from "react-aria-components"
import { composeTwRenderProps } from "ui"
import { ColorThumb } from "~/components/ui/ColorThumb"

export interface ColorAreaProps extends AriaColorAreaProps {}

export function ColorArea(props: ColorAreaProps) {
	return (
		<AriaColorArea
			{...props}
			className={composeTwRenderProps(
				props.className,
				"aspect-square w-full max-w-56 rounded-lg bg-muted forced-colors:bg-[GrayText]"
			)}
			style={({ defaultStyle, isDisabled }) => ({
				...defaultStyle,
				background: isDisabled ? undefined : defaultStyle.background,
			})}
		>
			<ColorThumb />
		</AriaColorArea>
	)
}
