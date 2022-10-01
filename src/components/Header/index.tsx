import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './styles';
import { Scroll, House, Gear, FileDoc, Envelope, Table } from 'phosphor-react';
import ImgSPB from '../../assets/spb.svg';

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={ImgSPB} alt="" />
      </div>
      <nav>
        <NavLink to="/" title="Home">
          <House size={24} />
        </NavLink>
        {/* <NavLink to="/history" title="Histórico de mensages">
          <Scroll size={24} />
        </NavLink> */}
        {/* <NavLink to="/message" title="Digitação de mensagens">
          <FileDoc size={24} />
        </NavLink> */}
        <NavLink to="/messages" title="Envio de mensagens SPB">
          <Envelope size={24} />
        </NavLink>
        <NavLink to="/messages-edit" title="Digitação de mensagens SPB">
          <FileDoc size={24} />
        </NavLink>
        <NavLink to="/configurations" title="Configuração">
          <Gear size={24} />
        </NavLink>
        {/* <NavLink to="/messages-form" title="Test de Formulário">
          <Table size={24} />
        </NavLink> */}
      </nav>
    </HeaderContainer>
  );
}
