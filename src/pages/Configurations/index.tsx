import { UploadFile } from '../../components/UploadFile';

import {
  ConfigurationContainer,
  ConfigurationContent,
  ConfigurationSection,
} from './styles';

export function Configurations() {
  return (
    <ConfigurationContainer>
      <h1>Configurações</h1>
      <ConfigurationContent>
        <ConfigurationSection>
          <span>Upload Catalogo de serviços do Bacen</span>
          <UploadFile title="Carregar volume de I a III  -  (um arquivo por vez)." />
        </ConfigurationSection>
      </ConfigurationContent>
    </ConfigurationContainer>
  );
}
