import styled from 'styled-components'

export const Container = styled.form`
  padding: 70px 30px 0 30px
`

export const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 10px;
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
  white-space: nowrap;
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

export const SortContainer = styled.div`
  margin-top: 10px;
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;

  p {
    font-weight: 700;
    white-space: nowrap;
  }

  label {
    font-weight: 500;
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: flex;
    align-items: center;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked ~ span {
        background-color: black!important;
      }

      &:checked ~ span:after {
        display: block;
      }
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #eee;
      border-radius: 50%;

      &:after {
        content: "";
        position: absolute;
        display: none;

        top: 7px;
        left: 7px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: white;
      }
    }

    &:hover input ~ span {
      background-color: #ccc;
    }
  }
`
