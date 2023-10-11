import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.coral};
  color: ${colors.peach};
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
  }
`
export const Title = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`
export const Description = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`
export const Button = styled.button`
  background-color: ${colors.peach};
  color: ${colors.coral};
  padding: 4px 0;
  text-align: center;
  display: inline-block;
`
