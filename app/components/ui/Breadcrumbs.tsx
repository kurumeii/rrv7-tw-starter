"use client"
import { RiArrowRightSLine } from "@remixicon/react"
import {
	Breadcrumb as AriaBreadcrumb,
	Breadcrumbs as AriaBreadcrumbs,
	type BreadcrumbProps,
	type BreadcrumbsProps,
	type LinkProps,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { Link } from "~/components/ui/Link"
import { composeTwRenderProps } from "~/components/ui/primitives"

export function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
	return (
		<AriaBreadcrumbs
			{...props}
			className={twMerge("flex gap-1", props.className)}
		/>
	)
}

export function Breadcrumb(
	props: BreadcrumbProps & Omit<LinkProps, "className">
) {
	return (
		<AriaBreadcrumb
			{...props}
			className={composeTwRenderProps(
				props.className,
				"flex items-center gap-1"
			)}
		>
			{({ isCurrent }) => (
				<>
					<Link variant='secondary' {...props} />
					{!isCurrent && (
						<RiArrowRightSLine className='h-3 w-3 text-neutral-600 dark:text-neutral-400' />
					)}
				</>
			)}
		</AriaBreadcrumb>
	)
}
