import React from 'react'

import { FiSettings, FiXCircle } from 'react-icons/fi'

import { Container, Image, Text, Group, Title, Buttons, Button } from './styles'

interface ProductProps {
  id: string
  height: number
  width: number
  wires: number
  format: {
    id: number
    name: string
  }
  image_url: string
}

const Product: React.FC<ProductProps> = ({ id, height, width, wires, format, image_url }) => {
  return (
    <Container>
      <Title>{id}</Title>
      <Image src={image_url} alt={id} />
      <Group>
        <Text>Altura: {height}mm</Text>
        <Text>Largura: {width}mm</Text>
        <Text>Quantidade de fios: {wires}</Text>
        <Text>Formato: {format.name}</Text>
      </Group>

      <Buttons>
        <Button color="#1497a3">
          <FiSettings /> <span>Editar</span>
        </Button>

        <Button color="#d63c3c">
          <FiXCircle /> <span>Apagar</span>
        </Button>
      </Buttons>
    </Container>
  )
}

export default Product
