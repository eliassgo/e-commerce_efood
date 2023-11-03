import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  border: 1px solid #e66767;
  background: ${colors.white};
  position: relative;
  margin-bottom: 48px;
  color: ${colors.coral};

  .image {
    img {
      width: 472px;
      height: 217px;

      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }

  @media (max-width: 992px) {
    width: 90%;
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
  padding: 8px;
  margin-top: 0;
`
export const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ButtonLink = styled(Link)`
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
  text-decoration: none;
`
export const Tags = styled.ul`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;

  li {
    background: ${colors.coral};
    color: ${colors.peach};
    padding: 6px 4px;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 8px;
  }
`
