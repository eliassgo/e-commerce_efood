import { styled } from 'styled-components'
import { colors } from '../../styles'
import SideBar from '../SideBar'

// CSS SideBar delivery
export const SideBarDelivery = styled(SideBar)`
  &.isVisible {
    display: block;
  }
`
export const Row = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  width: 100%;
  column-gap: 34px;

  input {
    width: 100%;
    margin-top: 8px;
  }

  .width {
    width: 228px;
  }
`

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  input,
  label {
    margin-bottom: 8px;
    &.error {
      border: 3px solid red;
    }
  }

  input {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background-color: ${colors.peach};
    height: 32px;
    border: none;
    color: #4b4b4b;
    padding: 8px;
  }
`

// CSS SideBar Purchase
export const SideBarPurchase = styled(SideBar)`
  &.isVisible {
    display: block;
  }
`
// CSS SideBar Finish
export const SideBarFinish = styled(SideBar)`
  &.isVisible {
    display: block;
  }
`
