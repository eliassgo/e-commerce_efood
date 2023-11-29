import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  color: ${colors.peach};
  input,
  label {
    margin-bottom: 8px;
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
export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100px;
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
