"use client"
import { RiCloseLine, RiSearchLine } from "@remixicon/react"
import {
	SearchField as AriaSearchField,
	type SearchFieldProps as AriaSearchFieldProps,
	type ValidationResult,
} from "react-aria-components"
import { composeTwRenderProps } from "ui"
import {
	Description,
	FieldError,
	FieldGroup,
	Input,
	Label,
} from "~/components/ui/Field"
import { FieldButton } from "~/components/ui/FieldButton"

export interface SearchFieldProps extends AriaSearchFieldProps {
	label?: string
	description?: string
	errorMessage?: string | ((validation: ValidationResult) => string)
	placeholder?: string
}

export function SearchField({
	label,
	description,
	errorMessage,
	placeholder,
	...props
}: SearchFieldProps) {
	return (
		<AriaSearchField
			{...props}
			className={composeTwRenderProps(
				props.className,
				"group flex min-w-10 max-w-full flex-col gap-1 font-sans"
			)}
		>
			{label && <Label>{label}</Label>}
			<FieldGroup>
				<RiSearchLine
					aria-hidden
					className='ml-2 h-4 w-4 text-muted-foreground group-disabled:opacity-50 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]'
				/>
				<Input
					placeholder={placeholder}
					className='pl-2 [&::-webkit-search-cancel-button]:hidden'
				/>
				<FieldButton className='mr-1 w-6 group-empty:invisible'>
					<RiCloseLine aria-hidden className='h-4 w-4' />
				</FieldButton>
			</FieldGroup>
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
		</AriaSearchField>
	)
}
