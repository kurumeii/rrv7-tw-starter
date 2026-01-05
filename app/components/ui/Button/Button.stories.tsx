import type { Story, StoryDefault } from "@ladle/react"
import { RiFileCheckLine, RiRocket2Fill, RiRocket2Line } from "@remixicon/react"
import { Button } from "."

export default {
	title: "UI / Button",
} satisfies StoryDefault

export const Variants: Story = () => (
	<>
		<Button variants='solid'>Solid</Button>
		<Button variants='outline'>Outline</Button>
		<Button variants='ghost'>Ghost</Button>
		<Button colors='secondary'>Secondary</Button>
		<Button colors='warning'>Warning</Button>
		<Button colors='success'>Success</Button>
		<Button colors='error'>Error</Button>
	</>
)

export const Sizes: Story = () => (
	<>
		<Button size='sm'>Small</Button>
		<Button size='md'>Medium</Button>
		<Button size='lg'>Large</Button>
		<Button size='xl'>Extra Large</Button>
		<Button size='md' isIcon>
			<RiFileCheckLine />
		</Button>
	</>
)

export const Disabled: Story = () => (
	<>
		<Button isDisabled>Disabled</Button>
		<Button variants='outline' isDisabled>
			Disabled Outline
		</Button>
	</>
)

export const Misc: Story = () => (
	<>
		<Button fullWidth>Full Width</Button>
		<Button size='lg' leftIcon={<RiRocket2Fill />}>
			With left icon
		</Button>
		<Button size='lg' rightIcon={<RiRocket2Line />}>
			With right icon
		</Button>
	</>
)
