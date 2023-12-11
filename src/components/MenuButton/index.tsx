import React from 'react'
import { Button } from './styles'

export type Props = {
  children: string
  title: string
  onClick?: () => void
  disabled?: boolean
  type: 'button' | 'submit'
}

const MenuButton = ({ children, title, onClick, disabled, type }: Props) => {
  return (
    <Button type={type} title={title} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
}

export default MenuButton
