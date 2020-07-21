import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import Header from './components/Header'
import styled from 'styled-components'

import Search from './components/Search'

import Products from './components/Products'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Search />
        <Products />
      </Container>
    </>
  )
}

const Container = styled.main`
  padding: 20px;
`

render(<App />, document.getElementById('root'))
