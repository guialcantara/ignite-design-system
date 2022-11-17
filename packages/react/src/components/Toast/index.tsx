import * as RadixToast from '@radix-ui/react-toast'
import { Slot } from '@radix-ui/react-slot'
import { X } from 'phosphor-react'
import { useState, useRef, ReactNode } from 'react'
import {
  CloseButton,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
export interface ToastProps {
  title: string
  description: string
  children: ReactNode
}
export function Toast({ title, description, children }: ToastProps) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)
  return (
    <RadixToast.Provider swipeDirection="right">
      <Slot
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        {children}
      </Slot>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle className="RadixToastTitle">{title}</ToastTitle>
        <ToastDescription asChild>
          <p>{description}</p>
        </ToastDescription>
        <RadixToast.Action asChild altText="Close Toast">
          <CloseButton>
            <X size={20} />
          </CloseButton>
        </RadixToast.Action>
      </ToastRoot>
      <ToastViewport className="RadixToastViewport" />
    </RadixToast.Provider>
  )
}
