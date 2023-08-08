import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story, context) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'start',
          justifyContent: 'start',
        }}
      >
        {context?.argTypes?.variant?.options.map((variant: string) => (
          <Story key={variant} args={{ ...context.args, variant }} />
        ))}
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Button>

export const Idle: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zRcWvkiThVTk8DbsiW0jRR/Material-3-Design-Kit-(Community)?type=design&node-id=53923-27460&mode=design&t=ninRh2JPa3qNmpEm-4',
    },
  },
  args: {
    disabled: false,
    children: 'Click me',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Click me',
  },
}
