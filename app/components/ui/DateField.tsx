"use client"
import {
	DateField as AriaDateField,
	type DateFieldProps as AriaDateFieldProps,
	DateInput as AriaDateInput,
	type DateInputProps,
	DateSegment,
	type DateValue,
	type ValidationResult,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { composeTwRenderProps } from "ui"
import {
	Description,
	FieldError,
	fieldGroupStyles,
	Label,
} from "~/components/ui/Field"

export interface DateFieldProps<T extends DateValue>
	extends AriaDateFieldProps<T> {
	label?: string
	description?: string
	errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DateField<T extends DateValue>({
	label,
	description,
	errorMessage,
	...props
}: DateFieldProps<T>) {
	return (
		<AriaDateField
			{...props}
			className={composeTwRenderProps(props.className, "flex flex-col gap-1")}
		>
			{label && <Label>{label}</Label>}
			<DateInput />
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
		</AriaDateField>
	)
}

const segmentStyles = tv({
	base: "inline whitespace-nowrap rounded-xs p-0.5 type-literal:p-0 text-foreground caret-transparent outline forced-color-adjust-none [-webkit-tap-highlight-color:transparent] forced-colors:text-[ButtonText]",
	variants: {
		isPlaceholder: {
			true: "text-muted-foreground",
		},
		isDisabled: {
			true: "text-muted-foreground/50 forced-colors:text-[GrayText]",
		},
		isFocused: {
			true: "bg-primary text-primary-foreground forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
		},
	},
})

export function DateInput(props: Omit<DateInputProps, "children">) {
	return (
		<AriaDateInput
			className={(renderProps) =>
				fieldGroupStyles({
					...renderProps,
					class:
						"inline h-9 min-w-37.5 cursor-text overflow-x-auto whitespace-nowrap px-3 font-sans text-sm leading-8.5 [scrollbar-width:none] disabled:cursor-default",
				})
			}
			{...props}
		>
			{(segment) => <DateSegment segment={segment} className={segmentStyles} />}
		</AriaDateInput>
	)
}
