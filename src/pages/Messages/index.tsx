import { ArrowFatLinesRight, Pen, TreeStructure } from 'phosphor-react';
import { useContext, useEffect } from 'react';

import {
  Column,
  GridContainer,
  GridContent,
  HeaderRow,
  Row,
} from '../../components/Grid';
import { MessagesContext } from '../../contexts/MessagesContext';
import { Action, MessageContainer, Span, SpanCount } from './styles';

export function Messages() {
  const {
    getMessage,
    getServicoConv,
    events,
    grupoServicoConv,
    listEventByService,
  } = useContext(MessagesContext);

  function handleGetMessage(event: string) {
    getMessage(event);
  }

  function handleListEventByService(servico: string) {
    listEventByService(servico);
  }

  useEffect(() => {
    if (grupoServicoConv === null) getServicoConv();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MessageContainer>
      <GridContainer>
        <HeaderRow>
          <Column desktop={2}>Serviço</Column>
          <Column desktop={8}>Descrição</Column>
          <Column desktop={2}>Eventos</Column>
        </HeaderRow>
        <GridContent>
          {grupoServicoConv?.map((service) => (
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
                  <ArrowFatLinesRight />
                  <SpanCount>{service._count?.Eventos}</SpanCount>
                </Action>
              </Column>
            </Row>
          ))}
        </GridContent>
      </GridContainer>
      <GridContainer>
        <HeaderRow>
          <Column desktop={2}>Evento</Column>
          <Column desktop={8}>Descrição</Column>
          <Column desktop={2}>Edit</Column>
        </HeaderRow>
        <GridContent>
          {events?.map((event) => (
            <Row key={event.CodEvento}>
              <Column desktop={2}>{event.CodEvento}</Column>
              <Column desktop={8}>{event.NomeEvento}</Column>
              <Column desktop={2}>
                <Action
                  disabled={event.IsConvert === false}
                  onClick={() => {
                    handleGetMessage(event.CodEvento);
                  }}
                >
                  {event.IsConvert === false ? (
                    <Span>Não</Span>
                  ) : (
                    <>
                      <Pen />
                      <SpanCount>Formulário</SpanCount>
                    </>
                  )}
                </Action>
              </Column>
            </Row>
          ))}
        </GridContent>
      </GridContainer>
      {/* <Pre>{JSON.stringify(events, null, 2)}</Pre> */}
      {/* 
      <FormContainer>
        <form
          onSubmit={handleSubmit((data) => {
            getMessage(data.codMsg);
          })}
        >
          <label htmlFor="codMsg">Schema da Mensagem a ser escolhida</label>
          <MessageInput
            id="codMsg"
            type="text"
            list="msg-suggestions"
            placeholder="Entre com a mensagem"
            {...register('codMsg', { required: true })}
          />
          {errors.codMsg?.type === 'required' &&
            'Código de mensagem é obrigatório'}
          <datalist id="msg-suggestions">
            <option value="BMC0004" />
            <option value="BMC0253" />
            <option value="CAM0027" />
            <option value="GEN0001" />
            <option value="STR0008" />
          </datalist>
          <InputSubmit type="submit" value="enter" />
        </form>
        <Pre>{JSON.stringify(events, null, 2)}</Pre>
      </FormContainer> */}
    </MessageContainer>
  );
}
