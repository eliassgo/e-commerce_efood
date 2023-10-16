import ProdutoList from '../../components/Produtos'
import ProdutoModel from '../../models/Produto'
import lasai from '../../assets/images/lasai.webp'
import lasaiBanner from '../../assets/images/lasai-galeria.jpg'
import Carrinho from '../../components/CarrinhoHeader'
import Banner from '../../components/Banner'
import ScrollToTop from '../../components/ScrollToTop'

const produtos: ProdutoModel[] = [
  {
    id: 1,
    title: 'Lasai',
    description:
      ' Oferecemos apenas um menu degustação aonde você vai provar uma grande diversidade de produtos de nossas hortas, de feiras orgânicas, do mar e da terra.',
    image: lasai
  },
  {
    id: 2,
    title: 'Lasai',
    description:
      ' Oferecemos apenas um menu degustação aonde você vai provar uma grande diversidade de produtos de nossas hortas, de feiras orgânicas, do mar e da terra.',
    image: lasai
  },
  {
    id: 3,
    title: 'Lasai',
    description:
      ' Oferecemos apenas um menu degustação aonde você vai provar uma grande diversidade de produtos de nossas hortas, de feiras orgânicas, do mar e da terra.',
    image: lasai
  },
  {
    id: 4,
    title: 'Lasai',
    description:
      ' Oferecemos apenas um menu degustação aonde você vai provar uma grande diversidade de produtos de nossas hortas, de feiras orgânicas, do mar e da terra.',
    image: lasai
  },
  {
    id: 5,
    title: 'Lasai',
    description:
      ' Oferecemos apenas um menu degustação aonde você vai provar uma grande diversidade de produtos de nossas hortas, de feiras orgânicas, do mar e da terra.',
    image: lasai
  },
  {
    id: 6,
    title: 'Lasai',
    description:
      ' Oferecemos apenas um menu degustação aonde você vai provar uma grande diversidade de produtos de nossas hortas, de feiras orgânicas, do mar e da terra.',
    image: lasai
  }
]
const Lasai = () => (
  <>
    <Carrinho />
    <ScrollToTop />
    <Banner type="Brasileira" restaurant="Lasai" image={lasaiBanner} />
    <ProdutoList produto={produtos} />
  </>
)
export default Lasai
