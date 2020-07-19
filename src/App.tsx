import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import Header from './components/Header'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <h1>Hello World</h1>
    </>
  )
}

render(<App />, mainElement)
