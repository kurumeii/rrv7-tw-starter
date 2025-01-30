import { createThemeAction } from "remix-themes"
import { themeResolver } from "server/themes.server"

export const action = createThemeAction(themeResolver)
