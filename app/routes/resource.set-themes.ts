import { createThemeAction } from "remix-themes"
import { themeResolver } from "server/themes"

export const action = createThemeAction(themeResolver)
