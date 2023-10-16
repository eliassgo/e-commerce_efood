import ProdutoList from '../../components/Produtos'
import ProdutoModel from '../../models/Produto'
import origem from '../../assets/images/origem.jpg'
import Carrinho from '../../components/CarrinhoHeader'
import Banner from '../../components/Banner'
import ScrollToTop from '../../components/ScrollToTop'

const produtos: ProdutoModel[] = [
  {
    id: 1,
    title: 'Restaurante Origem',
    description:
      ' O primeiro restaurante dos chefs Fabrício Lemos e Lisiane Arouca traz a comida baiana como conceito em um trabalho que combina técnica e memória afetiva, invenção e tradição.',
    image: origem
  },
  {
    id: 2,
    title: 'Restaurante Origem',
    description:
      ' O primeiro restaurante dos chefs Fabrício Lemos e Lisiane Arouca traz a comida baiana como conceito em um trabalho que combina técnica e memória afetiva, invenção e tradição.',
    image: origem
  },
  {
    id: 3,
    title: 'Restaurante Origem',
    description:
      ' O primeiro restaurante dos chefs Fabrício Lemos e Lisiane Arouca traz a comida baiana como conceito em um trabalho que combina técnica e memória afetiva, invenção e tradição.',
    image: origem
  },
  {
    id: 4,
    title: 'Restaurante Origem',
    description:
      ' O primeiro restaurante dos chefs Fabrício Lemos e Lisiane Arouca traz a comida baiana como conceito em um trabalho que combina técnica e memória afetiva, invenção e tradição.',
    image: origem
  },
  {
    id: 5,
    title: 'Restaurante Origem',
    description:
      ' O primeiro restaurante dos chefs Fabrício Lemos e Lisiane Arouca traz a comida baiana como conceito em um trabalho que combina técnica e memória afetiva, invenção e tradição.',
    image: origem
  },
  {
    id: 6,
    title: 'Restaurante Origem',
    description:
      ' O primeiro restaurante dos chefs Fabrício Lemos e Lisiane Arouca traz a comida baiana como conceito em um trabalho que combina técnica e memória afetiva, invenção e tradição.',
    image: origem
  }
]

const Origem = () => (
  <>
    <Carrinho />
    <ScrollToTop />
    <Banner type="Italiana" restaurant="Origem" image={origem} />
    <ProdutoList produto={produtos} />
  </>
)

export default Origem
