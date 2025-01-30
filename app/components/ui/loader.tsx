import { RiLoader4Fill } from "@remixicon/react"
import { type VariantProps, cva, cx } from "configs/cva.config"
import type { PropsWithChildren, SVGProps } from "react"

const loaderStyle = cva({
	base: "animate-spin text-current duration-1000",
})

type LoaderVariantsProps = VariantProps<typeof loaderStyle>

type LoaderProps = PropsWithChildren<
	LoaderVariantsProps & SVGProps<SVGSVGElement>
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
