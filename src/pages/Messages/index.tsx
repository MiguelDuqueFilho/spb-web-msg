import { TreeStructure } from 'phosphor-react';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Column,
  GridContainer,
  GridContent,
  HeaderRow,
  Row,
} from '../../components/Grid';
import { MessagesContext } from '../../contexts/MessagesContext';
import {
  Action,
  MessageContainer,
  FormContainer,
  InputSubmit,
  MessageInput,
  Pre,
  Span,
  SpanCount,
} from './styles';

export function Messages() {
  const {
    message,
    getMessage,
    getServicoConv,
    events,
    grupoServicoConv,
    listEventByService,
    updateSchema,
  } = useContext(MessagesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleListEventByService(servico: string) {
    listEventByService(servico);
  }

  useEffect(() => {
    if (!grupoServicoConv) getServicoConv();
  }, [getServicoConv, grupoServicoConv]);

  return (
    <MessageContainer>
      <GridContainer>
        <HeaderRow>
          <Column desktop={1}>Serviço</Column>
          <Column desktop={9}>Descrição</Column>
          <Column desktop={2}>Schemas</Column>
        </HeaderRow>
        <GridContent>
          {grupoServicoConv?.map((service) => (
            <Row key={service.GrpServico}>
              <Column desktop={1}>{service.GrpServico}</Column>
              <Column desktop={9}>{service.Descricao}</Column>
              <Column desktop={2}>
                <Action
                  disabled={service._count?.Eventos === 0}
                  onClick={() => {
                    handleListEventByService(service.GrpServico);
                  }}
                >
                  {service._count?.Eventos === 0 ? (
                    <Span>Atualizado</Span>
                  ) : (
                    <>
                      <TreeStructure />
                      <SpanCount>{service._count?.Eventos}</SpanCount>
                    </>
                  )}
                </Action>
              </Column>
            </Row>
          ))}
        </GridContent>
      </GridContainer>

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
      </FormContainer>
    </MessageContainer>
  );
}
