import { cva } from "configs/cva.config"

export const focusButtonStyles = cva({
	base: "rac-focus-visible:outline-none rac-focus-visible:ring-2 rac-focus-visible:ring-ring rac-focus-visible:ring-offset-2 ring-offset-background focus-visible:outline-none",
})

export { composeRenderProps } from "react-aria-components"
