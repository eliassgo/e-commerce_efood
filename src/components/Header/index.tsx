import logo from '../../assets/images/logo.jpg'
import bannerImg from '../../assets/images/banner.jpg'
import { HeroContainer, HeroContente, Title } from './styles'

const Header = () => (
  <HeroContainer style={{ backgroundImage: `url(${bannerImg})` }}>
    <HeroContente className="container">
      <img src={logo} alt="logo efood" />
      <Title>Viva experiências gastronômica</Title>
      <Title> no conforto da sua casa</Title>
    </HeroContente>
  </HeroContainer>
)

export default Header
