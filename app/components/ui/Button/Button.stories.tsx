import type { Story, StoryDefault } from "@ladle/react"
import { RiFileCheckLine, RiRocket2Fill, RiRocket2Line } from "@remixicon/react"
import { Button, type ButtonProps } from "ui"

export default {
	title: "UI / Button",
} satisfies StoryDefault

// Use Pick to select only the props we want to control in the UI
// This keeps the Controls panel clean while maintaining type safety
type ButtonStoryProps = Pick<
	ButtonProps,
	| "variants"
	| "colors"
	| "size"
	| "radius"
	| "isPending"
	| "isDisabled"
	| "fullWidth"
	| "isIcon"
> & { children: string }

export const Default: Story<ButtonStoryProps> = ({
	children = "Button Label",
	...args
}) => <Button {...args}>{children}</Button>

Default.args = {
	variants: "solid",
	colors: "primary",
	size: "md",
	radius: "md",
	isPending: false,
	isDisabled: false,
	fullWidth: false,
	isIcon: false,
	children: "Button Label",
}

Default.argTypes = {
	variants: {
		options: ["solid", "outline", "ghost"],
		control: { type: "select" },
	},
	colors: {
		options: ["primary", "secondary", "warning", "success", "error"],
		control: { type: "select" },
	},
	size: {
		options: ["sm", "md", "lg", "xl"],
		control: { type: "select" },
	},
	radius: {
		options: ["sm", "md", "lg", "full"],
		control: { type: "select" },
	},
}

export const Variants: Story = () => (
	<div className='flex flex-wrap gap-4'>
		<Button variants='solid'>Solid</Button>
		<Button variants='outline'>Outline</Button>
		<Button variants='ghost'>Ghost</Button>
		<Button colors='secondary'>Secondary</Button>
		<Button colors='warning'>Warning</Button>
		<Button colors='success'>Success</Button>
		<Button colors='error'>Error</Button>
	</div>
)

export const Sizes: Story = () => (
	<div className='flex flex-wrap items-center gap-4'>
		<Button size='sm'>Small</Button>
		<Button size='md'>Medium</Button>
		<Button size='lg'>Large</Button>
		<Button size='xl'>Extra Large</Button>
	</div>
)

export const States: Story = () => (
	<div className='flex flex-wrap gap-4'>
		<Button isDisabled>Disabled</Button>
		<Button isPending>Loading</Button>
		<Button variants='outline' isPending>
			Loading Outline
		</Button>
	</div>
)

export const Icons: Story = () => (
	<div className='flex flex-wrap gap-4'>
		<Button leftIcon={<RiRocket2Fill />}>Left Icon</Button>
		<Button rightIcon={<RiRocket2Line />}>Right Icon</Button>
		<Button isIcon aria-label='Check'>
			<RiFileCheckLine />
		</Button>
	</div>
)
