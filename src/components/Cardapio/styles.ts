import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin-top: 24px;
  margin-bottom: 88px;

  @media (max-width: 992px) {
    width: 90%;
    margin: 0 auto;
    justify-items: center;
    column-gap: 0;
    grid-template-columns: 1fr;
  }
`

export const Card = styled.li`
  background-color: ${colors.coral};
  padding: 8px;
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  height: 100%;
  position: relative;
  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }
`
export const Title = styled.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 16px;
  color: ${colors.white};
`
export const Description = styled.p`
  color: ${colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
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
  position: absolute;
  bottom: 8px;
  width: 95%;
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
    background-color: rgba(0, 0, 0, 0.3);
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
    background-color: ${colors.peach};
    color: ${colors.coral};
    padding: 8px;
    display: flex;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    cursor: pointer;
  }

  img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
  }
`
export const Close = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
`
