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
  category: string
  image: string
  title: string
  score: number
  description: string
  to?: number

  destacado: boolean
}
const Restaurante = ({
  category,
  image,
  title,
  score,
  description,
  to,
  destacado
}: Props) => (
  <Card>
    <Tags>
      {destacado && <li>Destaque do dia</li>}
      <li>{category}</li>
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
      <ButtonLink to={`/restaurantes/${to}`}>Saiba Mais</ButtonLink>
    </DivCard>
  </Card>
)

export default Restaurante
