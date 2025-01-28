import type { Route } from "./+types/_home._index"

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	]
}

export default function Home() {
	return (
		<div className='flex h-svh flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 antialiased'>
			<h1 className='font-sans text-4xl'>
				Welcome to my React Router template 🎉
			</h1>
			<br />
			<h3 className='font-mono text-2xl'>With this template, you get:</h3>
			<ul className='list-disc text-left font-mono'>
				<li>React Router framework + Router dev tool</li>
				<li>Linting and format with Biome</li>
				<li>Tailwind CSS v4+</li>
				<li>Already has dark mode toggle setup</li>
			</ul>
		</div>
	)
}
