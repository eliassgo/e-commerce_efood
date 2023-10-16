import ProdutoList from '../../components/Produtos'
import ProdutoModel from '../../models/Produto'
import oteque from '../../assets/images/oteque.webp'
import Carrinho from '../../components/CarrinhoHeader'
import Banner from '../../components/Banner'

const produtos: ProdutoModel[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: oteque
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: oteque
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: oteque
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: oteque
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: oteque
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: oteque
  }
]

const Oteque = () => (
  <>
    <Carrinho />
    <Banner type="Brasileira" restaurant="Oteque" image={oteque} />
    <ProdutoList produto={produtos} />
  </>
)
export default Oteque
