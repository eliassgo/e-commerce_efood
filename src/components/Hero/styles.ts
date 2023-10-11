import styled from 'styled-components'
import { colors } from '../../styles'

export const HeroContainer = styled.div`
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
`
export const HeroContente = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 40px;
  position: relative;

  img {
    position: absolute;
    top: 40px;
  }
`
export const Title = styled.h1`
  color: ${colors.coral};
  text-align: center;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`
