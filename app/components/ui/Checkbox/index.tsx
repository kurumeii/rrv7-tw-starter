"use client"

import { RiCheckLine, RiSubtractLine } from "@remixicon/react"
import { tv } from "configs/ui.config"
import type { ReactNode } from "react"
import * as RAC from "react-aria-components"
import {
	composeTwRenderProps,
	Description,
	FieldError,
	focusRing,
	Label,
} from "ui"

const checkboxStyles = tv({
	base: "group relative flex items-center gap-2 font-sans text-sm transition [-webkit-tap-highlight-color:transparent]",
	variants: {
		isDisabled: {
			false: "text-foreground",
			true: "text-foreground forced-colors:text-[GrayText]",
		},
	},
})

const boxStyles = tv({
	extend: focusRing,
	base: "box-border flex size-4.5 shrink-0 items-center justify-center rounded-sm border transition",
	variants: {
		isSelected: {
			false:
				"border-(--color) bg-background [--color:var(--color-border)] group-pressed:[--color:var(--color-input)]",
			true: "border-(--color) bg-(--color) [--color:var(--color-primary)] group-pressed:[--color:var(--color-primary)] forced-colors:[--color:Highlight]!",
		},
		isInvalid: {
			true: "[--color:var(--color-error)] group-pressed:[--color:var(--color-error)] forced-colors:[--color:Mark]!",
		},
		isDisabled: {
			true: "[--color:var(--color-muted)] forced-colors:[--color:GrayText]!",
		},
	},
})

const iconStyles = tv({
	base: "size-3.5 text-primary-foreground group-invalid:text-error-foreground group-disabled:text-muted-foreground forced-colors:text-[HighlightText]",
})

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
								<RiSubtractLine aria-hidden className={iconStyles()} />
							) : isSelected ? (
								<RiCheckLine aria-hidden className={iconStyles()} />
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
