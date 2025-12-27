import { RouterProvider } from "react-aria-components"
import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useHref,
	useNavigate,
} from "react-router"
import { PreventFlashOnWrongTheme, ThemeProvider } from "remix-themes"
import { themeResolver } from "server/themes.server"
import type { Route } from "./+types/root"
import stylesheet from "./app.css?url"

export const links: Route.LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
]

export const loader = async ({ request }: Route.LoaderArgs) => {
	const { getTheme } = await themeResolver(request)
	return { theme: getTheme() }
}

export default function App({ loaderData }: Route.ComponentProps) {
	const { theme } = loaderData
	const navigate = useNavigate()
	return (
		<ThemeProvider
			disableTransitionOnThemeChange
			specifiedTheme={theme}
			themeAction='/resource/set-themes'
		>
			<html lang='en' className={theme ?? ""}>
				<head>
					<meta charSet='utf-8' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<Meta />
					<Links />
					<PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
				</head>
				<body>
					<RouterProvider navigate={navigate} useHref={useHref}>
						<Outlet />
					</RouterProvider>
					<ScrollRestoration />
					<Scripts />
				</body>
			</html>
		</ThemeProvider>
	)
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!"
	let details = "An unexpected error occurred."
	let stack: string | undefined

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error"
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message
		stack = error.stack
	}

	return (
		<main className='container mx-auto p-4 pt-16'>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className='w-full overflow-x-auto p-4'>
					<code>{stack}</code>
				</pre>
			)}
		</main>
	)
}
