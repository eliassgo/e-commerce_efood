import { Container } from './styles'
import MenuItem from '../MenuItem'
import { RestaurantObject } from '../../pages/Home'

export type Props = {
  menu: RestaurantObject[]
}

const MenuList = ({ menu }: Props) => {
  return (
    <div className="container">
      <Container>
        {menu.map((r) => (
          <li key={r.id}>
            <MenuItem
              id={r.cardapio.id}
              image={r.cardapio.foto}
              title={r.cardapio.nome}
              description={r.cardapio.descricao}
              price={r.cardapio.preco}
              porcao={r.cardapio.porcao}
            />
          </li>
        ))}
      </Container>
    </div>
  )
}
export default MenuList
