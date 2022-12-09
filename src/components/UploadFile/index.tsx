import { Trash } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/axios';
import {
  ButtonLoad,
  LoadContainer,
  InputFileContainer,
  InputFilePdf,
  ResultContainer,
  Button,
} from './styles';

interface UploadFileProps {
  title: string;
  listService: () => void;
}

interface IResultLoad {
  info: string;
  author: string;
  pages: number;
  servicos: number;
  eventos: number;
  mensagens: number;
}

export function UploadFile({ title, listService }: UploadFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [resultLoad, setResultLoad] = useState<IResultLoad | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    // console.log(event)
    event.persist();
    setSelectedFile(null);
    if (event.target.files?.length === 0) return;
    const file: File = (event.target.files as FileList)[0];
    // console.log(file)

    setSelectedFile(file);
  }

  async function handleLoadFileToServer() {
    if (!selectedFile) return;

    setIsUploading(true);

    const formData = new FormData();

    formData.append('file', selectedFile);
    try {
      const result = await api.post('/catalog/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResultLoad(result.data);
      setSelectedFile(null);
      setIsUploading(false);
      listService();
    } catch (error) {
      toast.error(`Erro na carga do catalogo.`);
      setIsUploading(false);
    }
  }

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
          {isUploading ? 'Carregando' : 'Carregar'}
        </ButtonLoad>
      </LoadContainer>
      {resultLoad && (
        <ResultContainer>
          <div>
            <p>Info: </p>
            <span>{resultLoad?.info}</span>
          </div>
          <div>
            <p>Autor: </p>
            <span>{resultLoad?.author}</span>
          </div>
          <div>
            <p>Paginas: </p>
            <span>{resultLoad?.pages}</span>
          </div>
          <div>
            <p>Servicos: </p>
            <span>{resultLoad?.servicos}</span>
          </div>
          <div>
            <p>Eventos: </p>
            <span>{resultLoad?.eventos}</span>
          </div>
          <div>
            <p>Mensagens: </p>
            <span>{resultLoad?.mensagens}</span>
          </div>
          <Button
            type="button"
            onClick={() => setResultLoad(null)}
            title="exclue o resultado"
          >
            <Trash size={24} />
          </Button>
        </ResultContainer>
      )}
    </InputFileContainer>
  );
}
