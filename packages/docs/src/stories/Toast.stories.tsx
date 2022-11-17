import { Meta, StoryObj } from '@storybook/react'

import { Button, Toast, ToastProps } from '@guialcantara-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    children: (
      <Button size="md" variant="primary">
        Open toast
      </Button>
    ),
    title: 'toast Title',
    description: 'toast Description',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {},
}
