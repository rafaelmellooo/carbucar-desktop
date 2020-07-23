import React, { useEffect, useState, useCallback } from 'react'
import { FiSearch } from 'react-icons/fi'
import Select from 'react-select'

import { RadioGroup, Radio } from 'react-radio-group'

import { useProducts } from '../../contexts/products'
import api from '../../services/api'

import { Container, Field, Title, Input, Label, FieldGroup, Group, Fields, GroupButton, Button, SortContainer } from './styles'

interface Format {
  id: number;
  name: string;
}

interface FormatSerializer {
  value: number;
  label: string;
}

const Search: React.FC = () => {
  const { height, setHeight, width, setWidth, wires, setWires, format, setFormat, sort_by, setSortBy, loadProducts } = useProducts()

  const [formats, setFormats] = useState<FormatSerializer[]>([])

  const loadFormats = async () => {
    const response = await api.get<Format[]>('/formats')
    setFormats(response.data.map(format => ({ value: format.id, label: format.name })))
  }

  useEffect(() => {
    loadFormats()
  }, [])

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault()

    loadProducts()
  }, [loadProducts])

  useEffect(() => {
    loadProducts()
  }, [loadProducts, sort_by])

  return (
    <Container onSubmit={handleSubmit}>
      <Fields>
        <Field>
          <Title>Altura (em mm)</Title>

          <FieldGroup>
            <Input id="min-height" name="min-height" min={0} type="number" placeholder="Mínima" value={height[0]}
              onChange={({ target }) => setHeight([Number(target.value), height[1]])} />

            <Input id="max-height" name="max-height" min={0} type="number" placeholder="Máxima" value={height[1]}
              onChange={({ target }) => setHeight([height[0], Number(target.value)])} />
          </FieldGroup>
        </Field>

        <Field>
          <Title>Largura (em mm)</Title>

          <FieldGroup>
            <Input id="min-width" name="min-width" min={0} type="number" placeholder="Mínima" value={width[0]}
              onChange={({ target }) => setWidth([Number(target.value), width[1]])} />

            <Input id="max-width" name="max-width" min={0} type="number" placeholder="Máxima" value={width[1]}
              onChange={({ target }) => setWidth([width[0], Number(target.value)])} />
          </FieldGroup>
        </Field>
      </Fields>

      <Select value={format} onChange={(value) => setFormat(value as FormatSerializer)} styles={{
        control: styles => ({
          ...styles,
          fontFamily: '\'Roboto\', sans-serif',
          marginBottom: '10px'
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

      <GroupButton>
        <Group>
          <Label htmlFor="qt-wires">Quantidade de fios</Label>
          <Input id="qt-wires" name="qt-wires" type="number" min={0} value={wires} onChange={({ target }) => setWires(Number(target.value))} />
        </Group>

        <Button type="submit">
          <FiSearch />
        </Button>
      </GroupButton>

      <SortContainer>
        <p>Ordenar por</p>

        <RadioGroup name="sort_by" selectedValue={sort_by} onChange={(value: string) => setSortBy(value)} style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          alignItems: 'center',
          justifyItems: 'center'
        }}>
          <label htmlFor="id">Código
            <Radio id="id" value="id" />
            <span></span>
          </label>

          <label htmlFor="height">Altura
            <Radio id="height" value="height" />
            <span></span>
          </label>

          <label htmlFor="width">Largura
            <Radio id="width" value="width" />
            <span></span>
          </label>

          <label htmlFor="wires">Quantidade de fios
            <Radio id="wires" value="wires" />
            <span></span>
          </label>
        </RadioGroup>
      </SortContainer>

    </Container>
  )
}

export default Search
