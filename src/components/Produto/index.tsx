import { Button, Card, Description, Title } from './styles'
import pizza from '../../assets/images/pizza.jpg'

// type Props = {
//   image: string
//   title: string
//   description: string
// }
// { image, title, description }: Props
const Produto = () => (
  <Card>
    <div>
      <img src={pizza} alt="imagem de uma pizza" />
    </div>
    <Title>Pizza Marguerita</Title>
    <Description>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Description>
    <Button>Adicionar ao carrinho</Button>
  </Card>
)
export default Produto
