import type { Meta, StoryObj } from '@storybook/react'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { DataTable } from '.'

import { Button } from '../../atoms/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../atoms/DropdownMenu'

import {
  CheckboxColumnHeader,
  CheckboxColumnCell,
  SortColumnHeader,
  PriceColumnCell,
  ActionColumnCell,
} from '../../molecules/ColumnDef'
import { Options } from '../../molecules/DropdownMenu'

const meta: Meta<typeof DataTable> = {
  component: DataTable,
}

export default meta

type Story = StoryObj<typeof DataTable>

type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  type?: 'credit' | 'debit'
  email: string
}

const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    type: 'credit',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
]

const actionOptions: Options[] = [
  {
    label: 'Actions',
    value: 'actions',
    showLabel: true,
    values: [
      { label: 'Open menu', value: 'open-menu' },
      { label: 'Copy payment ID', value: 'copy-payment-id' },
      { label: 'View payment details', value: 'view-payment-details' },
    ],
  },
]

const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => <CheckboxColumnHeader table={table} />,
    cell: ({ row }) => <CheckboxColumnCell row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <SortColumnHeader column={column} />,
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => <PriceColumnCell row={row} />,
  },
  {
    id: 'actions',
    cell: ({ row }) => <ActionColumnCell row={row} options={actionOptions} />,
  },
]

export const Primary: Story = {
  render: () => (
    <DataTable data={payments} columns={columns} filterBy="email" />
  ),
}
