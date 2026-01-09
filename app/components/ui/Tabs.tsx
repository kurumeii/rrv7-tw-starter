"use client"
import {
	composeRenderProps,
	Tab as RACTab,
	TabList as RACTabList,
	TabPanel as RACTabPanel,
	TabPanels as RACTabPanels,
	Tabs as RACTabs,
	SelectionIndicator,
	type TabListProps,
	type TabPanelProps,
	type TabPanelsProps,
	type TabProps,
	type TabsProps,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"
import { focusRing } from "ui"

const tabsStyles = tv({
	base: "flex max-w-full gap-4 font-sans",
	variants: {
		orientation: {
			horizontal: "flex-col",
			vertical: "flex-row",
		},
	},
})

export function Tabs(props: TabsProps) {
	return (
		<RACTabs
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tabsStyles({ ...renderProps, className })
			)}
		/>
	)
}

const tabListStyles = tv({
	base: "-m-1 flex max-w-full overflow-x-auto overflow-y-clip p-1 [scrollbar-width:none]",
	variants: {
		orientation: {
			horizontal: "flex-row",
			vertical: "flex-col items-start",
		},
	},
})

export function TabList<T extends object>(props: TabListProps<T>) {
	return (
		<RACTabList
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tabListStyles({ ...renderProps, className })
			)}
		/>
	)
}

const tabProps = tv({
	extend: focusRing,
	base: "group relative flex cursor-default items-center rounded-full px-3 py-1.5 font-medium text-sm transition forced-color-adjust-none [-webkit-tap-highlight-color:transparent]",
	variants: {
		isDisabled: {
			true: "text-muted-foreground forced-colors:text-[GrayText]",
		},
	},
})

export function Tab(props: TabProps) {
	return (
		<RACTab
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tabProps({ ...renderProps, className })
			)}
		>
			{composeRenderProps(props.children, (children) => (
				<>
					{children}
					<SelectionIndicator className='absolute top-0 left-0 z-10 h-full w-full rounded-full bg-foreground mix-blend-difference group-disabled:bg-muted group-disabled:mix-blend-normal motion-safe:transition-[translate,width,height]' />
				</>
			))}
		</RACTab>
	)
}

export function TabPanels<T extends object>(props: TabPanelsProps<T>) {
	return (
		<RACTabPanels
			{...props}
			className={twMerge(
				"relative h-(--tab-panel-height) overflow-clip motion-safe:transition-[height]",
				props.className
			)}
		/>
	)
}

const tabPanelStyles = tv({
	extend: focusRing,
	base: "exiting:absolute exiting:top-0 exiting:left-0 box-border exiting:w-full flex-1 p-4 text-foreground text-sm entering:opacity-0 exiting:opacity-0 transition",
})

export function TabPanel(props: TabPanelProps) {
	return (
		<RACTabPanel
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tabPanelStyles({ ...renderProps, className })
			)}
		/>
	)
}
