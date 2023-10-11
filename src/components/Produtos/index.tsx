import { Container } from './styles'
import Produto from '../Produto'
import ProdutoModel from '../../models/Produto'

export type Props = {
  produto: ProdutoModel[]
}
const ProdutoList = ({ produto }: Props) => (
  <div className="container">
    <Container>
      {produto.map((p) => (
        <Produto
          key={p.id}
          image={p.image}
          title={p.title}
          description={p.description}
        />
      ))}
    </Container>
  </div>
)
export default ProdutoList
