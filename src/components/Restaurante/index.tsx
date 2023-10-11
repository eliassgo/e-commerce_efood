import estrela from '../../assets/images/estrela.svg'
import {
  ButtonLink,
  Card,
  Description,
  DivCard,
  DivTitle,
  Tags,
  Text
} from './styles'

type Props = {
  category: string[]
  image: string
  title: string
  score: string
  description: string
  to?: string
}
const Restaurante = ({
  category,
  image,
  title,
  score,
  description,
  to
}: Props) => (
  <Card>
    <Tags>
      {category.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </Tags>
    <div className="image">
      <img src={image} alt={title} />
    </div>
    <DivCard>
      <DivTitle>
        <Text>{title}</Text>
        <DivTitle>
          <Text style={{ marginRight: '8px' }}>{score}</Text>
          <img src={estrela} alt="figura estrela amarela" />
        </DivTitle>
      </DivTitle>
      <Description>{description}</Description>
      <ButtonLink to={to as string}>Saiba Mais</ButtonLink>
    </DivCard>
  </Card>
)

export default Restaurante
