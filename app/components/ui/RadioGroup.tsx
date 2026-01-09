"use client"
import type { ReactNode } from "react"
import {
	composeRenderProps,
	Radio as RACRadio,
	RadioGroup as RACRadioGroup,
	type RadioGroupProps as RACRadioGroupProps,
	type RadioProps,
	type ValidationResult,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { composeTwRenderProps, focusRing } from "ui"
import { Description, FieldError, Label } from "~/components/ui/Field"

export interface RadioGroupProps extends Omit<RACRadioGroupProps, "children"> {
	label?: string
	children?: ReactNode
	description?: string
	errorMessage?: string | ((validation: ValidationResult) => string)
}

export function RadioGroup(props: RadioGroupProps) {
	return (
		<RACRadioGroup
			{...props}
			className={composeTwRenderProps(
				props.className,
				"group flex flex-col gap-2 font-sans"
			)}
		>
			<Label>{props.label}</Label>
			<div className='flex gap-2 group-orientation-vertical:flex-col group-orientation-horizontal:gap-4'>
				{props.children}
			</div>
			{props.description && <Description>{props.description}</Description>}
			<FieldError>{props.errorMessage}</FieldError>
		</RACRadioGroup>
	)
}

const styles = tv({
	extend: focusRing,
	base: "box-border h-4.5 w-4.5 rounded-full border bg-background transition-all",
	variants: {
		isSelected: {
			false: "border-border group-pressed:border-input",
			true: "border-[calc(var(--spacing)*1.5)] border-primary group-pressed:border-primary/90 forced-colors:border-[Highlight]!",
		},
		isInvalid: {
			true: "border-error group-pressed:border-error forced-colors:border-[Mark]!",
		},
		isDisabled: {
			true: "border-muted forced-colors:border-[GrayText]!",
		},
	},
})

export function Radio(props: RadioProps) {
	return (
		<RACRadio
			{...props}
			className={composeTwRenderProps(
				props.className,
				"group relative flex items-center gap-2 text-foreground text-sm transition [-webkit-tap-highlight-color:transparent] disabled:text-muted-foreground forced-colors:disabled:text-[GrayText]"
			)}
		>
			{composeRenderProps(props.children, (children, renderProps) => (
				<>
					<div className={styles(renderProps)} />
					{children}
				</>
			))}
		</RACRadio>
	)
}
