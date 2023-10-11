import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-repeate: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 186px;
  padding: 80px 172px;
  color: ${colors.coral};
  img {
    width: 125px;
    height: 57.5px;
    flex-shrink: 0;
  }
`

export const Title = styled.h3`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`
export const Compra = styled.span`
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`
