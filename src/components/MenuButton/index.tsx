import React from 'react'
import { Button } from './styles'

export type Props = {
  children: string
  title: string
  onClick?: () => void
  disabled?: boolean
}

const MenuButton = ({ children, title, onClick, disabled }: Props) => {
  return (
    <Button type="button" title={title} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
}

export default MenuButton
