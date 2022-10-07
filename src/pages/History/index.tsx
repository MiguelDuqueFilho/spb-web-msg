import { SetStateAction, useEffect, useState } from 'react';
import XMLViewer from 'react-xml-viewer';
import { toast } from 'react-toastify';
import {
  Column,
  GridContainer,
  GridContent,
  HeaderRow,
  Row,
} from '../../components/Grid';

import { api } from '../../services/axios';
import { Action, HistoryContainer } from './styles';
import { TextStrikethrough } from 'phosphor-react';
import styled from 'styled-components';

interface IListMessage {
  id: string;
  codMsg: string;
  xmlMessage: string;
  process: string;
  status: string;
  error?: string;
  dateRef: string;
  createdAt: string;
  updateAt: string;
}

const customTheme = {
  attributeKeyColor: '#aaa',
  attributeValueColor: 'white',
  tagColor: 'pink',
  textColor: 'yellow',
  separatorColor: '#fff',
  cdataColor: 'green',
  overflowBreak: true,
};

export function History() {
  const [messageList, setMessageList] = useState<IListMessage[]>([]);
  const [messageSelected, setMessageSelected] = useState<IListMessage>();

  function handleSelectMessage(message: IListMessage) {
    setMessageSelected(message);
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
    <HistoryContainer>
      <GridContainer>
        <HeaderRow>
          <Column desktop={3}>Data Processamento</Column>
          <Column desktop={2}>Message</Column>
          <Column desktop={2}>Processamento</Column>
          <Column desktop={2}>Status</Column>
          <Column desktop={3}>Ação</Column>
        </HeaderRow>
        <GridContent>
          {messageList?.map((message) => (
            <Row key={message.id}>
              <Column desktop={3}>{message.dateRef}</Column>
              <Column desktop={2}>{message.codMsg}</Column>
              <Column desktop={2}>{message.process}</Column>
              <Column desktop={2}>{message.status}</Column>
              <Column desktop={3}>
                <Action
                  onClick={() => {
                    handleSelectMessage(message);
                  }}
                >
                  Mensagem
                </Action>
              </Column>
            </Row>
          ))}
        </GridContent>
      </GridContainer>
      <GridContainer>
        <HeaderRow>
          <Column desktop={12}>Mensagem</Column>
        </HeaderRow>
        <GridContent>
          <Row>
            <Column desktop={12}>
              {typeof messageSelected !== 'undefined' && (
                <XMLViewer
                  xml={messageSelected?.xmlMessage}
                  theme={customTheme}
                />
              )}
            </Column>
          </Row>
        </GridContent>
      </GridContainer>
    </HistoryContainer>
  );
}
