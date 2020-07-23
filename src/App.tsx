import React from 'react'
import { render } from 'react-dom'
import Modal from 'react-modal'
import { ToastProvider } from 'react-toast-notifications'

import { ProductProvider } from './contexts/products'

import { GlobalStyle } from './styles/GlobalStyle'
import Header from './components/Header'
import styled from 'styled-components'

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

const App = () => (
  <>
    <GlobalStyle />
    <ToastProvider>
      <ProductProvider>
        <Header />
        <Container>
          <Search />
          <Products />
        </Container>
      </ProductProvider>
    </ToastProvider>
  </>
)

const Container = styled.main`
`

Modal.setAppElement('#root')
render(<App />, document.getElementById('root'))
