import { RiArrowDownLine } from "@remixicon/react"
import { Button, type ButtonProps } from "ui"
import type { Route } from "./+types/_home._index"

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	]
}

export default function Home() {
	const variants: Array<ButtonProps["variants"]> = ["solid", "outline", "ghost"]
	const colors: Array<ButtonProps["colors"]> = [
		"primary",
		"secondary",
		"error",
		"warning",
		"success",
	]
	return (
		<div className='flex h-svh flex-col items-center justify-center bg-background font-sans antialiased'>
			<h1 className='text-4xl'>Welcome to my React Router template 🎉</h1>
			<br />
			<h3 className='font-mono text-2xl'>With this template, you get:</h3>
			<ul className='list-disc text-left font-mono'>
				<li>React Router framework + Router dev tool</li>
				<li>Linting and format with Biome</li>
				<li>Tailwind CSS v4 + React aria components</li>
				<li>Already has dark mode toggle setup</li>
			</ul>
			<br />
			<div className='my-2'>
				<h3 className='text-3xl'>Buttons</h3>
				<div className='grid grid-flow-row grid-cols-3 gap-2'>
					{variants.map((variant) => (
						<div key={variant} className='grid grid-flow-row gap-2'>
							{colors.map((color) => (
								<Button
									key={color}
									variants={variant}
									colors={color}
									fullWidth
									// rightIcon={<RiArrowDownLine />}
									// leftIcon={<RiArrowUpLine />}
									isPending
								>
									{variant}-{color}
								</Button>
							))}
						</div>
					))}
					<Button isIcon>
						<RiArrowDownLine />
					</Button>
				</div>
			</div>
		</div>
	)
}
