import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/axios';
import {
  ButtonLoad,
  LoadContainer,
  InputFileContainer,
  InputFilePdf,
  ResultContainer,
} from './styles';

interface UploadFileProps {
  title: string;
}

interface IResultLoad {
  info: string;
  author: string;
  pages: number;
  servicos: number;
  eventos: number;
  mensagens: number;
}

export function UploadFile({ title }: UploadFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [resultLoad, setResultLoad] = useState<IResultLoad | null>(null);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    // console.log(event)
    event.persist();
    if (event.target.files?.length === 0) return;
    const file: File = (event.target.files as FileList)[0];
    // console.log(file)

    setSelectedFile(file);
  }

  async function handleLoadFileToServer() {
    if (!selectedFile) return;
    const formData = new FormData();

    formData.append('file', selectedFile);
    try {
      const result = await api.post('/catalog/load', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSelectedFile(null);
      setResultLoad(result.data);
    } catch (error) {
      toast.error(`Erro na carga do catalogo.`);
    }
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
      <label htmlFor="file">{title}</label>
      <LoadContainer>
        <InputFilePdf
          accept=".pdf"
          id="file"
          type="file"
          onChange={handleFileChange}
        />

        <ButtonLoad disabled={!selectedFile} onClick={handleLoadFileToServer}>
          Carregar
        </ButtonLoad>
      </LoadContainer>
      {resultLoad && (
        <ResultContainer>
          <p>Info: </p>
          <span>{resultLoad?.info}</span>
          <p>Autor: </p>
          <span>{resultLoad?.author}</span>
          <p>Paginas: </p>
          <span>{resultLoad?.pages}</span>
          <p>Servicos: </p>
          <span>{resultLoad?.servicos}</span>
          <p>Eventos: </p>
          <span>{resultLoad?.eventos}</span>
          <p>Mensagens: </p>
          <span>{resultLoad?.mensagens}</span>
        </ResultContainer>
      )}
    </InputFileContainer>
  );
}
