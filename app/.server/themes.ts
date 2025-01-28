import { createCookieSessionStorage } from "react-router"
import { createThemeSessionResolver } from "remix-themes"

const themeStorage = createCookieSessionStorage({
	cookie: {
		name: "rrv7-tw-starter-theme",
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		secure: import.meta.env.PROD,
		secrets: ["s3cr3t"],
	},
})

export const themeResolver = createThemeSessionResolver(themeStorage)
