import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '.'

const meta: Meta<typeof Label> = {
  component: Label,
}

export default meta

type Story = StoryObj<typeof Label>

export const Primary: Story = {
  render: () => <Label>Label</Label>,
}
