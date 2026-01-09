"use client"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
	Calendar as AriaCalendar,
	CalendarGridHeader as AriaCalendarGridHeader,
	type CalendarProps as AriaCalendarProps,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	CalendarHeaderCell,
	type DateValue,
	Heading,
	Text,
	useLocale,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { composeTwRenderProps, focusRing } from "ui"
import { Button } from "~/components/ui/Button"

const cellStyles = tv({
	extend: focusRing,
	base: "flex aspect-square w-[calc(100cqw/7)] cursor-default items-center justify-center rounded-full text-sm forced-color-adjust-none [-webkit-tap-highlight-color:transparent]",
	variants: {
		isSelected: {
			false: "pressed:bg-muted text-foreground hover:bg-muted/80",
			true: "bg-primary text-primary-foreground invalid:bg-error forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:invalid:bg-[Mark]",
		},
		isDisabled: {
			true: "text-muted-foreground forced-colors:text-[GrayText]",
		},
	},
})

export interface CalendarProps<T extends DateValue>
	extends Omit<AriaCalendarProps<T>, "visibleDuration"> {
	errorMessage?: string
}

export function Calendar<T extends DateValue>({
	errorMessage,
	...props
}: CalendarProps<T>) {
	return (
		<AriaCalendar
			{...props}
			className={composeTwRenderProps(
				props.className,
				"@container flex w-[calc(9*var(--spacing)*7)] max-w-full flex-col font-sans"
			)}
		>
			<CalendarHeader />
			<CalendarGrid className='border-spacing-0'>
				<CalendarGridHeader />
				<CalendarGridBody>
					{(date) => <CalendarCell date={date} className={cellStyles} />}
				</CalendarGridBody>
			</CalendarGrid>
			{errorMessage && (
				<Text slot='errorMessage' className='text-error text-sm'>
					{errorMessage}
				</Text>
			)}
		</AriaCalendar>
	)
}

export function CalendarHeader() {
	const { direction } = useLocale()

	return (
		<header className='flex items-center gap-1 border-box px-1 pb-4'>
			<Button variants='ghost' slot='previous'>
				{direction === "rtl" ? (
					<RiArrowRightSLine aria-hidden size={18} />
				) : (
					<RiArrowLeftSLine aria-hidden size={18} />
				)}
			</Button>
			<Heading className='mx-2 my-0 flex-1 text-center font-sans font-semibold text-base text-foreground [font-variation-settings:normal]' />
			<Button variants='ghost' slot='next'>
				{direction === "rtl" ? (
					<RiArrowLeftSLine aria-hidden size={18} />
				) : (
					<RiArrowRightSLine aria-hidden size={18} />
				)}
			</Button>
		</header>
	)
}

export function CalendarGridHeader() {
	return (
		<AriaCalendarGridHeader>
			{(day) => (
				<CalendarHeaderCell className='font-semibold text-muted-foreground text-xs'>
					{day}
				</CalendarHeaderCell>
			)}
		</AriaCalendarGridHeader>
	)
}
