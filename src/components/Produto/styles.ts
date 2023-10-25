import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.coral};
  color: ${colors.peach};
  padding: 8px;
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  img {
    width: 100%;
  }
`
export const Title = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin: 8px 0;
`
export const Description = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 8px;
`
export const Button = styled.button`
  background-color: ${colors.peach};
  color: ${colors.coral};
  padding: 4px 0;
  text-align: center;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`

export const Imagem = styled.div`
  margin-right: 24px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 280px;
  height: 280px;
`
export const Close = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
`

export const DescriptionCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const CardMenu = styled.div`
  position: relative;
  padding: 32px;
  background-color: ${colors.coral};
  color: ${colors.peach};
  display: flex;
  z-index: 1;
  button {
    padding: 4px;
  }
`
