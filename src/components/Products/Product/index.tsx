import React from 'react'

import { Container } from './styles'

const Product: React.FC = () => {
  return (
    <Container>
      <p>Imagem do produto</p>
      <p>Altura: 45 mm</p>
      <p>Largura: 30mm</p>
      <p>Quantidade de fios: 4</p>
      <p>Formato: Oval</p>
    </Container>
  )
}

export default Product
