import styled from 'styled-components'

export const Container = styled.form`
`

export const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
`

export const Field = styled.fieldset`
  padding: 10px 16px;
  border: thin dashed black;
  border-radius: 4px;
`

export const Title = styled.legend`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
`

export const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
`

export const Group = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.label`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Input = styled.input`
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  border-radius: 4px;
  background-color: #f5f5f5;
  padding: 5px 10px;
  width: 100%;
`

export const GroupButton = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 70px) 50px;
`

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  height: 50px;
  width: 50px;
  margin-left: 20px;
  border-radius: 50%;
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  transition: 0.2s linear;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`
