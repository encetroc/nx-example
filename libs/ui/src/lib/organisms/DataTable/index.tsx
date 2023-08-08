'use client'

import * as React from 'react'

import {
  ColumnDef,
  ColumnFiltersState,
  getFilteredRowModel,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../atoms/Table'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../atoms/Select'

import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../atoms/DropdownMenu'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  filterBy?: keyof TData
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterBy,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div>
      <div className="flex items-center py-4">
        {filterBy && (
          <Input
            placeholder={`Filter by ${filterBy.toString()}`}
            value={
              (table
                .getColumn(filterBy.toString())
                ?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table
                .getColumn(filterBy.toString())
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outlined" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={data.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center">
        <div className="flex-1 text-sm text-muted-foreground whitespace-nowrap">
          {`${table.getFilteredSelectedRowModel().rows.length} of ${
            table.getFilteredRowModel().rows.length
          } row(s) selected.`}
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Select
            onValueChange={(e) => {
              console.log(table.setPageSize(Number(e)))
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Page size</SelectLabel>
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem value={pageSize.toString()}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            variant="text"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </Button>
          <Button
            variant="text"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </Button>
          <Button
            variant="text"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </Button>
          <Button
            variant="text"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </Button>
          <span className="whitespace-nowrap">
            {`Page ${
              table.getState().pagination.pageIndex + 1
            } of ${table.getPageCount()}`}
          </span>
        </div>
      </div>
    </div>
  )
}
