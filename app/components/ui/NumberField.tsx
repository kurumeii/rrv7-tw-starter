"use client"
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react"
import {
	NumberField as AriaNumberField,
	type NumberFieldProps as AriaNumberFieldProps,
	Button,
	type ButtonProps,
	type ValidationResult,
} from "react-aria-components"
import {
	Description,
	FieldError,
	FieldGroup,
	fieldBorderStyles,
	Input,
	Label,
} from "~/components/ui/Field"
import { composeTwRenderProps } from "~/components/ui/primitives"

export interface NumberFieldProps extends AriaNumberFieldProps {
	label?: string
	description?: string
	errorMessage?: string | ((validation: ValidationResult) => string)
	placeholder?: string
}

export function NumberField({
	label,
	description,
	errorMessage,
	placeholder,
	...props
}: NumberFieldProps) {
	return (
		<AriaNumberField
			{...props}
			className={composeTwRenderProps(
				props.className,
				"group flex flex-col gap-1 font-sans"
			)}
		>
			<Label>{label}</Label>
			<FieldGroup>
				{(renderProps) => (
					<>
						<Input className='w-20' placeholder={placeholder} />
						<div
							className={fieldBorderStyles({
								...renderProps,
								class: "flex h-full flex-col border-s",
							})}
						>
							<StepperButton slot='increment'>
								<RiArrowUpSLine aria-hidden className='h-4 w-4' />
							</StepperButton>
							<div
								className={fieldBorderStyles({
									...renderProps,
									class: "border-b",
								})}
							/>
							<StepperButton slot='decrement'>
								<RiArrowDownSLine aria-hidden className='h-4 w-4' />
							</StepperButton>
						</div>
					</>
				)}
			</FieldGroup>
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
		</AriaNumberField>
	)
}

function StepperButton(props: ButtonProps) {
	return (
		<Button
			{...props}
			className='box-border flex flex-1 cursor-default border-0 bg-transparent pressed:bg-neutral-100 px-0.5 py-0 text-neutral-500 [-webkit-tap-highlight-color:transparent] group-disabled:text-neutral-200 dark:pressed:bg-neutral-800 dark:text-neutral-400 dark:group-disabled:text-neutral-600 forced-colors:group-disabled:text-[GrayText]'
		/>
	)
}
