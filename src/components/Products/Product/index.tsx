import React, { useState } from 'react'

import { useProducts, Product as IProduct } from '../../../contexts/products'

import UpdateProduct from '../../UpdateProduct'

import DeleteProduct from '../../DeleteProduct'

import { FiSettings, FiXCircle } from 'react-icons/fi'

import { Container, Image, Text, Group, Title, Buttons, Button } from './styles'

const Product: React.FC<IProduct> = ({ id, height, width, wires, format, image_url }) => {
  const [openUpdate, setOpenUpdate] = useState(false)

  const [openDelete, setOpenDelete] = useState(false)

  return (
    <>
      <Container>
        <Title>{id}</Title>
        <Image src={image_url} />
        <Group>
          <Text>Altura: {height}mm</Text>
          <Text>Largura: {width}mm</Text>
          <Text>Quantidade de fios: {wires}</Text>
          <Text>Formato: {format.name}</Text>
        </Group>

        <Buttons>
          <Button color="#1497a3" onClick={() => setOpenUpdate(true)}>
            <FiSettings /> <span>Editar</span>
          </Button>

          <Button color="#d63c3c" onClick={() => setOpenDelete(true)}>
            <FiXCircle /> <span>Apagar</span>
          </Button>
        </Buttons>
      </Container>

      <UpdateProduct
        modalIsOpen={openUpdate} setIsOpen={setOpenUpdate} id={id} height={height} width={width}
        wires={wires} format={{ value: format.id, label: format.name }} fileUrl={image_url}
      />

      <DeleteProduct
        modalIsOpen={openDelete}
        setIsOpen={setOpenDelete}
        id={id}
      />
    </>
  )
}

export default Product
