import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
`
export const Contente = styled.div`
  color: ${colors.white};
  padding: 24px 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 32px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }

  h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`