"use client"
import { RiArrowUpLine } from "@remixicon/react"
import {
	Cell as AriaCell,
	Column as AriaColumn,
	Row as AriaRow,
	Table as AriaTable,
	TableBody as AriaTableBody,
	TableHeader as AriaTableHeader,
	type TableProps as AriaTableProps,
	Button,
	type CellProps,
	Collection,
	type ColumnProps,
	ColumnResizer,
	composeRenderProps,
	Group,
	ResizableTableContainer,
	type RowProps,
	type TableBodyProps,
	type TableHeaderProps,
	useTableOptions,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"
import { composeTwRenderProps, focusRing } from "ui"
import { Checkbox } from "~/components/ui/Checkbox"

interface TableProps extends Omit<AriaTableProps, "className"> {
	className?: string
}

export function Table(props: TableProps) {
	return (
		<ResizableTableContainer
			onScroll={props.onScroll}
			className={twMerge(
				"relative box-border max-h-80 w-full scroll-pt-[2.281rem] overflow-auto rounded-lg border border-border bg-background font-sans",
				props.className
			)}
		>
			<AriaTable
				{...props}
				className='box-border border-separate border-spacing-0 overflow-hidden has-[>[data-empty]]:h-full'
			/>
		</ResizableTableContainer>
	)
}

const columnStyles = tv({
	extend: focusRing,
	base: "box-border flex h-5 flex-1 items-center gap-1 overflow-hidden px-2",
})

const resizerStyles = tv({
	extend: focusRing,
	base: "box-content h-5 resizing:w-[2px] w-px translate-x-[8px] cursor-col-resize rounded-xs bg-muted resizing:bg-primary bg-clip-content px-[8px] py-1 resizing:pl-[7px] -outline-offset-2 forced-colors:bg-[ButtonBorder] forced-colors:resizing:bg-[Highlight]",
})

export function Column(props: ColumnProps) {
	return (
		<AriaColumn
			{...props}
			className={composeTwRenderProps(
				props.className,
				"box-border h-1 cursor-default text-start font-semibold text-foreground text-sm focus-within:z-20 [&:hover]:z-20"
			)}
		>
			{composeRenderProps(
				props.children,
				(children, { allowsSorting, sortDirection }) => (
					<div className='flex items-center'>
						<Group role='presentation' tabIndex={-1} className={columnStyles}>
							<span className='truncate'>{children}</span>
							{allowsSorting && (
								<span
									className={`flex h-4 w-4 items-center justify-center transition ${
										sortDirection === "descending" ? "rotate-180" : ""
									}`}
								>
									{sortDirection && (
										<RiArrowUpLine
											aria-hidden
											className='h-4 w-4 text-muted-foreground forced-colors:text-[ButtonText]'
										/>
									)}
								</span>
							)}
						</Group>
						{!props.width && <ColumnResizer className={resizerStyles} />}
					</div>
				)
			)}
		</AriaColumn>
	)
}

export function TableHeader<T extends object>(props: TableHeaderProps<T>) {
	const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

	return (
		<AriaTableHeader
			{...props}
			className={composeTwRenderProps(
				props.className,
				"sticky top-0 z-10 rounded-t-lg border-border border-b bg-muted/60 backdrop-blur-md forced-colors:bg-[Canvas]"
			)}
		>
			{/* Add extra columns for drag and drop and selection. */}
			{allowsDragging && <Column />}
			{selectionBehavior === "toggle" && (
				<AriaColumn
					width={36}
					minWidth={36}
					className='box-border cursor-default p-2 text-start font-semibold text-sm'
				>
					{selectionMode === "multiple" && <Checkbox slot='selection' />}
				</AriaColumn>
			)}
			<Collection items={props.columns}>{props.children}</Collection>
		</AriaTableHeader>
	)
}

export function TableBody<T extends object>(props: TableBodyProps<T>) {
	return (
		<AriaTableBody
			{...props}
			className='empty:text-center empty:text-sm empty:italic'
		/>
	)
}

const rowStyles = tv({
	extend: focusRing,
	base: "group/row relative cursor-default select-none pressed:bg-muted selected:bg-primary/10 selected:pressed:bg-primary/20 text-foreground text-sm -outline-offset-2 last:rounded-b-lg hover:bg-muted selected:hover:bg-primary/20 disabled:text-muted-foreground forced-colors:selected:bg-[Highlight] forced-colors:selected:text-[HighlightText]",
})

export function Row<T extends object>({
	id,
	columns,
	children,
	...otherProps
}: RowProps<T>) {
	const { selectionBehavior, allowsDragging } = useTableOptions()

	return (
		<AriaRow id={id} {...otherProps} className={rowStyles}>
			{allowsDragging && (
				<Cell>
					<Button slot='drag'>≡</Button>
				</Cell>
			)}
			{selectionBehavior === "toggle" && (
				<Cell>
					<Checkbox slot='selection' />
				</Cell>
			)}
			<Collection items={columns}>{children}</Collection>
		</AriaRow>
	)
}

const cellStyles = tv({
	extend: focusRing,
	base: "box-border truncate border-border border-b p-2 -outline-offset-2 [--selected-border:var(--color-primary)] [-webkit-tap-highlight-color:transparent] group-last/row:border-b-0 group-last/row:last:rounded-br-lg group-last/row:first:rounded-bl-lg group-selected/row:border-(--selected-border) [:is(:has(+[data-selected])_*)]:border-(--selected-border)",
})

export function Cell(props: CellProps) {
	return <AriaCell {...props} className={cellStyles} />
}
