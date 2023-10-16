import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
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
