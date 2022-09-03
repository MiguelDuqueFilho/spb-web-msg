import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../services/axios'
import {
  ButtonLoad,
  LoadContainer,
  InputFileContainer,
  InputFilePdf,
} from './styles'

interface UploadFileProps {
  title: string
}

export function UploadFile({ title }: UploadFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event)
    if (event.target.files?.length === 0) return
    const file: File = (event.target.files as FileList)[0]
    console.log(file)

    setSelectedFile(file)
  }

  async function handleLoadFileToServer() {
    if (!selectedFile) return
    const formData = new FormData()

    formData.append('file', selectedFile)
    const response = await api.post('/catalog', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    // const response = await server.post('/upload', selectedFile, {
    //   headers: {
    //     'Content-Type': selectedFile.type,
    //   },
    // })
    toast(JSON.stringify(response, null, 2))
    console.log(JSON.stringify(response))
  }
  // class UploadFileComponent extends Component<
  //   UploadFileProps,
  //   UploadFileStateProps
  // > {
  // function to read file as binary and return
  // function getFileFromInput(file: File): Promise<any> {
  //   return new Promise(function (resolve, reject) {
  //     const reader = new FileReader()
  //     reader.onerror = reject
  //     reader.onload = function () {
  //       resolve(reader.result)
  //     }
  //     reader.readAsBinaryString(file) // here the file can be read in different way Text, DataUrl, ArrayBuffer
  //   })
  // }

  // function manageUploadedFile(binary: String, file: File) {
  //   // do what you need with your file (fetch POST, ect ....)
  //   console.log(`The file size is ${binary.length}`)
  //   console.log(`The file name is ${file.name}`)
  // }

  // function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
  //   console.log(event)

  //   setSelectedFile(event.target.files)
  //   event.persist()
  //   Array.from(event.target.files).forEach((file) => {
  //     getFileFromInput(file)
  //       .then((binary) => {
  //         manageUploadedFile(binary, file)
  //       })
  //       .catch(function (reason) {
  //         console.log(`Error during upload ${reason}`)
  //         event.target.value = '' // to allow upload of same file if error occurs
  //       })
  //   })
  // }

  return (
    <InputFileContainer>
      {/* <pre>{`Name: ${selectedFile?.name}`}</pre>
      <pre>{`size: ${selectedFile?.size}`}</pre>
      <pre>{`size: ${selectedFile?.type}`}</pre> */}

      <label htmlFor="file">{title}</label>
      <LoadContainer>
        <InputFilePdf
          accept=".pdf"
          id="file"
          type="file"
          onChange={handleFileChange}
        />

        <ButtonLoad onClick={handleLoadFileToServer}>Carregar</ButtonLoad>
      </LoadContainer>
    </InputFileContainer>
  )
}
