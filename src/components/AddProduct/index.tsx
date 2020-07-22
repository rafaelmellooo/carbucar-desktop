import React, { useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'

import { Container, Add } from './styles'
import NewProduct from '../NewProduct'

const AddProduct: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <>
      <Container>
        <Add type="button" onClick={() => setIsOpen(true)}>
          <FiPlusCircle />
          <span>NOVO PRODUTO</span>
        </Add>
      </Container>

      <NewProduct modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default AddProduct
