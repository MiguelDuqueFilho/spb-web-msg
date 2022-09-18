import { BCMSG } from '../../components/SPB/BCMSG';
import { DOC } from '../../components/SPB/DOC';
import { Group } from '../../components/SPB/Group';
import { Container, InputSubmit, Pre } from './styles';
import { SISMSG } from '../../components/SPB/SISMSG';
import { Message } from '../../components/SPB/Message';
import { InputXsString } from '../../components/SPB/InputXsString';
import { InputXsInteger } from '../../components/SPB/InputXsInteger';
import { InputXsDate } from '../../components/SPB/InputXsDate';
import { InputXsDateTime } from '../../components/SPB/InputXsDateTime';
import { InputXsDecimal } from '../../components/SPB/InputXsDecimal';
import { USERMSG } from '../../components/SPB/USERMSG';
import { Choice } from '../../components/SPB/Choice';
import { useForm, FormProvider } from 'react-hook-form';
import { useContext, useState } from 'react';
import { MessagesContext } from '../../contexts/MessagesContext';
import { DevTool } from '@hookform/devtools';

export function MessagesForm() {
  const [resultForm, setResultForm] = useState({});
  const [resultXml, setResultXml] = useState('');
  const { transformToXML } = useContext(MessagesContext);

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
    shouldUseNativeValidation: false,
  });

  const onSubmit = async (data: object): Promise<void> => {
    setResultForm(data);
    setResultXml(await transformToXML(data));
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DOC
            name="DOC"
            type="DOCComplexType"
            childRef="complexType"
            Evento="STR0000 - BMC informa Operações interbancárias de câmbio contratadas no dia"
            Descricao="Destinado à Câmara BMC informar as operações interbancárias de câmbio contratadas no dia por uma IF."
            Servico="Operações Interbancárias de Câmbio BMC"
            TipoFluxo="Fluxo5"
            InfRegra={[
              { CodigoRegra: 'RMBC0001', DescricaoRegra: 'Esta mensagem 1' },
              { CodigoRegra: 'RMBC0002', DescricaoRegra: 'Esta mensagem 2' },
            ]}
            tagRef="DOC"
          >
            <BCMSG
              name="BCMSG"
              type="BCMSGComplexType"
              description="Segmento de Controle"
              tagRef="BCMSG"
              childRef="complexType"
              xmlStack="DOC.0.BCMSG"
            >
              <InputXsString
                name="IdentdEmissor"
                type="ISPB"
                NomeCampo="Identificador Emissor"
                DescricaoCampo="Número de Identificação do emissor junto ao Bacen para o Sistema de pagamentos Brasileiro."
                minLength={8}
                maxLength={8}
                pattern="[0-9]{8}"
                xmlStack="DOC.0.BCMSG.0.IdentdEmissor"
              />
              <InputXsString
                name="IdentdDestinatario"
                type="ISPB"
                NomeCampo="Identificador Destinatário"
                DescricaoCampo="Número de identificação do destinatário junto ao BACEN para o Sistema de Pagamentos Brasileiro."
                minLength={8}
                maxLength={8}
                pattern="[0-9]{8}"
                xmlStack="DOC.0.BCMSG.1.IdentdDestinatario"
              />
              <Group
                name="Grupo_Seq"
                type="Grupo_SeqComplexType"
                minOccurs={0}
                NomeCampo="Grupo Sequencia"
                tagRef="Group"
                childRef="complexType"
                xmlStack="DOC.0.BCMSG.2.Grupo_SeqComplexType"
              >
                <InputXsInteger
                  name="TaxCam"
                  type="TaxaCambio"
                  NomeCampo="Taxa Câmbio"
                  DescricaoCampo="Taxa de câmbio utilizada na operação de contratação de câmbio."
                  base="xs:integer"
                  tagRef="InputXsInteger"
                  totalDigits={3}
                  xmlStack="DOC.0.BCMSG.2.Grupo_SeqComplexType.0.TaxaCambio"
                />
                <InputXsInteger
                  name="CodMoeda"
                  type="CodMoeda"
                  NomeCampo="Código Moeda"
                  DescricaoCampo="Código de identificação da moeda, padrão utilizado pelo BACEN, conforme  CNC, Capítulo 2, Título 22."
                  base="xs:integer"
                  tagRef="InputXsInteger"
                  totalDigits={3}
                  xmlStack="DOC.0.BCMSG.2.Grupo_SeqComplexType.1.CodMoeda"
                />
                <InputXsString
                  name="IndrCont"
                  type="ISPB"
                  NomeCampo="Identificador IndrCont"
                  DescricaoCampo="Número de IndrCont."
                  pattern={`[0-9]{0,${8}}`}
                  maxLength={8}
                  xmlStack="DOC.0.BCMSG.2.Grupo_SeqComplexType.2.IndrCont"
                />
              </Group>
            </BCMSG>
            <SISMSG
              name="SISMSG"
              type="SISMSGComplexType"
              description="Segmento do Sistema"
              tagRef="SISMSG"
              childRef="complexType"
              xmlStack="DOC.1.SISMSG"
            >
              <Choice>
                <Message
                  name="STR0000"
                  type="BMC0000ComplexType"
                  childRef="complexType"
                  Mensagem="Mensagem de teste STR0000"
                  Emissor="Câmara BMC"
                  Destinatario="IF"
                  tagRef="Message"
                  xmlStack="DOC.1.SISMSG.STR0000"
                >
                  <InputXsString
                    name="CodMsg"
                    type="ISPB"
                    NomeCampo="Codigo de Mensagem"
                    DescricaoCampo="Código da mensagem do sistema associado ao evento."
                    xmlStack="DOC.1.SISMSG.STR0000.CodMsg"
                    minLength={7}
                    maxLength={8}
                    pattern="[A-Z]{3}[0-9]{4}(E|R1|R2|R3)?"
                    fixed="STR0000"
                  />
                  <Group
                    name="Grupo_STR0000_OpInterbanc"
                    type="Grupo_STR0000_OpInterbancComplexType"
                    maxOccurs="unbounded"
                    tagRef="Group"
                    childRef="complexType"
                    NomeCampo="Grupo Operações Interbancárias"
                    xmlStack="DOC.1.SISMSG.STR0000.Grupo_STR0000_OpInterbanc"
                  >
                    <InputXsInteger
                      name="TaxCam"
                      type="TaxaCambio"
                      NomeCampo="Taxa Câmbio"
                      DescricaoCampo="Taxa de câmbio utilizada na operação de contratação de câmbio."
                      base="xs:integer"
                      tagRef="InputXsInteger"
                      totalDigits={3}
                      xmlStack="DOC.1.SISMSG.STR0000.Grupo_STR0000_OpInterbanc.TaxaCambio"
                    />
                    <Group
                      name="Grupo_STR0000_OpContrd"
                      type="Grupo_STR0000_OpContrdComplexType"
                      minOccurs={0}
                      maxOccurs="unbounded"
                      tagRef="Group"
                      childRef="complexType"
                      NomeCampo="Grupo Operações Contratadas"
                      xmlStack="DOC.1.SISMSG.STR0000.Grupo_STR0000_OpInterbanc.Grupo_STR0000_OpContrdComplexType"
                    >
                      <InputXsString
                        name="NumCtrlBMC"
                        type="ISPB"
                        NomeCampo="Codigo de NumCtrlBMC"
                        DescricaoCampo="Código da NumCtrlBMC do sistema associado ao evento."
                        xmlStack="DOC.SISMSG.STR0000.Grupo_STR0000_OpInterbanc.Grupo_STR0000_OpContrdComplexType.NumCtrlBMC"
                        minLength={7}
                        maxLength={8}
                      />
                    </Group>
                  </Group>
                  <Choice>
                    <InputXsInteger
                      name="CodMoeda"
                      type="CodMoeda"
                      NomeCampo="Código Moeda"
                      DescricaoCampo="Código de identificação da moeda, padrão utilizado pelo BACEN, conforme  CNC, Capítulo 2, Título 22."
                      base="xs:integer"
                      tagRef="InputXsInteger"
                      totalDigits={3}
                      xmlStack="DOC.1.SISMSG.STR0000R1.CodMoeda"
                    />
                    <InputXsString
                      name="ControleIF"
                      type="ISPB"
                      NomeCampo="Codigo de ControleIF"
                      DescricaoCampo="Código da ControleIF do sistema associado ao evento."
                      xmlStack="DOC.1.SISMSG.STR0000R1.ControleIF"
                      minLength={7}
                      maxLength={8}
                    />
                  </Choice>
                </Message>
                <Message
                  name="STR0000R1"
                  Mensagem="Mensagem de teste STR0000R1"
                  type="BMC0000ComplexType"
                  childRef="complexType"
                  Emissor="Câmara BMC"
                  Destinatario="IF"
                  tagRef="Message"
                  xmlStack="DOC.1.SISMSG.STR0000R1"
                >
                  <InputXsString
                    name="CodMsg"
                    type="ISPB"
                    NomeCampo="Codigo de Mensagem"
                    DescricaoCampo="Código da mensagem do sistema associado ao evento."
                    xmlStack="DOC.SISMSG.STR0000R1.0.CodMsg"
                    minLength={7}
                    maxLength={8}
                    pattern="[A-Z]{3}[0-9]{4}(E|R1|R2|R3)?"
                    fixed="STR0000R1"
                  />
                  <InputXsInteger
                    name="TaxCam"
                    type="TaxaCambio"
                    NomeCampo="Taxa Câmbio"
                    DescricaoCampo="Taxa de câmbio utilizada na operação de contratação de câmbio."
                    base="xs:integer"
                    tagRef="InputXsInteger"
                    totalDigits={3}
                    xmlStack="DOC.1.SISMSG.STR0000R1.1.TaxaCambio"
                  />
                  <InputXsDecimal
                    name="VlrTotCompraMN"
                    type="Valor"
                    childRef="simpleType"
                    NomeCampo="Valor Total Compra Moeda_Nacional"
                    DescricaoCampo="Valor total das operações de compra de moeda estrangeira expresso em  moeda nacional."
                    totalDigits={19}
                    fractionDigits={2}
                    minExclusive={-100000000000000000n}
                    maxExclusive={100000000000000000n}
                    xmlStack="DOC.1.SISMSG.STR0000R1.2.VlrTotCompraMN"
                  />
                  <InputXsDate
                    name="DtLiquid"
                    type="xs:date"
                    tagRef="InputXsDate"
                    NomeCampo="Data Liquidação"
                    DescricaoCampo="Data de liquidação de uma operação a termo"
                    xmlStack="DOC.1.SISMSG.STR0000R1.3.DtLiquid"
                  />
                  <InputXsDateTime
                    name="DtLiquidTime"
                    type="xs:datetime"
                    tagRef="InputXsDateTime"
                    NomeCampo="Data Liquidação"
                    DescricaoCampo="Data de liquidação de uma operação a termo"
                    xmlStack="DOC.1.SISMSG.STR0000R1.DtLiquidTime"
                  />
                </Message>
              </Choice>
            </SISMSG>
            <USERMSG
              name="USERMSG"
              type="USERMSGSimpleType"
              minOccurs={0}
              description="Segmento de Usuário"
              maxLength={10} // 1048576
              xmlStack="DOC.2.USERMSG"
            />
          </DOC>
          <InputSubmit type="submit" />
        </form>
      </FormProvider>
      <Pre>{JSON.stringify(resultForm, null, 2)}</Pre>
      <Pre>{resultXml}</Pre>
      <DevTool control={methods.control} />
    </Container>
  );
}
