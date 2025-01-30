import {
	Button,
	DialogContent,
	DialogHeader,
	DialogOverlay,
	DialogTitle,
	DialogTrigger,
} from "ui"
import type { Route } from "./+types/_home._index"

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
			<div className='my-2'>
				<h3 className='text-3xl'>Buttons</h3>
				<div className='grid grid-flow-row grid-cols-3 gap-2'>
					<DialogTrigger>
						<Button>Open dialog</Button>
						<DialogOverlay>
							<DialogContent className='sm:max-w-[425px]'>
								<DialogHeader>
									<DialogTitle>Sign up</DialogTitle>
								</DialogHeader>
							</DialogContent>
						</DialogOverlay>
					</DialogTrigger>
				</div>
			</div>
		</div>
	)
}
