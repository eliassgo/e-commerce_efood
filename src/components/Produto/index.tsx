import { Button, Card, Description, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Produto = ({ image, title, description }: Props) => (
  <Card>
    <div>
      <img src={image} alt={title} />
    </div>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>Adicionar ao carrinho</Button>
  </Card>
)
export default Produto
