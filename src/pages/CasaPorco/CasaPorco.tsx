import ProdutoList from '../../components/Produtos'
import ProdutoModel from '../../models/Produto'
import porco from '../../assets/images/porco.jpg'
import Carrinho from '../../components/CarrinhoHeader'
import Banner from '../../components/Banner'

const produtos: ProdutoModel[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: porco
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: porco
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: porco
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: porco
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: porco
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: porco
  }
]

const CasaPorco = () => (
  <>
    <Carrinho />
    <Banner type="Brasileira" restaurant="A casa do porco" image={porco} />
    <ProdutoList produto={produtos} />
  </>
)
export default CasaPorco
