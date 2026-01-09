"use client"
import {
	ColorSlider as AriaColorSlider,
	type ColorSliderProps as AriaColorSliderProps,
	SliderOutput,
	SliderTrack,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { composeTwRenderProps } from "ui"
import { ColorThumb } from "~/components/ui/ColorThumb"
import { Label } from "~/components/ui/Field"

const trackStyles = tv({
	base: "group col-span-2 rounded-md",
	variants: {
		orientation: {
			horizontal: "h-6 w-full",
			vertical: "h-50 w-6",
		},
		isDisabled: {
			true: "bg-muted forced-colors:bg-[GrayText]",
		},
	},
})

interface ColorSliderProps extends AriaColorSliderProps {
	label?: string
}

export function ColorSlider({ label, ...props }: ColorSliderProps) {
	return (
		<AriaColorSlider
			{...props}
			className={composeTwRenderProps(
				props.className,
				"orientation-vertical:flex orientation-horizontal:grid orientation-horizontal:w-56 grid-cols-[1fr_auto] flex-col items-center gap-2 font-sans"
			)}
		>
			<Label>{label}</Label>
			<SliderOutput className='orientation-vertical:hidden font-medium text-muted-foreground text-sm' />
			<SliderTrack
				className={trackStyles}
				style={({ defaultStyle, isDisabled }) => ({
					...defaultStyle,
					background: isDisabled
						? undefined
						: `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
				})}
			>
				<ColorThumb />
			</SliderTrack>
		</AriaColorSlider>
	)
}
