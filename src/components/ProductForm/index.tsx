import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { FiXCircle, FiCheckCircle } from 'react-icons/fi'

import api from '../../services/api'

import Dropzone from '../Dropzone'

import Select from 'react-select'

import { Container, WrapperClose, Button, Content, Label, Input, Separator, InputGroup, SubmitButton } from './styles'

interface Format {
  id: number;
  name: string;
}

interface FormatSerializer {
  value: number;
  label: string;
}

interface ProductFormProps {
  modalIsOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleSubmit: (event: React.FormEvent) => Promise<void>
  id: string | undefined
  setId: React.Dispatch<React.SetStateAction<string | undefined>>
  height: number | undefined
  setHeight: React.Dispatch<React.SetStateAction<number | undefined>>
  width: number | undefined
  setWidth: React.Dispatch<React.SetStateAction<number | undefined>>
  wires: number | undefined
  setWires: React.Dispatch<React.SetStateAction<number | undefined>>
  format: FormatSerializer | undefined
  setFormat: React.Dispatch<React.SetStateAction<FormatSerializer | undefined>>
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>
  selectedFileUrl?: string
}

const ProductForm: React.FC<ProductFormProps> = ({
  modalIsOpen, setIsOpen, handleSubmit, id, setId, height,
  setHeight, width, setWidth, wires, setWires, format, setFormat, setFile,
  selectedFileUrl
}) => {
  const [formats, setFormats] = useState<FormatSerializer[]>([])

  const loadFormats = async () => {
    const response = await api.get<Format[]>('/formats')
    setFormats(response.data.map(format => ({ value: format.id, label: format.name })))
  }

  useEffect(() => {
    loadFormats()
  }, [])

  return (
    <Modal style={{
      content: {
        padding: 0
      }
    }} isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
      <Container>
        <WrapperClose>
          <Button type="button" color="#c72a0e" onClick={() => setIsOpen(false)}>
            <FiXCircle />
            <span>Fechar</span>
          </Button>
        </WrapperClose>

        <Content onSubmit={handleSubmit}>
          <Separator rows="1fr 1fr 1fr 1fr">
            <InputGroup>
              <Label htmlFor="id">Código do produto</Label>
              <Input readOnly={!!selectedFileUrl} id="id" type="text" value={id} onChange={({ target }) => setId(target.value)} />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="height">Altura do produto (em mm)</Label>
              <Input id="height" type="number" min={0} value={height} onChange={({ target }) => setHeight(Number(target.value))} />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="width">Largura do produto (em mm)</Label>
              <Input id="width" type="number" min={0} value={width} onChange={({ target }) => setWidth(Number(target.value))} />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="wires">Quantidade de fios</Label>
              <Input id="wires" type="number" min={0} value={wires} onChange={({ target }) => setWires(Number(target.value))} />
            </InputGroup>
          </Separator>

          <Separator rows="300px 1fr 100px">
            <Dropzone selectedFileUrl={selectedFileUrl} setFile={setFile} />

            <Select value={format} onChange={(value) => setFormat(value as FormatSerializer)} styles={{
              control: styles => ({
                ...styles,
                fontFamily: '\'Roboto\', sans-serif'
              }),
              option: (styles) => {
                return {
                  ...styles,
                  fontFamily: '\'Roboto\', sans-serif'
                }
              }
            }} theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: 'black'
              }
            })} options={formats} defaultValue={{ value: 0, label: 'Formato do produto..' }} isSearchable isClearable name="format" />

            <SubmitButton color="#23db76" type="submit">
              <FiCheckCircle />
              <span>Salvar produto</span>
            </SubmitButton>
          </Separator>
        </Content>
      </Container>
    </Modal>
  )
}

export default ProductForm
