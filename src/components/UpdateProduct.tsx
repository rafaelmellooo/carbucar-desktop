import React, { useState, useCallback } from 'react'
import { useProducts } from '../contexts/products'
import api from '../services/api'
import { useToasts } from 'react-toast-notifications'

import ProductForm from './ProductForm'

interface FormatSerializer {
  value: number;
  label: string;
}

interface UpdateProductProps {
  modalIsOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  id: string
  height: number
  width: number
  wires: number
  format: FormatSerializer
  fileUrl: string
}

const UpdateProduct: React.FC<UpdateProductProps> = (props) => {
  const { loadProducts } = useProducts()

  const { addToast } = useToasts()

  const [id, setId] = useState<string | undefined>(props.id)
  const [height, setHeight] = useState<number | undefined>(props.height)
  const [width, setWidth] = useState<number | undefined>(props.width)
  const [wires, setWires] = useState<number | undefined>(props.wires)
  const [format, setFormat] = useState<FormatSerializer | undefined>(props.format)
  const [file, setFile] = useState<File | undefined>()

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

    const data = {
      id, height, width, wires, format: format.value, has_newimage: !!file
    }

    interface AxiosResponse {
      id: string
    }

    const response = await api.put<AxiosResponse>(`/products/${id}`, data)

    if (file) {
      const image = new FormData()

      image.append('file', file)

      await api.post<AxiosResponse>(`/products/${response.data.id}/uploads`, image)
    }

    loadProducts()

    addToast('Produto editado com sucesso', { appearance: 'success', autoDismiss: true, onDismiss: () => props.setIsOpen(false) })
  }, [id, height, width, wires, format, file, loadProducts, addToast, props])

  return <ProductForm
    modalIsOpen={props.modalIsOpen} setIsOpen={props.setIsOpen} handleSubmit={handleSubmit}
    id={id} setId={setId} height={height} setHeight={setHeight} width={width}
    setWidth={setWidth} wires={wires} setWires={setWires} format={format} setFormat={setFormat} setFile={setFile}
    selectedFileUrl={props.fileUrl}
  />
}

export default UpdateProduct
