import Hero from '../../components/Hero'
import Listagem from '../../components/Listagem'
import Restaurant from '../../models/Restaurant'

import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.jpg'
import lasai from '../../assets/images/lasai.webp'
import origem from '../../assets/images/origem.jpg'
import oteque from '../../assets/images/oteque.webp'
import porco from '../../assets/images/porco.jpg'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    category: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    title: 'Hioki Sushi ',
    score: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    to: '/Hioki'
  },
  {
    id: 2,
    category: ['Italiana'],
    image: massa,
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/profile'
  },
  {
    id: 3,
    category: ['Carnes'],
    image: porco,
    title: 'A casa do porco',
    score: '5',
    description:
      'Nada parece ameaçar o poderoso reinado da Casa do Porco, a incensada casa no centro de São Paulo comandada por Jefferson Rueda e Janaína Torres Rueda. Os chefs fundadores do pequeno império gastronômico provaram que é possível tornar acessível uma gastronomia autoral e de qualidade. Na ativa desde 2015, o empreendimento dedicado aos suínos ocupa a saborosíssima sétima colocação no The World 50.',
    to: '/casaporco'
  },
  {
    id: 4,
    category: ['Comida Brasileira'],
    image: lasai,
    title: 'Lasai',
    score: '4.9',
    description:
      'Um novo capítulo na história do Lasai começou a ser escrito em maio do ano passado. Foi quando o restaurante do chef Rafa Costa e Silva reabriu no endereço atual. O antigo imóvel, que será transformado em um espaço de eventos, tinha capacidade para 45 clientes e exigia até 17 pessoas trabalhando na cozinha. A poucos metros, a nova casa se resume a um balcão que só acomoda dez fregueses.',
    to: '/lasai'
  },
  {
    id: 5,
    category: ['Brasil'],
    image: oteque,
    title: 'Oteque',
    score: '4.8',
    description:
      'A cozinha literalmente aberta para o salão e o teto com revestimento acústico de cinema, que ajuda a abafar o falatório dos clientes, já indicam a atenção que o Oteque dá para a comida. Não à toa, muita gente classifica os jantares no endereço — para o qual ninguém dá nada, vendo de fora — como espetáculos gastronômicos memoráveis. Não falta nem uma trilha sonora à altura — vai de Kings of Convenience a Led Zeppelin.',
    to: '/oteque'
  },
  {
    id: 6,
    category: ['Italiana'],
    image: origem,
    title: 'Origem',
    score: '4.7',
    description:
      'Pronto. No que se refere ao propósito número 1 do Origem ­— acabar com a ideia de que a culinária baiana se resume aos pratos típicos —, o chef Fabrício Lemos e sua mulher, a chef pâtissière Lisiane Arouca, podem se dar por satisfeitos. Inaugurado pela dupla em 2016, o restaurante já não se preocupa como antes em questionar os lugares-comuns da gastronomia local. No lugar do acarajé, por exemplo, o casal serve o que apelidou de abarajé, um abará que, depois de empanado, é frito.',
    to: '/origem'
  }
]

const Home = () => (
  <>
    <Hero />
    <Listagem restaurants={restaurantes} />
  </>
)

export default Home
