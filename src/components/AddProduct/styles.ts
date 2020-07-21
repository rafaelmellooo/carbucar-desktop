import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  -webkit-app-region: no-drag;
  background-color: black;
`

export const Add = styled.button`
  height: 100%;
  font-size: 12px;
  background-color: inherit;
  color: white;
  border: none;
  transition: 0.5s linear;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;

  svg {
    font-size: 22px;
    margin-right: 4px;
  }

  span {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    margin: 0;
    white-space: nowrap;
  }

  &:hover {
    cursor: pointer;
  }
`
