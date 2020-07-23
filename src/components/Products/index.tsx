import React, { useCallback } from 'react'

import { useProducts } from '../../contexts/products'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import { Container, Content, GoBack, GoNext } from './styles'

import Product from './Product'

const Products: React.FC = () => {
  const { products, productsInfo, loadProducts } = useProducts()

  const handleGoBack = useCallback(() => {
    loadProducts(Number(productsInfo.meta.currentPage) - 1)
  }, [loadProducts, productsInfo.meta.currentPage])

  const handleGoNext = useCallback(() => {
    console.log(Number(productsInfo.meta.currentPage) + 1)
    loadProducts(Number(productsInfo.meta.currentPage) + 1)
  }, [loadProducts, productsInfo.meta.currentPage])

  return (
    <Container>
      {
        Number(productsInfo.meta.currentPage) > 1 ? (
          <GoBack type="button" onClick={handleGoBack}>
            <FiArrowLeft />
          </GoBack>
        ) : <div />
      }
      <Content count={Number(productsInfo.meta.itemCount)}>
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
      </Content>
      {
        Number(productsInfo.meta.currentPage) === Number(productsInfo.meta.totalPages) ? <div /> : (
          <GoNext type="button" onClick={handleGoNext}>
            <FiArrowRight />
          </GoNext>
        )
      }
    </Container>
  )
}

export default Products
