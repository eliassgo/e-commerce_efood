import ProdutoList from '../../components/Produtos'
import ProdutoModel from '../../models/Produto'
import origem from '../../assets/images/origem.jpg'
import Carrinho from '../../components/CarrinhoHeader'
import Banner from '../../components/Banner'

const produtos: ProdutoModel[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: origem
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: origem
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: origem
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: origem
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: origem
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: origem
  }
]

const Origem = () => (
  <>
    <Carrinho />
    <Banner type="Italiana" restaurant="Origem" image={origem} />
    <ProdutoList produto={produtos} />
  </>
)

export default Origem
