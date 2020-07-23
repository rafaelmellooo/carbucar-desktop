import styled from 'styled-components'

export const Container = styled.div`
  border: thin dashed black;
  height: 300px;
  background-color: #f2f2f2;
`

interface ImageProps {
  src: string;
}

export const Image = styled.div<ImageProps>`
  background-image: url(${props => props.src});
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fafafa;
  width: 100%;
`

export const Text = styled.p`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;

  svg {
    margin-bottom: 10px;
    font-size: 24px;
  }

  span {
    font-size: 18px;
    text-align: center;
  }
`
