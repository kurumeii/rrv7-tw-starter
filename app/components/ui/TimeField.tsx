"use client"
import {
	TimeField as AriaTimeField,
	type TimeFieldProps as AriaTimeFieldProps,
	type TimeValue,
	type ValidationResult,
} from "react-aria-components"
import { composeTwRenderProps } from "ui"
import { DateInput } from "~/components/ui/DateField"
import { Description, FieldError, Label } from "~/components/ui/Field"

export interface TimeFieldProps<T extends TimeValue>
	extends AriaTimeFieldProps<T> {
	label?: string
	description?: string
	errorMessage?: string | ((validation: ValidationResult) => string)
}

export function TimeField<T extends TimeValue>({
	label,
	description,
	errorMessage,
	...props
}: TimeFieldProps<T>) {
	return (
		<AriaTimeField
			{...props}
			className={composeTwRenderProps(
				props.className,
				"flex flex-col gap-1 font-sans"
			)}
		>
			<Label>{label}</Label>
			<DateInput />
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
		</AriaTimeField>
	)
}
