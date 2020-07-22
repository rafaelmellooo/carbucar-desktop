import React from 'react'

import { Container } from './styles'

import Product from './Product'

interface Product {
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

interface ProductsProps {
  products: Product[]
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <Container>
      {
        products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            height={product.height}
            width={product.width}
            wires={product.wires}
            format={product.format}
            image_url={product.image_url}
          />
        ))
      }
    </Container>
  )
}

export default Products
