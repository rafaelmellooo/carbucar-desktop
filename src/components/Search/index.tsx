import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Select from 'react-select'

import api from '../../services/api'

import { Container, Field, Title, Input, Label, FieldGroup, Group, Fields, GroupButton, Button } from './styles'

interface Format {
  id: number;
  name: string;
}

interface FormatSerializer {
  value: number;
  label: string;
}

const Search: React.FC = () => {
  const [formats, setFormats] = useState<FormatSerializer[]>([])

  const loadFormats = async () => {
    const response = await api.get<Format[]>('/formats')
    setFormats(response.data.map(format => ({ value: format.id, label: format.name })))
  }

  useEffect(() => {
    loadFormats()
  }, [])

  return (
    <Container>
      <Fields>
        <Field>
          <Title>Altura (em mm)</Title>

          <FieldGroup>
            <Input id="min-height" name="min-height" min={0} type="number" placeholder="Mínima" />

            <Input id="max-height" name="max-height" min={0} type="number" placeholder="Máxima" />
          </FieldGroup>
        </Field>

        <Field>
          <Title>Largura (em mm)</Title>

          <FieldGroup>
            <Input id="min-width" name="min-width" min={0} type="number" placeholder="Mínima" />

            <Input id="max-width" name="max-width" min={0} type="number" placeholder="Máxima" />
          </FieldGroup>
        </Field>
      </Fields>

      <Select styles={{
        control: styles => ({
          ...styles,
          fontFamily: '\'Roboto\', sans-serif',
          marginBottom: '20px'
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
          <Input id="qt-wires" name="qt-wires" type="number" min={0} />
        </Group>

        <Button type="submit">
          <FiSearch />
        </Button>
      </GroupButton>

    </Container>
  )
}

export default Search
