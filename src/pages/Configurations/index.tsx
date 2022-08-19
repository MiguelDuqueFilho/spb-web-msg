import { ChangeEvent, useState } from 'react'
import { UploadFile } from '../../components/UploadFile'
import {
  ConfigurationContainer,
  ConfigurationContent,
  ConfigurationUpload,
} from './styles'

export function Configurations() {
  // const [fileSelected, setFileSelected] = useState<File>()

  // const [isUploading, setUploading] = useState(false)

  // function handleInputFileChanged(event: ChangeEvent<HTMLInputElement>) {
  //   setUploading(true)
  //   const fileList = event.target.files
  //   console.log(fileList)
  //   console.log(event.target.value)
  //   try {
  //     if (!fileList) return
  //     setFileSelected(fileList[0])
  //   } finally {
  //     setUploading(false)
  //   }
  // }

  return (
    <ConfigurationContainer>
      <h1>Configurações</h1>
      <ConfigurationContent>
        <ConfigurationUpload>
          <span>Carga Catalogo</span>
          <UploadFile title="Catalog 1" />
          <UploadFile title="Catalog 2" />
          <UploadFile title="Catalog 3" />
          <UploadFile title="Catalog 4" />
        </ConfigurationUpload>
        <ConfigurationUpload>
          <span>Carga Catalogo</span>
          <UploadFile title="Catalog 1" />
          <UploadFile title="Catalog 2" />
          <UploadFile title="Catalog 3" />
          <UploadFile title="Catalog 4" />
        </ConfigurationUpload>
      </ConfigurationContent>
    </ConfigurationContainer>
  )
}
