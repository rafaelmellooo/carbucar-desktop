import React, { useCallback } from 'react'
import { remote } from 'electron'
import { FiMinus, FiX } from 'react-icons/fi'

import AddProduct from '../AddProduct'

import { Container, Actions, Icon } from './styles'

const Header: React.FC = () => {
  const minimizeWindow = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.minimize()
  }, [])

  const closeWindow = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.close()
  }, [])

  return (
    <Container>
      <AddProduct />
      <Actions>
        <Icon type="button" onClick={minimizeWindow}>
          <FiMinus />
        </Icon>
        <Icon type="button" onClick={closeWindow}>
          <FiX />
        </Icon>
      </Actions>
    </Container>
  )
}

export default Header
