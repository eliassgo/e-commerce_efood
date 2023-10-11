import React from 'react'
import { Container } from './styles'
import Produto from '../Produto'

const ProdutoList = () => (
  <div className="container">
    <Container>
      <Produto />
      <Produto />
      <Produto />
      <Produto />
      <Produto />
      <Produto />
    </Container>
  </div>
)
export default ProdutoList
