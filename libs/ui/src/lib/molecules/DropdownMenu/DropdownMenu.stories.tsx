import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu, Options } from '.'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
}

export default meta

type Story = StoryObj<typeof DropdownMenu>

const options: Options[] = [
  {
    label: 'Appearance',
    value: 'appearance',
    type: 'checkbox',
    showLabel: true,
    values: [
      { label: 'Status Bar', value: 'status-bar' },
      { label: 'Activity Bar', value: 'activity-bar' },
      { label: 'Panel', value: 'panel' },
    ],
  },
  {
    label: 'Window',
    value: 'window',
    type: 'radio',
    showLabel: true,
    values: [
      { label: 'Dark', value: 'dark' },
      { label: 'Light', value: 'light' },
      { label: 'System', value: 'system' },
    ],
  },
  {
    label: 'profile',
    value: 'profile',
    showLabel: true,
    values: [
      { label: 'Payment', value: 'payment' },
      { label: 'Notifications', value: 'notifications' },
      { label: 'Account', value: 'account' },
    ],
  },
]

export const Primary: Story = {
  render: () => <DropdownMenu options={options} />,
}
