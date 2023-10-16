import ProdutoList from '../../components/Produtos'
import ProdutoModel from '../../models/Produto'
import sushi from '../../assets/images/sushi.png'
import Carrinho from '../../components/CarrinhoHeader'
import Banner from '../../components/Banner'
import ScrollToTop from '../../components/ScrollToTop'

const produtos: ProdutoModel[] = [
  {
    id: 1,
    title: 'HIOKI 1',
    description:
      ' 4 sashimis de cada, salmãp, atum e peice branco, 3 niguiris de salmãos e 10 enrolados',
    image: sushi
  },
  {
    id: 2,
    title: 'HIOKI 1',
    description:
      ' 4 sashimis de cada, salmãp, atum e peice branco, 3 niguiris de salmãos e 10 enrolados',
    image: sushi
  },
  {
    id: 3,
    title: 'HIOKI 1',
    description:
      ' 4 sashimis de cada, salmãp, atum e peice branco, 3 niguiris de salmãos e 10 enrolados',
    image: sushi
  },
  {
    id: 4,
    title: 'HIOKI 1',
    description:
      ' 4 sashimis de cada, salmãp, atum e peice branco, 3 niguiris de salmãos e 10 enrolados',
    image: sushi
  },
  {
    id: 5,
    title: 'HIOKI 1',
    description:
      ' 4 sashimis de cada, salmãp, atum e peice branco, 3 niguiris de salmãos e 10 enrolados',
    image: sushi
  },
  {
    id: 6,
    title: 'HIOKI 1',
    description:
      ' 4 sashimis de cada, salmãp, atum e peice branco, 3 niguiris de salmãos e 10 enrolados',
    image: sushi
  }
]

const Hioki = () => (
  <>
    <Carrinho />
    <ScrollToTop />
    <Banner type="Japonesa" restaurant="Hioki Sushi" image={sushi} />
    <ProdutoList produto={produtos} />
  </>
)

export default Hioki
