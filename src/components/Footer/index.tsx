import { Container, ContenteFooter, Socials } from './styles'
import logo from '../../assets/images/logo.jpg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <Container>
    <ContenteFooter className="container">
      <img src={logo} alt="" />
      <Socials>
        <li>
          <a href="#">
            <img src={instagram} alt="instagram logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="facebook logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="twitter logo" />
          </a>
        </li>
      </Socials>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </ContenteFooter>
  </Container>
)

export default Footer
