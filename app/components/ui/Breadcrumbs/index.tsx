"use client"

import { RiArrowRightSLine } from "@remixicon/react"
import { cx } from "configs/ui.config"
import type { ComponentProps } from "react"
import * as RAC from "react-aria-components"
import { Link } from "~/components/ui/Link"
import { composeTwRenderProps } from "~/components/ui/primitives"

export function Breadcrumbs<T extends object>(props: RAC.BreadcrumbsProps<T>) {
	return (
		<RAC.Breadcrumbs {...props} className={cx("flex gap-1", props.className)} />
	)
}

export function Breadcrumb({
	className,
	...props
}: RAC.BreadcrumbProps & Omit<ComponentProps<typeof Link>, "className">) {
	return (
		<RAC.Breadcrumb
			className={composeTwRenderProps(className, "flex items-center gap-1")}
		>
			{(renderProps) => (
				<>
					<Link variant='secondary' {...props} />
					{!renderProps.isCurrent && (
						<RiArrowRightSLine className='size-3 text-muted-foreground' />
					)}
				</>
			)}
		</RAC.Breadcrumb>
	)
}
