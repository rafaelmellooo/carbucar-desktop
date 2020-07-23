import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import { Container, Text, Image } from './styles'

interface DropzoneProps {
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>
  selectedFileUrl?: string
}

const Dropzone: React.FC<DropzoneProps> = (props) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState(props.selectedFileUrl)

  const onDrop = useCallback(acceptedFiles => {
    const file: File = acceptedFiles[0]

    const fileUrl = URL.createObjectURL(file)

    props.setFile(file)

    setSelectedFileUrl(fileUrl)
  }, [props])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />

      {
        selectedFileUrl ? (
          <Image src={selectedFileUrl} />
        ) : (
          <Text>
            <FiUpload />
            <span>Arraste a imagem do produto aqui ou clique para selecioná-la</span>
          </Text>
        )
      }
    </Container>
  )
}

export default Dropzone
