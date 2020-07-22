import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import Modal from 'react-modal'

import { GlobalStyle } from './styles/GlobalStyle'
import Header from './components/Header'
import styled from 'styled-components'

import api from './services/api'

import Search from './components/Search'

import Products from './components/Products'

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

interface AxiosResponse {
  items: Product[]
  meta: {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
  }
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([])

  const loadProducts = async () => {
    const response = await api.get<AxiosResponse>('/products')

    setProducts(response.data.items)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Search />
        <Products products={products} />
      </Container>
    </>
  )
}

const Container = styled.main`
  padding: 20px;
`

Modal.setAppElement('#root')
render(<App />, document.getElementById('root'))
