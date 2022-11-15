import { TreeStructure } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Column,
  GridContainer,
  GridContent,
  HeaderRow,
  Row,
} from '../../components/Grid';
import { UploadFile } from '../../components/UploadFile';
import { IGrupoServico } from '../../contexts/MessagesContext';
import { api } from '../../services/axios';
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
  const [grupoServico, setGrupoServico] = useState<IGrupoServico[] | null>(
    null
  );
  const [grupoServicoUpdt, setGrupoServicoUpdt] = useState<
    IGrupoServico[] | null
  >(null);

  async function getServico(): Promise<void> {
    try {
      const response = await api.get(`/catalog/service/list`);
      setGrupoServico(response.data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  }

  async function updateSchema(service: string) {
    try {
      const response = await api.get(`/catalog/schema/updateAll/${service}`);
      const { error } = response.data;
      if (error) {
        toast.error(`Error: ${error}`);
      } else {
        setGrupoServicoUpdt(response.data);
      }
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    }
  }

  async function handleUpdateSchema(GrpServico: string) {
    await updateSchema(GrpServico);
  }

  useEffect(() => {
    getServico();
  }, []);

  // useEffect(() => {
  //   getServico();
  // }, [grupoServico]);

  useEffect(() => {
    setGrupoServico(grupoServicoUpdt);
  }, [grupoServicoUpdt]);

  return (
    <ConfigurationContainer>
      <h1>Configurações</h1>
      <ConfigurationContent>
        <ConfigurationSection>
          <span>Upload Catalogo de serviços do Bacen</span>
          <UploadFile title="Carregar volume de I a III  -  (um arquivo por vez)." />
        </ConfigurationSection>
        <ConfigurationListService>
          <span>Atualização de schemas</span>
          <GridContainer>
            <HeaderRow>
              <Column desktop={1}>Serviço</Column>
              <Column desktop={9}>Descrição</Column>
              <Column desktop={2}>Schemas</Column>
            </HeaderRow>
            <GridContent>
              {grupoServico?.map((service) => (
                <Row key={service.GrpServico}>
                  <Column desktop={1}>{service.GrpServico}</Column>
                  <Column desktop={9}>{service.Descricao}</Column>
                  <Column desktop={2}>
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
