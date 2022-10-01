import { ChangeEvent, useState } from 'react';
import { UploadFile } from '../../components/UploadFile';
import {
  ConfigurationContainer,
  ConfigurationContent,
  ConfigurationUpload,
} from './styles';

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
          <span>Upload Catalogo de serviços do Bacen</span>
          <UploadFile title="Carregar volume de I a III" />
        </ConfigurationUpload>
      </ConfigurationContent>
    </ConfigurationContainer>
  );
}
