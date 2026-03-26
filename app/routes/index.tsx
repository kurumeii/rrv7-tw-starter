import { Button } from "ui"
import type { Route } from "./+types"

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	]
}

export default function Home() {
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
			<div className='flex flex-wrap gap-4'>
				<Button>Primary Solid</Button>
				<Button variants='solid' colors='secondary'>
					Secondary Solid
				</Button>
				<Button variants='outline' colors='primary'>
					Primary Outline
				</Button>
				<Button variants='outline' colors='secondary'>
					Secondary Outline
				</Button>
				<Button variants='ghost' colors='warning'>
					Warning Ghost
				</Button>
				<Button variants='solid' colors='success'>
					Success Solid
				</Button>
				<Button variants='solid' colors='error'>
					Error Solid
				</Button>
				<Button size='sm'>Small</Button>
				<Button size='lg'>Large</Button>
				<Button size='xl'>Extra Large</Button>
			</div>
		</div>
	)
}
