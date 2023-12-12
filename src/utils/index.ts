export const getTotalPrice = (items: MenuInterface[]) => {
  return items.reduce((acc, currentItem) => {
    if (currentItem.preco) {
      return (acc += currentItem.preco)
    }
    return 0
  }, 0)
}

export const ParseToBRL = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
