import { keyframes, styled } from '../../styles'
import * as RadixToast from '@radix-ui/react-toast'

export const ToastViewport = styled(RadixToast.Viewport, {
  '--viewport-padding': '25px',
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastTitle = styled(RadixToast.Title, {
  gridArea: 'title',
  lineHeight: '$short',
  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$white',
  fontSize: '$xl',
})

export const ToastDescription = styled(RadixToast.Description, {
  margin: '$1 0 0 0 ',
  gridArea: 'description',
  fontFamily: '$default',
  lineHeight: '$shorter',
  color: '$gray200',
  fontSize: '$sm',
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})
const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
})

export const ToastRoot = styled(RadixToast.Root, {
  backgroundColor: '$gray600',
  borderRadius: '$sm',
  padding: '$3 $4',
  margin: '0 $3 $3 0',
  display: 'grid',
  gridTemplateAreas: "'title' 'description' ",
  gridTemplateColumns: 'auto max-content',
  columnGap: '15px',
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"] ': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"] ': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"] ': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"] ': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const CloseButton = styled('button', {
  all: 'unset',
  color: '$gray200',
  cursor: 'pointer',
})
