import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Scroll, House, Gear, Bank, FileDoc, Buildings } from 'phosphor-react'
import ImgSPB from '../../assets/spb.svg'

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
        <NavLink to="/history" title="Histórico de mensages">
          <Scroll size={24} />
        </NavLink>
        <NavLink to="/message" title="Digitação de mensagens">
          <FileDoc size={24} />
        </NavLink>
        <NavLink to="/configurations" title="Configuração">
          <Gear size={24} />
        </NavLink>
        <NavLink to="/selic" title="Selic">
          <Buildings size={24} />
        </NavLink>
        <NavLink to="/messagesstr" title="Mensagens STR">
          <Bank size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
