import React, { useState, useCallback } from 'react'
import { useProducts } from '../contexts/products'
import api from '../services/api'
import { useToasts } from 'react-toast-notifications'

import ProductForm from './ProductForm'

interface FormatSerializer {
  value: number;
  label: string;
}

interface NewProductProps {
  modalIsOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NewProduct: React.FC<NewProductProps> = ({ modalIsOpen, setIsOpen }) => {
  const { loadProducts } = useProducts()

  const { addToast } = useToasts()

  const [id, setId] = useState<string>()
  const [height, setHeight] = useState<number>()
  const [width, setWidth] = useState<number>()
  const [wires, setWires] = useState<number>()
  const [format, setFormat] = useState<FormatSerializer>()
  const [file, setFile] = useState<File>()

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault()

    if (!id) {
      addToast('O código do produto deve ser informado', { appearance: 'error', autoDismiss: true })
      return
    }

    if (!height) {
      addToast('A altura do produto deve ser informada', { appearance: 'error', autoDismiss: true })
      return
    }

    if (!width) {
      addToast('A largura do produto deve ser informada', { appearance: 'error', autoDismiss: true })
      return
    }

    if (!wires) {
      addToast('A quantidade de fios deve ser informada', { appearance: 'error', autoDismiss: true })
      return
    }

    if (!format || format.value === 0) {
      addToast('O formato do produto deve ser selecionado', { appearance: 'error', autoDismiss: true })
      return
    }

    if (!file) {
      addToast('A imagem do produto deve ser selecionada', { appearance: 'error', autoDismiss: true })
      return
    }

    const data = {
      id, height, width, wires, format: format.value
    }

    interface AxiosResponse {
      id: string
    }

    const response = await api.post<AxiosResponse>('/products', data)

    const image = new FormData()

    image.append('file', file)

    await api.post<AxiosResponse>(`/products/${response.data.id}/uploads`, image)

    loadProducts()

    setId(undefined)
    setHeight(undefined)
    setWidth(undefined)
    setWires(undefined)
    setFormat(undefined)
    setFile(undefined)

    addToast('Produto cadastrado com sucesso', { appearance: 'success', autoDismiss: true, onDismiss: () => setIsOpen(false) })
  }, [id, height, width, wires, format, file, loadProducts, addToast, setIsOpen])

  return <ProductForm
    modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} handleSubmit={handleSubmit}
    id={id} setId={setId} height={height} setHeight={setHeight} width={width}
    setWidth={setWidth} wires={wires} setWires={setWires} format={format} setFormat={setFormat} setFile={setFile}
  />
}

export default NewProduct
