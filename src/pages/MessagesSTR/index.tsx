import { useEffect, useState } from 'react';
import {
  BCMSG,
  SISMSG,
  USERMSG,
  Message,
  Container,
  TempButtom,
} from './styles';

import { Button } from '../../components/SPB/Button';
import { DropDownField } from '../../components/SPB/DropDownField';

import { InputXsString } from '../../components/SPB/InputXsString';
import { InputXsDecimal } from '../../components/SPB/InputXsDecimal';

import { InputXsDate } from '../../components/SPB/InputXsDate';
import { InputXsDateTime } from '../../components/SPB/InputXsDateTime';
import { InputXsInteger } from '../../components/SPB/InputXsInteger';
import { Doc } from '../../components/SPB/Doc';
import { api } from '../../services/axios';
import { toast } from 'react-toastify';

function handleChange() {}

// eslint-disable-next-line no-unused-vars
const staticBcmsg = (
  <BCMSG name="BCMSG - Segmento de Controle">
    <InputXsString
      name="IdentdEmissor"
      NomeCampo="Identificador Emissor"
      DescricaoCampo="Identificador da IF e Câmara junto ao Banco Central para o Sistema de Pagamentos Brasileiro."
      currentValue={'Mensagen de envio BMC0004'}
      required
      changeHandler={handleChange}
      values={'xxxxxxxx'}
    />
  </BCMSG>
);

const staticSismsg = (
  <>
    <SISMSG name="SISMSG - Segmento do Sistema">
      <Message name="BMC0004">
        <InputXsString
          name="ISPBIF"
          NomeCampo="ISPB IF"
          DescricaoCampo="Número de identificão da Instituição Financeira no Sistema de Pagamentos Brasileiro"
          currentValue={'Mensagen de envio BMC0004'}
          required
          changeHandler={handleChange}
          values={'xxxxxxxx'}
        />
        <InputXsDecimal
          name="VlrTotCompraMN"
          NomeCampo="Valor Total Compra Moeda_Nacional"
          DescricaoCampo="Valor total das operações de compra de moeda estrangeira expresso em moeda nacional."
          currentValue={'0'}
          totalDigits="19"
          fractionDigits="2"
          minExclusive="-100000000000000000"
          maxExclusive="100000000000000000"
          required
          changeHandler={handleChange}
        />
        <InputXsDate
          name="DtMovto"
          NomeCampo="Data Movimento"
          DescricaoCampo="Data Movimento"
          currentValue={'2022-05-15'}
          required
          changeHandler={handleChange}
          values={'xxxxxxxx'}
        />
        <InputXsDateTime
          name="DtHrSit"
          NomeCampo="Data Hora Situação"
          DescricaoCampo="Data e hora da situação."
          currentValue={'2022-05-15 12:35'}
          required
          changeHandler={handleChange}
          values={'xxxxxxxx'}
        />
        <InputXsInteger
          name="NumRefSWIFTBMC"
          NomeCampo="Número Referência SWIFT BMC"
          DescricaoCampo="Número de referência da mensagem Swift da C�mara BMC."
          // fieldHelp="N�mero de refer�ncia da mensagem Swift. Formato = AADDDNNNNNN onde:AA - Ano; DDD - Data  Juliana; NNNNNN - N�mero seq�encial."
          currentValue={'22123000001'}
          totalDigits="11"
          required
          changeHandler={handleChange}
          values={'xxxxxxxx'}
        />
      </Message>
    </SISMSG>
  </>
);

// eslint-disable-next-line no-unused-vars
const staticUsermsg = (
  <USERMSG name="USERMSG - Segmento do Usuário">
    <h1></h1>
  </USERMSG>
);

export function MessagesSTR() {
  const [message, setMessage] = useState<object>({});

  async function CreateHtmlMessage(doc: object | any): Promise<object> {
    const htmlMessage = {};

    const { schema } = doc;
    const { element } = schema;

    for (const property in element) {
      console.log(property, element[property]);
    }
    return htmlMessage;
  }

  async function getMessage() {
    const response = await api.get('/transformxsl/bmc0253');
    setMessage(response.data);
    // toast(JSON.stringify(response.data, null, 2))
    await CreateHtmlMessage(response.data);
  }

  async function handleButton() {
    await getMessage();
  }

  return (
    <Container>
      <DOC
        name="DOC"
        type="DOCComplexType"
        childRef="complexType"
        Evento="BMC0253 - IF requisita Utilização de moeda depositada em garantias para pagamento de saldo devedor"
        Descricao="Destinado à IF requisitar a utilização de moeda depositada em garantias para pagamento de saldo devedor."
        Servico="Consulta e Utilização de Garantia BMC"
        TipoFluxo="Fluxo1"
        InfRegra={[
          {
            CodigoRegra: 'RBMC0010',
            DescricaoRegra:
              'A confirmação desta mensagem depende de disponibilidade das garantias depositadas.',
          },
          {
            CodigoRegra: 'RBMC0011',
            DescricaoRegra:
              'A IF deve enviar no campo Finalidade de Cobertura da mensagem LDL1006 o conteúdo "12", indicando que irá utilizar as garantias em reservas bancárias ou moeda estrangeira para complementação de valores a liquidar.',
          },
          {
            CodigoRegra: 'RBMC0012',
            DescricaoRegra:
              'O Número de Controle da Operação deve ser informado no Número de Controle LDL Original na mensagem LDL1006.',
          },
        ]}
      >
        {/* <h1>conteudo</h1> */}
        {/* <form onSubmit={handleSubmit}> */}
        {/* {elementReact} */}
        {staticBcmsg}
        {staticSismsg}
        {staticUsermsg}
        <button className="temp" onClick={getMessage}>
          get msg
        </button>
        {/* </form> */}
      </DOC>
    </Container>
  );
}
