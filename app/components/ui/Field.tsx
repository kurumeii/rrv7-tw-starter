"use client"
import {
	composeRenderProps,
	type FieldErrorProps,
	Group,
	type GroupProps,
	type InputProps,
	type LabelProps,
	FieldError as RACFieldError,
	Input as RACInput,
	Label as RACLabel,
	Text,
	type TextProps,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"
import { composeTwRenderProps, focusRing } from "ui"

export function Label(props: LabelProps) {
	return (
		<RACLabel
			{...props}
			className={twMerge(
				"w-fit cursor-default font-medium font-sans text-muted-foreground text-sm",
				props.className
			)}
		/>
	)
}

export function Description(props: TextProps) {
	return (
		<Text
			{...props}
			slot='description'
			className={twMerge("text-muted-foreground text-sm", props.className)}
		/>
	)
}

export function FieldError(props: FieldErrorProps) {
	return (
		<RACFieldError
			{...props}
			className={composeTwRenderProps(
				props.className,
				"text-error text-sm forced-colors:text-[Mark]"
			)}
		/>
	)
}

export const fieldBorderStyles = tv({
	base: "transition",
	variants: {
		isFocusWithin: {
			false:
				"border-input hover:border-border forced-colors:border-[ButtonBorder]",
			true: "border-ring forced-colors:border-[Highlight]",
		},
		isInvalid: {
			true: "border-error forced-colors:border-[Mark]",
		},
		isDisabled: {
			true: "border-muted forced-colors:border-[GrayText]",
		},
	},
})

export const fieldGroupStyles = tv({
	extend: focusRing,
	base: "group box-border flex h-9 items-center overflow-hidden rounded-lg border bg-background transition forced-colors:bg-[Field]",
	variants: fieldBorderStyles.variants,
})

export function FieldGroup(props: GroupProps) {
	return (
		<Group
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				fieldGroupStyles({ ...renderProps, className })
			)}
		/>
	)
}

export function Input(props: InputProps) {
	return (
		<RACInput
			{...props}
			className={composeTwRenderProps(
				props.className,
				"min-h-9 min-w-0 flex-1 border-0 bg-transparent px-3 py-0 font-sans text-foreground text-sm outline-0 [-webkit-tap-highlight-color:transparent] placeholder:text-muted-foreground disabled:text-muted-foreground/50"
			)}
		/>
	)
}
