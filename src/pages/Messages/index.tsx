import { LockOpen, TelegramLogo } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Column,
  GridContainer,
  GridContent,
  HeaderRow,
  Row,
} from '../../components/Grid';
import {
  IEvento,
  IGrupoServico,
  MessagesContext,
} from '../../contexts/MessagesContext';
import { api } from '../../services/axios';
import { Action, MessageContainer, Span, SpanCount } from './styles';

export function Messages() {
  const navigate = useNavigate();

  const [events, setEvents] = useState<IEvento[] | null>(null);
  const [grupoServico, setGrupoServico] = useState<IGrupoServico[] | null>(
    null
  );

  const { getMessage } = useContext(MessagesContext);

  async function getServico(): Promise<void> {
    try {
      const response = await api.get(`/catalog/service/listconv`);
      setGrupoServico(response.data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  }

  async function handleGoTOForm(event: string) {
    await getMessage(event);
    navigate('/messages-form');
  }

  async function listEventByService(service: string): Promise<void> {
    try {
      const response = await api.get(`/catalog/event/listByService/${service}`);
      setEvents(response.data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  }

  async function handleListEventByService(servico: string) {
    await listEventByService(servico);
  }

  useEffect(() => {
    getServico();
  }, []);

  return (
    <>
      <Span>Escolha o Servico e o Evento a ser digitado</Span>
      <MessageContainer>
        <GridContainer>
          <HeaderRow>
            <Column desktop={2}>Serviço</Column>
            <Column desktop={8}>Descrição</Column>
            <Column desktop={2}>Eventos</Column>
          </HeaderRow>
          <GridContent>
            {grupoServico?.map(
              (service) =>
                service._count?.Eventos !== 0 && (
                  <Row key={service.GrpServico}>
                    <Column desktop={2}>{service.GrpServico}</Column>
                    <Column desktop={8}>{service.Descricao}</Column>
                    <Column desktop={2}>
                      <Action
                        disabled={service._count?.Eventos === 0}
                        onClick={() => {
                          handleListEventByService(service.GrpServico);
                        }}
                      >
                        <LockOpen size={24} />
                        <SpanCount>{service._count?.Eventos}</SpanCount>
                      </Action>
                    </Column>
                  </Row>
                )
            )}
          </GridContent>
        </GridContainer>
        <GridContainer>
          <HeaderRow>
            <Column desktop={2}>Evento</Column>
            <Column desktop={9}>Descrição</Column>
            <Column desktop={1}>Edit</Column>
          </HeaderRow>
          <GridContent>
            {events?.map((event) => (
              <Row key={event.CodEvento}>
                <Column desktop={2}>{event.CodEvento}</Column>
                <Column desktop={9}>{event.NomeEvento}</Column>
                <Column desktop={1}>
                  <Action
                    disabled={event.IsConvert === false}
                    onClick={() => {
                      handleGoTOForm(event.CodEvento);
                    }}
                  >
                    <TelegramLogo size={24} />
                  </Action>
                </Column>
              </Row>
            ))}
          </GridContent>
        </GridContainer>
      </MessageContainer>
    </>
  );
}
