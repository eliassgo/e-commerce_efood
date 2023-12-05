import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 186px;
  color: ${colors.coral};
  font-size: 18px;

  @media (max-width: 992px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    align-items: center;
    width: 80%;
    font-size: 12px;
  }

  img {
    width: 125px;
    height: 57.5px;
    flex-shrink: 0;

    @media (max-width: 992px) {
      margin: 0 20px;
    }
  }

  div {
    @media (max-width: 992px) {
      display: flex;
    }
  }
`
export const Contente = styled.div``

export const Title = styled.h3`
  text-align: center;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`
export const Compra = styled.a`
  color: inherit;
  text-decoration: none;
  text-align: center;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`
