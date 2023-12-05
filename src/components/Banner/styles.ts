import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
`
export const Contente = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  color: ${colors.white};
  padding: 24px 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 992px) {
    width: 90%;
    margin: 0 auto;
  }

  h3 {
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`
