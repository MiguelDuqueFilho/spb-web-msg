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
  const [grupoServico, setGrupoServico] = useState<IGrupoServico[]>([]);

  const listService = () => {
    api.get(`/catalog/service/list`).then((response) => {
      setGrupoServico(response.data);
    });
  };

  useEffect(() => {
    listService();
  }, []);

  const UpdateSchema = async (service: IGrupoServico) => {
    const response = await api.get(
      `/catalog/schema/updateAll/${service.GrpServico}`
    );
    const { error } = await response.data;
    if (error) {
      toast.error(`Error: ${error}`);
    } else {
      const { count } = response.data;

      const newGrupoService: IGrupoServico[] = [];
      grupoServico.forEach(async (grupoServicoItem) => {
        if (grupoServicoItem.GrpServico === service.GrpServico) {
          newGrupoService.push({ ...service, _count: { Eventos: count } });
        } else {
          newGrupoService.push(grupoServicoItem);
        }
      });
      setGrupoServico(newGrupoService);
    }
  };

  return (
    <ConfigurationContainer>
      <h1>Configurações</h1>
      <ConfigurationContent>
        <ConfigurationSection>
          <span>Upload Catalogo de serviços do Bacen</span>
          <UploadFile
            title="Carregar volume de I a III  -  (um arquivo por vez)."
            listService={listService}
          />
        </ConfigurationSection>
        <ConfigurationListService>
          <span>Atualização de schemas</span>
          <GridContainer>
            <HeaderRow>
              <Column desktop={1}>Serviço</Column>
              <Column desktop={9}>Descrição</Column>
              <Column desktop={2}>Schemas (click para atualizar)</Column>
            </HeaderRow>
            <GridContent>
              {grupoServico.map((service) => (
                <Row key={service.GrpServico}>
                  <Column desktop={1}>{service.GrpServico}</Column>
                  <Column desktop={9}>{service.Descricao}</Column>
                  <Column desktop={2}>
                    <Action
                      type="button"
                      disabled={service._count?.Eventos === 0}
                      onClick={() => {
                        UpdateSchema(service);
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
