import { keyframes, styled } from '../../styles'
import * as RadixTooltip from '@radix-ui/react-tooltip'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const TooltipContent = styled(RadixTooltip.Content, {
  borderRadius: '$xs',
  padding: '$3 $4',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  color: '$gray100',
  backgroundColor: '$gray900',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  '.TooltipArrow': {
    fill: '$gray900',
  },

  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: `${slideDownAndFade}`,
  },
  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: `${slideLeftAndFade}`,
  },
  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: `${slideUpAndFade}`,
  },
  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: `${slideRightAndFade}`,
  },
})
