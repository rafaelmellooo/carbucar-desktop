import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'

import { Container, Add } from './styles'

const AddProduct: React.FC = () => {
  return (
    <Container>
      <Add>
        <FiPlusCircle />
        <span>NOVO PRODUTO</span>
      </Add>
    </Container>
  )
}

export default AddProduct
