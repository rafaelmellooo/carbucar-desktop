import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 30px 1fr 30px;
`

interface ContentProps {
  count: number
}

export const Content = styled.div<ContentProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: ${(props) => props.count > 6 ? '1fr 1fr 1fr' : props.count > 3 ? '1fr 1fr' : '1fr'};
  grid-gap: 30px;
`

const Button = styled.button`
  border: none;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`

export const GoBack = styled(Button)`
  background-color: #cc2f10;
`

export const GoNext = styled(Button)`
  background-color: #34eb83;
`
