import ProdutoList from '../../components/Produtos'
import ProdutoModel from '../../models/Produto'
import marguerita from '../../assets/images/pizza.jpg'
import massa from '../../assets/images/massa.jpg'
import Carrinho from '../../components/CarrinhoHeader'
import Banner from '../../components/Banner'
import ScrollToTop from '../../components/ScrollToTop'

const produtos: ProdutoModel[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  }
]
const Profile = () => (
  <>
    <Carrinho />
    <ScrollToTop />
    <Banner
      type="Italiana"
      restaurant="La Dolce Vita Trattoria"
      image={massa}
    />
    <ProdutoList produto={produtos} />
  </>
)

export default Profile
