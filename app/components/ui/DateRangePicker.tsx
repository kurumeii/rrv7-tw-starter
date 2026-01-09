"use client"
import { RiCalendarLine } from "@remixicon/react"
import {
	DateRangePicker as AriaDateRangePicker,
	type DateRangePickerProps as AriaDateRangePickerProps,
	type DateValue,
	type ValidationResult,
} from "react-aria-components"
import { composeTwRenderProps } from "ui"
import { DateInput } from "~/components/ui/DateField"
import {
	Description,
	FieldError,
	FieldGroup,
	Label,
} from "~/components/ui/Field"
import { FieldButton } from "~/components/ui/FieldButton"
import { Popover } from "~/components/ui/Popover"
import { RangeCalendar } from "~/components/ui/RangeCalendar"

export interface DateRangePickerProps<T extends DateValue>
	extends AriaDateRangePickerProps<T> {
	label?: string
	description?: string
	errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DateRangePicker<T extends DateValue>({
	label,
	description,
	errorMessage,
	...props
}: DateRangePickerProps<T>) {
	return (
		<AriaDateRangePicker
			{...props}
			className={composeTwRenderProps(
				props.className,
				"group flex max-w-full flex-col gap-1 font-sans"
			)}
		>
			{label && <Label>{label}</Label>}
			<FieldGroup className='w-auto min-w-52 cursor-text disabled:cursor-default'>
				<div className='flex w-fit flex-1 items-center overflow-x-auto overflow-y-clip [scrollbar-width:none]'>
					<DateInput slot='start' className='ps-3 pe-2 text-sm' />
					<span
						aria-hidden='true'
						className='text-foreground group-disabled:opacity-50 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]'
					>
						–
					</span>
					<DateInput slot='end' className='flex-1 ps-2 pe-3 text-sm' />
				</div>
				<FieldButton className='mr-1 w-6 outline-offset-0'>
					<RiCalendarLine aria-hidden className='h-4 w-4' />
				</FieldButton>
			</FieldGroup>
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
			<Popover className='p-2'>
				<RangeCalendar />
			</Popover>
		</AriaDateRangePicker>
	)
}
