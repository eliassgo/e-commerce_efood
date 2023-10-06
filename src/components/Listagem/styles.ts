import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 80px;

  @media (max-width: 992px) {
    justify-items: center;
    column-gap: 0;
    grid-template-columns: 1fr;
  }
`
