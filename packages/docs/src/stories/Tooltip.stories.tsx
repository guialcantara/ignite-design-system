import { Meta, StoryObj } from '@storybook/react'

import { Box, Button, Tooltip, TooltipProps } from '@guialcantara-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Button size="md" variant="primary">
        Button com Tooltip
      </Button>
    ),
    text: 'conteúdo da tooltip',
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}
