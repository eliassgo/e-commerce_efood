import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.peach};
  color: ${colors.coral};
  text-align: center;
  font-weight: 400;
`
export const ContenteFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`

export const Socials = styled.ul`
  display: flex;
  margin: 32px 0 80px 0;

  li {
    margin: 0 8px;
  }
`
