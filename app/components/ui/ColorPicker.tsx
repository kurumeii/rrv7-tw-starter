"use client"
import type React from "react"
import {
	ColorPicker as AriaColorPicker,
	type ColorPickerProps as AriaColorPickerProps,
	Button,
	DialogTrigger,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { ColorArea } from "~/components/ui/ColorArea"
import { ColorField } from "~/components/ui/ColorField"
import { ColorSlider } from "~/components/ui/ColorSlider"
import { ColorSwatch } from "~/components/ui/ColorSwatch"
import { Dialog } from "~/components/ui/Dialog"
import { Popover } from "~/components/ui/Popover"
import { focusRing } from "~/components/ui/primitives"

const buttonStyles = tv({
	extend: focusRing,
	base: "flex cursor-default items-center gap-2 rounded-xs border-0 bg-transparent font-sans text-neutral-800 text-sm [-webkit-tap-highlight-color:transparent] dark:text-neutral-200",
})

export interface ColorPickerProps
	extends Omit<AriaColorPickerProps, "children"> {
	label?: string
	children?: React.ReactNode
}

export function ColorPicker({ label, children, ...props }: ColorPickerProps) {
	return (
		<AriaColorPicker {...props}>
			<DialogTrigger>
				<Button className={buttonStyles}>
					<ColorSwatch />
					<span>{label}</span>
				</Button>
				<Popover placement='bottom start'>
					<Dialog className='flex flex-col gap-2'>
						{children || (
							<>
								<ColorArea
									colorSpace='hsb'
									xChannel='saturation'
									yChannel='brightness'
								/>
								<ColorSlider colorSpace='hsb' channel='hue' />
								<ColorField label='Hex' />
							</>
						)}
					</Dialog>
				</Popover>
			</DialogTrigger>
		</AriaColorPicker>
	)
}
