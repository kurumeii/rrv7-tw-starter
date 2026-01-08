import type { Story, StoryDefault } from "@ladle/react"
import { Checkbox, CheckboxGroup } from "./index"

export default {
	title: "UI / Checkbox",
} satisfies StoryDefault

export const Default: Story<{
	isDisabled?: boolean
	isIndeterminate?: boolean
	isReadOnly?: boolean
	children: string
}> = ({ children = "Accept terms and conditions", ...args }) => (
	<Checkbox {...args}>{children}</Checkbox>
)

Default.args = {
	isDisabled: false,
	isIndeterminate: false,
	isReadOnly: false,
}

export const Group: Story<{
	label: string
	description?: string
	errorMessage?: string
	isDisabled?: boolean
	isReadOnly?: boolean
}> = (args) => (
	<CheckboxGroup {...args}>
		<Checkbox value='football'>Football</Checkbox>
		<Checkbox value='basketball'>Basketball</Checkbox>
		<Checkbox value='baseball'>Baseball</Checkbox>
	</CheckboxGroup>
)

Group.args = {
	label: "Favorite Sports",
	description: "Select your favorite sports.",
	isDisabled: false,
	isReadOnly: false,
}

export const States: Story = () => (
	<div className='flex flex-col gap-4'>
		<Checkbox defaultSelected>Selected</Checkbox>
		<Checkbox isIndeterminate>Indeterminate</Checkbox>
		<Checkbox isDisabled>Disabled</Checkbox>
		<Checkbox isDisabled defaultSelected>
			Disabled & Selected
		</Checkbox>
		<Checkbox isReadOnly defaultSelected>
			Read Only
		</Checkbox>
	</div>
)

export const Validation: Story = () => (
	<div className='flex flex-col gap-8'>
		<CheckboxGroup
			label='Agree to Terms'
			isInvalid
			errorMessage='You must accept the terms.'
		>
			<Checkbox value='terms'>I accept the terms and conditions</Checkbox>
		</CheckboxGroup>

		<CheckboxGroup
			label='Favorite Colors'
			isInvalid
			errorMessage='Please select at least one color.'
		>
			<Checkbox value='red'>Red</Checkbox>
			<Checkbox value='blue'>Blue</Checkbox>
			<Checkbox value='green'>Green</Checkbox>
		</CheckboxGroup>
	</div>
)
