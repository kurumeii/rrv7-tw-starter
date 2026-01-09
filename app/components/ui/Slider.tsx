"use client"
import {
	Slider as AriaSlider,
	type SliderProps as AriaSliderProps,
	SliderOutput,
	SliderThumb,
	SliderTrack,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { composeTwRenderProps, focusRing } from "ui"
import { Label } from "~/components/ui/Field"

const trackStyles = tv({
	base: "rounded-full",
	variants: {
		orientation: {
			horizontal: "h-1.5 w-full",
			vertical: "ml-[50%] h-full w-1.5 -translate-x-[50%]",
		},
		isDisabled: {
			false: "bg-muted forced-colors:bg-[ButtonBorder]",
			true: "opacity-50 forced-colors:bg-[ButtonBorder]",
		},
	},
})

const fillStyles = tv({
	base: "absolute rounded-full",
	variants: {
		orientation: {
			horizontal: "start-(--start,0) h-1.5 w-(--size)",
			vertical:
				"bottom-(--start,0) ml-[50%] h-(--size) w-1.5 -translate-x-[50%]",
		},
		isDisabled: {
			false: "bg-primary forced-colors:bg-[Highlight]",
			true: "opacity-50 forced-colors:bg-[GrayText]",
		},
	},
})

const thumbStyles = tv({
	extend: focusRing,
	base: "h-4.5 w-4.5 rounded-full border border-border bg-background group-orientation-horizontal:mt-5 group-orientation-vertical:ml-2.5",
	variants: {
		isDragging: {
			true: "bg-primary forced-colors:bg-[ButtonBorder]",
		},
		isDisabled: {
			true: "opacity-50 forced-colors:border-[GrayText]",
		},
	},
})

export interface SliderProps<T> extends AriaSliderProps<T> {
	label?: string
	thumbLabels?: Array<string>
}

export function Slider<T extends number | Array<number>>({
	label,
	thumbLabels,
	...props
}: SliderProps<T>) {
	return (
		<AriaSlider
			{...props}
			className={composeTwRenderProps(
				props.className,
				"orientation-vertical:flex orientation-horizontal:grid orientation-horizontal:w-64 orientation-horizontal:max-w-[calc(100%-10px)] grid-cols-[1fr_auto] flex-col items-center gap-2 font-sans"
			)}
		>
			<Label>{label}</Label>
			<SliderOutput className='orientation-vertical:hidden text-muted-foreground text-sm'>
				{({ state }) =>
					state.values
						.map((_value, i) => state.getThumbValueLabel(i))
						.join(" – ")
				}
			</SliderOutput>
			<SliderTrack className='group col-span-2 flex orientation-horizontal:h-5 orientation-vertical:h-38 orientation-vertical:w-5 items-center'>
				{({ state, ...renderProps }) => (
					<>
						<div className={trackStyles(renderProps)} />
						{state.values.length === 1 ? (
							// Single thumb, render fill from the end
							<div
								className={fillStyles(renderProps)}
								style={
									{
										"--size": `${state.getThumbPercent(0) * 100}%`,
									} as React.CSSProperties
								}
							/>
						) : state.values.length === 2 ? (
							// Range slider, render fill between the thumbs
							<div
								className={fillStyles(renderProps)}
								style={
									{
										"--start": `${state.getThumbPercent(0) * 100}%`,
										"--size":
											(state.getThumbPercent(1) - state.getThumbPercent(0)) *
												100 +
											"%",
									} as React.CSSProperties
								}
							/>
						) : null}
						{state.values.map((value, i) => (
							<SliderThumb
								key={`thumb-${i}-${value}`}
								index={i}
								aria-label={thumbLabels?.[i]}
								className={thumbStyles}
							/>
						))}
					</>
				)}
			</SliderTrack>
		</AriaSlider>
	)
}
