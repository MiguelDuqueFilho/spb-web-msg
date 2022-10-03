import { TreeStructure } from 'phosphor-react';
import { useContext, useState } from 'react';
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
  Button,
  ButtonContainer,
  ConfigurationContainer,
  Span,
} from './styles';

export function ConfigEvents() {
  const { getServico, grupoServico } = useContext(MessagesContext);
  const [isUploading, setIsUploading] = useState(false);

  async function handleListService() {
    setIsUploading(true);
    await getServico();
    setIsUploading(false);
  }
  return (
    <ConfigurationContainer>
      <ButtonContainer>
        <span>Serviços</span>
        <Button
          disabled={grupoServico !== null}
          type="button"
          onClick={handleListService}
          title="Carregar Serviços"
        >
          {isUploading ? 'Carregando' : 'Carregar Serviços'}
        </Button>
      </ButtonContainer>
      <GridContainer>
        <HeaderRow>
          <Column desktop={1}>Serviço</Column>
          <Column desktop={9}>Descrição</Column>
          <Column desktop={1}>Domínio</Column>
          <Column desktop={1}>Eventos</Column>
        </HeaderRow>
        <GridContent>
          {grupoServico?.map((service) => (
            <Row key={service.GrpServico}>
              <Column desktop={1}>{service.GrpServico}</Column>
              <Column desktop={9}>{service.Descricao}</Column>
              <Column desktop={1}>{service.Dominio}</Column>
              <Column desktop={1}>
                <Action disabled onClick={() => {}}>
                  <TreeStructure />
                  <Span>{service._count?.Eventos}</Span>
                </Action>
              </Column>
            </Row>
          ))}
        </GridContent>
      </GridContainer>
    </ConfigurationContainer>
  );
}
