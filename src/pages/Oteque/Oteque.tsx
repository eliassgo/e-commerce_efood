import ProdutoList from '../../components/Produtos'
import ProdutoModel from '../../models/Produto'
import oteque from '../../assets/images/oteque.webp'
import Carrinho from '../../components/CarrinhoHeader'
import Banner from '../../components/Banner'
import ScrollToTop from '../../components/ScrollToTop'

const produtos: ProdutoModel[] = [
  {
    id: 1,
    title: 'Maionese de Peixe',
    description:
      ' trabalhamos no sistema de menu degustação, montado de acordo com a disponibilidade e sazonalidade dos ingredientes, tendo qualidade e ética como parâmetros máximos da nossa escolha.',
    image: oteque
  },
  {
    id: 2,
    title: 'Maionese de Peixe',
    description:
      ' trabalhamos no sistema de menu degustação, montado de acordo com a disponibilidade e sazonalidade dos ingredientes, tendo qualidade e ética como parâmetros máximos da nossa escolha.',
    image: oteque
  },
  {
    id: 3,
    title: 'Maionese de Peixe',
    description:
      ' trabalhamos no sistema de menu degustação, montado de acordo com a disponibilidade e sazonalidade dos ingredientes, tendo qualidade e ética como parâmetros máximos da nossa escolha.',
    image: oteque
  },
  {
    id: 4,
    title: 'Maionese de Peixe',
    description:
      ' trabalhamos no sistema de menu degustação, montado de acordo com a disponibilidade e sazonalidade dos ingredientes, tendo qualidade e ética como parâmetros máximos da nossa escolha.',
    image: oteque
  },
  {
    id: 5,
    title: 'Maionese de Peixe',
    description:
      ' trabalhamos no sistema de menu degustação, montado de acordo com a disponibilidade e sazonalidade dos ingredientes, tendo qualidade e ética como parâmetros máximos da nossa escolha.',
    image: oteque
  },
  {
    id: 6,
    title: 'Maionese de Peixe',
    description:
      ' trabalhamos no sistema de menu degustação, montado de acordo com a disponibilidade e sazonalidade dos ingredientes, tendo qualidade e ética como parâmetros máximos da nossa escolha.',
    image: oteque
  }
]

const Oteque = () => (
  <>
    <Carrinho />
    <ScrollToTop />
    <Banner type="Brasileira" restaurant="Oteque" image={oteque} />
    <ProdutoList produto={produtos} />
  </>
)
export default Oteque
