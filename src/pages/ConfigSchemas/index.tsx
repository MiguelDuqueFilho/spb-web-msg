import { TreeStructure } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import {
  Column,
  GridContainer,
  GridContent,
  HeaderRow,
  Row,
} from '../../components/Grid';
import { MessagesContext } from '../../contexts/MessagesContext';
import { Action, ConfigurationContainer, Span, SpanCount } from './styles';

export function ConfigSchemas() {
  const { getServico, grupoServico, updateSchema } =
    useContext(MessagesContext);

  function handleUpdateSchema(GrpServico: string) {
    updateSchema(GrpServico);
  }

  useEffect(() => {
    if (grupoServico === null) getServico();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ConfigurationContainer>
      <GridContainer>
        <HeaderRow>
          <Column desktop={1}>Serviço</Column>
          <Column desktop={9}>Descrição</Column>
          <Column desktop={1}>Domínio</Column>
          <Column desktop={1}>Schemas</Column>
        </HeaderRow>
        <GridContent>
          {grupoServico?.map((service) => (
            <Row key={service.GrpServico}>
              <Column desktop={1}>{service.GrpServico}</Column>
              <Column desktop={9}>{service.Descricao}</Column>
              <Column desktop={1}>{service.Dominio}</Column>
              <Column desktop={1}>
                <Action
                  disabled={service._count?.Eventos === 0}
                  onClick={() => {
                    handleUpdateSchema(service.GrpServico);
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
    </ConfigurationContainer>
  );
}
