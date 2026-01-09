"use client"
import {
	ProgressBar as AriaProgressBar,
	type ProgressBarProps as AriaProgressBarProps,
} from "react-aria-components"
import { composeTwRenderProps } from "ui"
import { Label } from "~/components/ui/Field"

export interface ProgressBarProps extends AriaProgressBarProps {
	label?: string
}

export function ProgressBar({ label, ...props }: ProgressBarProps) {
	return (
		<AriaProgressBar
			{...props}
			className={composeTwRenderProps(
				props.className,
				"flex w-64 max-w-full flex-col gap-2 font-sans"
			)}
		>
			{({ percentage, valueText, isIndeterminate }) => (
				<>
					<div className='flex justify-between gap-2'>
						<Label>{label}</Label>
						<span className='text-muted-foreground text-sm'>{valueText}</span>
					</div>
					<div className='relative h-2 max-w-full overflow-hidden rounded-full bg-muted outline-1 outline-transparent -outline-offset-1'>
						<div
							className={`absolute top-0 h-full rounded-full bg-primary forced-colors:bg-[Highlight] ${isIndeterminate ? "slide-in-from-left-[20rem] repeat-infinite left-full animate-in duration-1000 ease-out" : "left-0"}`}
							style={{ width: `${isIndeterminate ? 40 : percentage}%` }}
						/>
					</div>
				</>
			)}
		</AriaProgressBar>
	)
}
