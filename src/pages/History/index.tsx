import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import DateObject from 'react-date-object';
import {
  Column,
  GridContainer,
  GridContent,
  HeaderRow,
  Row,
} from '../../components/Grid';

import { api } from '../../services/axios';
import { Action, HistoryContainer, Pre, Span } from './styles';
import { prettifyXml } from '../../util/prettyXml';

interface IListMessageError {
  domain: number | null;
  code: number | null;
  level: number | null;
  line: number | null;
  column: number;
}

interface IListMessage {
  id: string;
  codMsg: string;
  xmlMessage: string;
  process: string;
  status: string;
  error: IListMessageError[];
  dateRef: string;
  createdAt: string;
  updateAt: string;
}

export function History() {
  const [messageList, setMessageList] = useState<IListMessage[]>([]);
  const [messageSelected, setMessageSelected] = useState<IListMessage | null>(
    null
  );

  function handleSelectMessage(message: IListMessage) {
    setMessageSelected(message);
  }

  function dateFormat(date: string) {
    const dateRef = new DateObject(date);
    return dateRef.format('DD/MM/YYYY HH:MM:SS');
  }

  async function listSendMessage() {
    try {
      const response = await api.get(`/message/list/send`);

      setMessageList(response.data);
    } catch (error) {
      toast.error(`Error: ${error}`);
      return { error };
    }
  }

  useEffect(() => {
    listSendMessage();
  }, []);

  return (
    <>
      <Span>Visualizando apensa as mensagens mas recentes</Span>
      <HistoryContainer>
        <GridContainer>
          <HeaderRow>
            <Column desktop={3}>Data Criação</Column>
            <Column desktop={2}>Message</Column>
            <Column desktop={2}>Processamento</Column>
            <Column desktop={2}>Status</Column>
            <Column desktop={3}>Visualizar</Column>
          </HeaderRow>
          <GridContent>
            {messageList?.map((message) => (
              <Row key={message.id}>
                <Column desktop={3}>{dateFormat(message.createdAt)}</Column>
                <Column desktop={2}>{message.codMsg}</Column>
                <Column desktop={2}>{message.process}</Column>
                <Column desktop={2}>{message.status}</Column>
                <Column desktop={3}>
                  <Action
                    onClick={() => {
                      handleSelectMessage(message);
                    }}
                  >
                    {message.status === 'VALIDATE' ? 'XML' : 'Erro'}
                  </Action>
                </Column>
              </Row>
            ))}
          </GridContent>
        </GridContainer>
        <GridContainer>
          <HeaderRow>
            <Column desktop={12}>XML</Column>
          </HeaderRow>
          <GridContent>
            <Row>
              <Column desktop={12}>
                {messageSelected?.status === 'VALIDATE' ? (
                  <pre>{prettifyXml(messageSelected.xmlMessage)}</pre>
                ) : (
                  messageSelected?.xmlMessage
                )}
              </Column>
            </Row>
            {messageSelected?.status === 'ERROR' &&
              messageSelected.error.map((validateError, index) => (
                <Row key={index}>
                  <Column desktop={12}>
                    <Pre>{JSON.stringify(validateError, null, 2)}</Pre>
                  </Column>
                </Row>
              ))}
          </GridContent>
        </GridContainer>
      </HistoryContainer>
    </>
  );
}
