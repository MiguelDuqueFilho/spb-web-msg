import { ReactNode } from 'react';
import { DocContainer } from './styles';

interface IInfRegra {
  CodigoRegra: string;
  DescricaoRegra: string;
}

interface DocProps {
  children?: ReactNode;
  name?: string;
  type?: string;
  childRef?: string;
  Evento?: string;
  Descricao?: string;
  Servico?: string;
  TipoFluxo?: string;
  InfRegra?: IInfRegra[];
}

export function DOC(props: DocProps) {
  return (
    <DocContainer>
      {/* <p>{props.name}</p>
      <p>{props.type}</p>
      <p>{props.childRef}</p> */}
      <span>{props.Evento}</span>
      {/* <p>{props.Descricao}</p>
      <p>{props.Servico}</p>
      <p>{props.TipoFluxo}</p> */}

      {/* {props.InfRegra?.map((regra) => {
        return (
          <>
            <h4>{regra.CodigoRegra}</h4>
            <h4>{regra.DescricaoRegra}</h4>
          </>
        )
      })} */}
      {props.children}
    </DocContainer>
  );
}
