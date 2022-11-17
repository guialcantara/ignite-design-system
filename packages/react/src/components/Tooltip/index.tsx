import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof RadixTooltip.Root> {
  children: ReactNode
  text: string
}
export function Tooltip({ children, text, ...rest }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...rest}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5}>
            {text}
            <RadixTooltip.Arrow className="TooltipArrow" />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
