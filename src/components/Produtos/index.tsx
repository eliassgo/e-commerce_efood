import { Container } from './styles'
import Produto from '../Produto'
import { Restaurant } from '../../pages/Home'

export type Props = {
  restaurants: Restaurant[]
}

const ProdutoList = ({ restaurants }: Props) => {
  return (
    <div className="container">
      <Container>
        {restaurants.map((r) => (
          <li key={r.id}>
            <Produto
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
export default ProdutoList
