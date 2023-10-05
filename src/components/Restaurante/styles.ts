import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background: ${colors.white};
  position: relative;
  margin-bottom: 48px;
  color: ${colors.coral};

  .image {
    border-right: 1px solid #e66767;
    border-left: 1px solid #e66767;

    img {
      width: 472px;
      height: 217px;
    }
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
  border-right: 1px solid #e66767;
  border-bottom: 1px solid #e66767;
  border-left: 1px solid #e66767;
  padding: 8px;
  margin-top: 0;
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
export const Tags = styled.div`
  list-style: none;
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
