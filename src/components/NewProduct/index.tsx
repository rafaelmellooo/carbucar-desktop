import React from 'react'
import Modal from 'react-modal'

import { Container } from './styles'

interface NewProductProps {
  modalIsOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NewProduct: React.FC<NewProductProps> = ({ modalIsOpen, setIsOpen }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
      <Container>
        <h1>Hello World</h1>
      </Container>
    </Modal>
  )
}

export default NewProduct
