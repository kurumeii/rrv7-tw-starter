import type { Story, StoryDefault } from "@ladle/react"
import { Button } from "."

export default {
	title: "UI / Button",
} satisfies StoryDefault

export const Default: Story = () => <Button>Click me</Button>

export const Variants: Story = () => (
	<div className='flex items-center gap-4'>
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
	<div className='flex items-center gap-4'>
		<Button size='sm'>Small</Button>
		<Button size='md'>Medium</Button>
		<Button size='lg'>Large</Button>
		<Button size='xl'>Extra Large</Button>
		<Button size='md' isIcon>
			<span>🔥</span>
		</Button>
	</div>
)

export const Disabled: Story = () => (
	<div className='flex items-center gap-4'>
		<Button isDisabled>Disabled</Button>
		<Button variants='outline' isDisabled>
			Disabled Outline
		</Button>
	</div>
)
