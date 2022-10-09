import { TreeStructure } from 'phosphor-react';
import { useContext, useEffect } from 'react';
import {
  Column,
  GridContainer,
  GridContent,
  HeaderRow,
  Row,
} from '../../components/Grid';
import { UploadFile } from '../../components/UploadFile';
import { MessagesContext } from '../../contexts/MessagesContext';
import {
  Action,
  ConfigurationContainer,
  ConfigurationContent,
  ConfigurationListService,
  ConfigurationSection,
  Span,
  SpanCount,
} from './styles';

export function Configurations() {
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
      <h1>Configurações</h1>
      <ConfigurationContent>
        <ConfigurationSection>
          <span>Upload Catalogo de serviços do Bacen</span>
          <UploadFile title="Carregar volume de I a III  -  (um arquivo por vez)." />
        </ConfigurationSection>
        <ConfigurationListService>
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
        </ConfigurationListService>
      </ConfigurationContent>
    </ConfigurationContainer>
  );
}
