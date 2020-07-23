import React, { useCallback } from 'react'

import api from '../../services/api'

import Modal from 'react-modal'

import { useToasts } from 'react-toast-notifications'

import { useProducts } from '../../contexts/products'

import { Container, Title, YesButton, CancelButton } from './styles'

interface DeleteProductProps {
  modalIsOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  id: string
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ modalIsOpen, setIsOpen, id }) => {
  const { addToast } = useToasts()

  const { loadProducts } = useProducts()

  const handleClick = useCallback(async () => {
    await api.delete(`/products/${id}`)

    addToast('Produto apagado com sucesso', { appearance: 'success', autoDismiss: true })

    loadProducts()
  }, [addToast, id, loadProducts])

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={{
      content: {
        width: '400px',
        height: '200px',
        marginTop: '-100px',
        marginLeft: '-200px',
        top: '50%',
        left: '50%',
        padding: 0
      }
    }}>
      <Container>
        <Title>Deseja apagar o produto: {id}?</Title>

        <div>
          <YesButton type="button" onClick={handleClick}>Sim, desejo</YesButton>

          <CancelButton type="button" onClick={() => setIsOpen(false)}>Cancelar</CancelButton>
        </div>
      </Container>
    </Modal>
  )
}

export default DeleteProduct
