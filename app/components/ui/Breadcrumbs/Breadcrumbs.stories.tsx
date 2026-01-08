import type { Story, StoryDefault } from "@ladle/react"
import { Breadcrumb, Breadcrumbs } from "ui"

export default {
	title: "UI / Breadcrumbs",
} satisfies StoryDefault

export const Default: Story<{
	isDisabled?: boolean
}> = (args) => (
	<Breadcrumbs {...args}>
		<Breadcrumb href='/'>Home</Breadcrumb>
		<Breadcrumb href='/docs'>Docs</Breadcrumb>
		<Breadcrumb>Breadcrumbs</Breadcrumb>
	</Breadcrumbs>
)

Default.args = {
	isDisabled: false,
}

export const ManyItems: Story = () => (
	<Breadcrumbs>
		<Breadcrumb href='/'>Home</Breadcrumb>
		<Breadcrumb href='/docs'>Docs</Breadcrumb>
		<Breadcrumb href='/docs/components'>Components</Breadcrumb>
		<Breadcrumb href='/docs/components/ui'>UI</Breadcrumb>
		<Breadcrumb>Breadcrumbs</Breadcrumb>
	</Breadcrumbs>
)

export const SingleItem: Story = () => (
	<Breadcrumbs>
		<Breadcrumb href='/'>Home</Breadcrumb>
	</Breadcrumbs>
)
