import ProdutoList from '../../components/Produtos'
import ProdutoModel from '../../models/Produto'
import sushi from '../../assets/images/sushi.png'
import Carrinho from '../../components/CarrinhoHeader'
import Banner from '../../components/Banner'

const produtos: ProdutoModel[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: sushi
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: sushi
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: sushi
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: sushi
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: sushi
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: sushi
  }
]

const Hioki = () => (
  <>
    <Carrinho />
    <Banner type="Japonesa" restaurant="Hioki Sushi" image={sushi} />
    <ProdutoList produto={produtos} />
  </>
)

export default Hioki
