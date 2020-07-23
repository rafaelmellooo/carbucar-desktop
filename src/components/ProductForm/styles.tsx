import styled from 'styled-components'

export const Container = styled.div`
`

export const WrapperClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #fcfcfc;
  height: 32px;
`

interface ButtonProps {
  color: string
}

export const Button = styled.button<ButtonProps>`
  border: none;
  height: 100%;
  background-color: ${props => props.color};
  color: #FFF;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  transition: 0.2s linear;

  svg {
    margin-right: 5px;
    font-size: 18px;
  }

  span {
    font-size: 12px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const Content = styled.form`
  height: calc(100% - 32px);
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Label = styled.label`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  margin-bottom: 6px;
`

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  border: thin solid black;
  padding: 5px 10px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

interface SeparatorProps {
  rows: string;
}

export const Separator = styled.div<SeparatorProps>`
  padding: 30px;
  border: thin dashed black;
  display: grid;
  grid-template-rows: ${props => props.rows};
  align-items: center;
`

export const SubmitButton = styled(Button)`
  height: 100px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;


  svg {
    margin-right: 0;
    margin-bottom: 10px;
    font-size: 32px;
  }

  span {
    font-size: 20px;
  }
`
