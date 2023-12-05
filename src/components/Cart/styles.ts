import { styled } from 'styled-components'
import { colors } from '../../styles'
import close from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.coral};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  display: none;

  &.isVisible {
    display: block;
  }
`
export const MessageAlert = styled.aside`
  background-color: ${colors.coral};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.offWhite};
    text-align: center;
  }
`
export const SideBarButton = styled.button`
  width: 100%;
  text-align: center;
  padding: 4px 0;
  border: none;
  background-color: ${colors.peach};
  color: ${colors.coral};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  margin-top: 8px;

  h2 {
    color: ${colors.white};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`
export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.peach};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 40px;
  margin-bottom: 8px;
`
export const CartItem = styled.li`
  background-color: ${colors.peach};
  margin-bottom: 16px;
  display: flex;
  padding: 8px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.coral};
    margin-bottom: 16px;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  span {
    color: ${colors.coral};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
    display: block;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 76px;
    right: 8px;
    cursor: pointer;
  }
`
