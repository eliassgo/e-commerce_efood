import ProdutoList from '../../components/Produtos'
import ProdutoModel from '../../models/Produto'
import porco from '../../assets/images/porco.jpg'
import Carrinho from '../../components/CarrinhoHeader'
import Banner from '../../components/Banner'
import ScrollToTop from '../../components/ScrollToTop'

const produtos: ProdutoModel[] = [
  {
    id: 1,
    title: 'Porco San Zé',
    description:
      ' Carro-chefe da casa. Porco assado lentamente por 6 a 9 horas, servido com acompanhamentos tipicamente brasileiros.',
    image: porco
  },
  {
    id: 2,
    title: 'Porco San Zé',
    description:
      ' Carro-chefe da casa. Porco assado lentamente por 6 a 9 horas, servido com acompanhamentos tipicamente brasileiros.',
    image: porco
  },
  {
    id: 3,
    title: 'Porco San Zé',
    description:
      ' Carro-chefe da casa. Porco assado lentamente por 6 a 9 horas, servido com acompanhamentos tipicamente brasileiros.',
    image: porco
  },
  {
    id: 4,
    title: 'Porco San Zé',
    description:
      ' Carro-chefe da casa. Porco assado lentamente por 6 a 9 horas, servido com acompanhamentos tipicamente brasileiros.',
    image: porco
  },
  {
    id: 5,
    title: 'Porco San Zé',
    description:
      ' Carro-chefe da casa. Porco assado lentamente por 6 a 9 horas, servido com acompanhamentos tipicamente brasileiros.',
    image: porco
  },
  {
    id: 6,
    title: 'Porco San Zé',
    description:
      ' Carro-chefe da casa. Porco assado lentamente por 6 a 9 horas, servido com acompanhamentos tipicamente brasileiros.',
    image: porco
  }
]

const CasaPorco = () => (
  <>
    <Carrinho />
    <ScrollToTop />
    <Banner type="Brasileira" restaurant="A casa do porco" image={porco} />
    <ProdutoList produto={produtos} />
  </>
)
export default CasaPorco
