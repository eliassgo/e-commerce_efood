import { Container } from './styles'
import MenuItem from '../MenuItem'
import { MenuInterface } from '../../pages/Home'

export type Props = {
  menu: MenuInterface[]
}

const MenuList = ({ menu }: Props) => {
  return (
    <div className="container">
      <Container>
        {menu.map((produto) => (
          <li key={produto.id}>
            <MenuItem
              id={produto.id}
              image={produto.foto}
              title={produto.nome}
              description={produto.descricao}
              price={produto.preco}
              porcao={produto.porcao}
            />
          </li>
        ))}
      </Container>
    </div>
  )
}
export default MenuList
