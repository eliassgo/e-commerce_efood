import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background: ${colors.white};
  position: relative;
  margin-bottom: 48px;
  color: ${colors.coral};
  img {
    margin: 0;
  }
`
export const Text = styled.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const Description = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  margin: 16px 0;
`
export const DivCard = styled.div`
  border: 1px solid ${colors.coral};
  padding: 8px;
`
export const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-itemns: center;
`
export const ButtonLink = styled.button`
  background: ${colors.coral};
  color: ${colors.peach};
  padding: 4px;
  border: ${colors.coral};
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
