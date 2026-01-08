"use client"

import { RiCheckLine, RiSubtractLine } from "@remixicon/react"
import type { ReactNode } from "react"
import * as RAC from "react-aria-components"
import { tv } from "tailwind-variants"
import { Description, FieldError, Label } from "~/components/ui/Field"
import { composeTwRenderProps, focusRing } from "~/components/ui/primitives"

const checkboxStyles = tv({
	base: "group relative flex items-center gap-2 font-sans text-sm transition [-webkit-tap-highlight-color:transparent]",
	variants: {
		isDisabled: {
			false: "text-neutral-800 dark:text-neutral-200",
			true: "text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]",
		},
	},
})

const boxStyles = tv({
	extend: focusRing,
	base: "box-border flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-sm border transition",
	variants: {
		isSelected: {
			false:
				"border-(--color) bg-white [--color:var(--color-neutral-400)] dark:bg-neutral-900 group-pressed:[--color:var(--color-neutral-500)] dark:[--color:var(--color-neutral-400)] dark:group-pressed:[--color:var(--color-neutral-300)]",
			true: "border-(--color) bg-(--color) [--color:var(--color-neutral-700)] group-pressed:[--color:var(--color-neutral-800)] dark:[--color:var(--color-neutral-300)] dark:group-pressed:[--color:var(--color-neutral-200)] forced-colors:[--color:Highlight]!",
		},
		isInvalid: {
			true: "[--color:var(--color-red-700)] group-pressed:[--color:var(--color-red-800)] dark:[--color:var(--color-red-600)] dark:group-pressed:[--color:var(--color-red-700)] forced-colors:[--color:Mark]!",
		},
		isDisabled: {
			true: "[--color:var(--color-neutral-200)] dark:[--color:var(--color-neutral-700)] forced-colors:[--color:GrayText]!",
		},
	},
})

const iconStyles =
	"w-3.5 h-3.5 text-white group-disabled:text-neutral-400 dark:text-neutral-900 dark:group-disabled:text-neutral-600 forced-colors:text-[HighlightText]"

export function Checkbox(props: RAC.CheckboxProps) {
	return (
		<RAC.Checkbox
			{...props}
			className={RAC.composeRenderProps(
				props.className,
				(className, renderProps) =>
					checkboxStyles({ ...renderProps, className })
			)}
		>
			{RAC.composeRenderProps(
				props.children,
				(children, { isSelected, isIndeterminate, ...renderProps }) => (
					<>
						<div
							className={boxStyles({
								isSelected: isSelected || isIndeterminate,
								...renderProps,
							})}
						>
							{isIndeterminate ? (
								<RiSubtractLine aria-hidden className={iconStyles} />
							) : isSelected ? (
								<RiCheckLine aria-hidden className={iconStyles} />
							) : null}
						</div>
						{children}
					</>
				)
			)}
		</RAC.Checkbox>
	)
}

export interface CheckboxGroupProps
	extends Omit<RAC.CheckboxGroupProps, "children"> {
	label?: string
	children?: ReactNode
	description?: string
	errorMessage?: string | ((validation: RAC.ValidationResult) => string)
}

export function CheckboxGroup(props: CheckboxGroupProps) {
	return (
		<RAC.CheckboxGroup
			{...props}
			className={composeTwRenderProps(
				props.className,
				"flex flex-col gap-2 font-sans"
			)}
		>
			<Label>{props.label}</Label>
			{props.children}
			{props.description && <Description>{props.description}</Description>}
			<FieldError>{props.errorMessage}</FieldError>
		</RAC.CheckboxGroup>
	)
}
