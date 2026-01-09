"use client"
import {
	RangeCalendar as AriaRangeCalendar,
	type RangeCalendarProps as AriaRangeCalendarProps,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	type DateValue,
	Text,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { composeTwRenderProps, focusRing } from "ui"
import { CalendarGridHeader, CalendarHeader } from "~/components/ui/Calendar"

export interface RangeCalendarProps<T extends DateValue>
	extends Omit<AriaRangeCalendarProps<T>, "visibleDuration"> {
	errorMessage?: string
}

const cell = tv({
	extend: focusRing,
	base: "flex h-full w-full items-center justify-center rounded-full text-foreground forced-color-adjust-none",
	variants: {
		selectionState: {
			none: "group-hover:bg-muted group-pressed:bg-muted/80",
			middle: [
				"group-hover:bg-primary/20 forced-colors:group-hover:bg-[Highlight]",
				"group-invalid:group-hover:bg-error/20 forced-colors:group-invalid:group-hover:bg-[Mark]",
				"group-pressed:bg-primary/30 forced-colors:text-[HighlightText] forced-colors:group-pressed:bg-[Highlight]",
				"group-invalid:group-pressed:bg-error/30 forced-colors:group-invalid:group-pressed:bg-[Mark]",
			],
			cap: "bg-primary text-primary-foreground group-invalid:bg-error forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:group-invalid:bg-[Mark]",
		},
		isDisabled: {
			true: "text-muted-foreground forced-colors:text-[GrayText]",
		},
	},
})

export function RangeCalendar<T extends DateValue>({
	errorMessage,
	...props
}: RangeCalendarProps<T>) {
	return (
		<AriaRangeCalendar
			{...props}
			className={composeTwRenderProps(
				props.className,
				"@container w-[calc(9*var(--spacing)*7)] max-w-full font-sans"
			)}
		>
			<CalendarHeader />
			<CalendarGrid className='border-spacing-0 [&_td]:px-0 [&_td]:py-px'>
				<CalendarGridHeader />
				<CalendarGridBody>
					{(date) => (
						<CalendarCell
							date={date}
							className='group aspect-square w-[calc(100cqw/7)] cursor-default selected:bg-primary/10 outside-month:text-muted-foreground text-sm outline-0 [-webkit-tap-highlight-color:transparent] selection-start:rounded-s-full selection-end:rounded-e-full invalid:selected:bg-error/10 forced-colors:selected:bg-[Highlight] forced-colors:invalid:selected:bg-[Mark] [td:first-child_&]:rounded-s-full [td:last-child_&]:rounded-e-full'
						>
							{({
								formattedDate,
								isSelected,
								isSelectionStart,
								isSelectionEnd,
								isFocusVisible,
								isDisabled,
							}) => (
								<span
									className={cell({
										selectionState:
											isSelected && (isSelectionStart || isSelectionEnd)
												? "cap"
												: isSelected
													? "middle"
													: "none",
										isDisabled,
										isFocusVisible,
									})}
								>
									{formattedDate}
								</span>
							)}
						</CalendarCell>
					)}
				</CalendarGridBody>
			</CalendarGrid>
			{errorMessage && (
				<Text slot='errorMessage' className='text-error text-sm'>
					{errorMessage}
				</Text>
			)}
		</AriaRangeCalendar>
	)
}
