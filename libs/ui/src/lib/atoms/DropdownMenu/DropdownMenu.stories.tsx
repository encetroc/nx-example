import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '.'

import { Button } from '../Button'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
}

export default meta

type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="text">Click me</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Status Bar</DropdownMenuItem>
          <DropdownMenuItem disabled>Activity Bar</DropdownMenuItem>
          <DropdownMenuItem>Panel</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const Checkbox: Story = {
  render: () => {
    type Checked = DropdownMenuCheckboxItemProps['checked']

    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="text">Click me</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            disabled
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const Radio: Story = {
  render: () => {
    const [position, setPosition] = React.useState('status-bar')

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="text">Click me</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="status-bar">
              Status Bar
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem disabled value="activity-bar">
              Activity Bar
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="panel">Panel</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
