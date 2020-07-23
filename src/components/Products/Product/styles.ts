import styled from 'styled-components'

export const Container = styled.article`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  border: thin solid black;
`

interface ImageProps {
  src: string
}

export const Image = styled.div<ImageProps>`
  background-image: url(${props => props.src});
  height: 260px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fafafa;
  width: 100%;
`

export const Title = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 10px;

`

export const Text = styled.p`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  padding: 5px;
  border: thin dashed black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

export const Buttons = styled.div`
  display: flex;
`

interface ButtonProps {
  color: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 5px 10px;
  width: 50%;
  background-color: ${props => props.color};
  color: white;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s linear;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  svg {
    margin-right: 5px;
    font-size: 18px;
  }

  span {
    font-size: 14px;
  }
`
