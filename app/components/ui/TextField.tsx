"use client"
import {
	TextField as AriaTextField,
	type TextFieldProps as AriaTextFieldProps,
	type ValidationResult,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import {
	Description,
	FieldError,
	fieldBorderStyles,
	Input,
	Label,
} from "~/components/ui/Field"
import { composeTwRenderProps, focusRing } from "~/components/ui/primitives"

const inputStyles = tv({
	extend: focusRing,
	base: "box-border min-h-9 rounded-lg border px-3 py-0 font-sans text-sm transition",
	variants: {
		isFocused: fieldBorderStyles.variants.isFocusWithin,
		isInvalid: fieldBorderStyles.variants.isInvalid,
		isDisabled: fieldBorderStyles.variants.isDisabled,
	},
})

export interface TextFieldProps extends AriaTextFieldProps {
	label?: string
	description?: string
	placeholder?: string
	errorMessage?: string | ((validation: ValidationResult) => string)
}

export function TextField({
	label,
	description,
	errorMessage,
	...props
}: TextFieldProps) {
	return (
		<AriaTextField
			{...props}
			className={composeTwRenderProps(
				props.className,
				"flex flex-col gap-1 font-sans"
			)}
		>
			{label && <Label>{label}</Label>}
			<Input className={inputStyles} />
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
		</AriaTextField>
	)
}
