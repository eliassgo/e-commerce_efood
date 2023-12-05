import React from 'react'
import { Button } from './styles'

export type Props = {
  children: string
  title: string
  onClick?: () => void
}

const MenuButton = ({ children, title, onClick }: Props) => {
  return (
    <Button type="button" title={title} onClick={onClick}>
      {children}
    </Button>
  )
}

export default MenuButton
