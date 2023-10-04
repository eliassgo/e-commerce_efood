import imagem from '../../assets/images/sushi.png'
import estrela from '../../assets/images/estrela.svg'
import {
  ButtonLink,
  Card,
  Description,
  DivCard,
  DivTitle,
  Text
} from './styles'
const Restaurante = () => (
  <>
    <Card>
      <img src={imagem} alt="imagem de sushi" />
      <DivCard>
        <DivTitle>
          <Text>Hioki Sushi</Text>
          <DivTitle>
            <Text style={{ marginRight: '8px' }}>4.9</Text>
            <img src={estrela} alt="" />
          </DivTitle>
        </DivTitle>
        <Description>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </Description>
        <ButtonLink>Saiba Mais</ButtonLink>
      </DivCard>
    </Card>
  </>
)

export default Restaurante
