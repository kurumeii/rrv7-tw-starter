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
import { Button } from "~/components/ui/Button"
import { composeTwRenderProps, focusRing } from "~/components/ui/primitives"

const cellStyles = tv({
	extend: focusRing,
	base: "flex aspect-square w-[calc(100cqw/7)] cursor-default items-center justify-center rounded-full text-sm forced-color-adjust-none [-webkit-tap-highlight-color:transparent]",
	variants: {
		isSelected: {
			false:
				"pressed:bg-neutral-300 text-neutral-900 hover:bg-neutral-200 dark:pressed:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700",
			true: "bg-blue-600 text-white invalid:bg-red-600 forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:invalid:bg-[Mark]",
		},
		isDisabled: {
			true: "text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]",
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
				<Text slot='errorMessage' className='text-red-600 text-sm'>
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
			<Heading className='mx-2 my-0 flex-1 text-center font-sans font-semibold text-base text-neutral-900 [font-variation-settings:normal] dark:text-neutral-200' />
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
				<CalendarHeaderCell className='font-semibold text-neutral-500 text-xs'>
					{day}
				</CalendarHeaderCell>
			)}
		</AriaCalendarGridHeader>
	)
}
