import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
`

export const Title = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  padding: 10px;
  text-align: center;
`

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  transition: 0.2s linear;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  color: white;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const YesButton = styled(Button)`
  background-color: #34eb83;
  margin-right: 10px;
`

export const CancelButton = styled(Button)`
  background-color: #cc2f10;
`
