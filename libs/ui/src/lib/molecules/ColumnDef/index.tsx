import { Column, Row, Table } from '@tanstack/react-table'
import { Checkbox } from '../../atoms/Checkbox'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '../../atoms/Button'
import { DropdownMenu, Options } from '../DropdownMenu'

export function CheckboxColumnHeader<T>({ table }: { table: Table<T> }) {
  return (
    <Checkbox
      checked={table.getIsAllPageRowsSelected()}
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Select all"
    />
  )
}

export function CheckboxColumnCell<T>({ row }: { row: Row<T> }) {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  )
}

export function SortColumnHeader<T>({ column }: { column: Column<T> }) {
  return (
    <div className="flex items-center gap-1">
      Email
      <Button
        variant="text"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        <ArrowUpDown className="h-4 w-4" />
      </Button>
    </div>
  )
}

export function PriceColumnCell<T>({ row }: { row: Row<T> }) {
  const amount = parseFloat(row.getValue('amount'))
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)

  return <div className="text-right font-medium">{formatted}</div>
}

export function ActionColumnCell<T>({
  row,
  options,
}: {
  row: Row<T>
  options: Options[]
}) {
  return (
    <div className="text-right">
      <DropdownMenu options={options} />
    </div>
  )
}
