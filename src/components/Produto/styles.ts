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
export const DescriptionCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Cor de fundo com opacidade */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Z-index alto para que fique acima de outros elementos */
`
export const CardMenu = styled.div`
  position: relative;
  padding: 32px;
  background-color: ${colors.coral};
  color: ${colors.peach};
  display: flex;

  button {
    padding: 4px;
  }
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
