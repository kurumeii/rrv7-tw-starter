import { RiLoader4Fill } from "@remixicon/react"
import { cx, tv, type VariantProps } from "configs/ui.config"
import type { ComponentProps, PropsWithChildren } from "react"

const loaderStyle = tv({
	base: "animate-spin text-current duration-1000",
})

type LoaderVariantsProps = VariantProps<typeof loaderStyle>

type LoaderProps = PropsWithChildren<
	LoaderVariantsProps & ComponentProps<"svg">
>

export const Loader = ({ children, ...rest }: LoaderProps) => {
	return (
		<RiLoader4Fill
			{...rest}
			className={loaderStyle({
				className: cx(rest.className),
			})}
		/>
	)
}
