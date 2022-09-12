import { BCMSG } from '../../components/SPB/BCMSG';
import { DOC } from '../../components/SPB/DOC';
import { Group } from '../../components/SPB/Group';
import { Container, InputSubmit, Pre } from './styles';
import { SISMSG } from '../../components/SPB/SISMSG';
import { Message } from '../../components/SPB/Message';
import { Input as InputString } from '../../components/SPB/InputXsString/styles';
import { Input as InputInteger } from '../../components/SPB/InputXsInteger/styles';
import { Input as InputDate } from '../../components/SPB/InputXsDate/styles';
import { Input as InputDecimal } from '../../components/SPB/InputXsDecimal/styles';

import { Choice } from '../../components/SPB/Choice';
import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { USERMSGMODEL } from '../../components/SPB/USERMSGMODEL';

export type FormValues = {
  DOC?: {
    BCMSG: {
      IdentdEmissor: string;
      IdentdDestinatario: string;
      Grupo_Seq: {
        NumSeq: string;
        IndrCont: string;
      };
    };
    SISMSG: {
      STR0000?: {
        CodMsg: string;
        Grupo_BMC0004_OpInterbanc: {
          TaxCam: string;
          Grupo_BMC0004_OpContrd: {
            NumCtrlBMC: string;
          };
          CodMoeda?: string;
          ControleIF?: string;
        };
        DtMovto: string;
      };
      STR0000R1?: {
        CodMsg: string;
        valor: string;
      };
    };
    USERMSG: string;
  };
};

export function MessagesForm() {
  const [resultForm, setResultForm] = useState({});

  const methods = useForm<FormValues>({
    defaultValues: {
      DOC: {
        BCMSG: {
          IdentdEmissor: '01',
          IdentdDestinatario: '02',
          Grupo_Seq: {
            NumSeq: '03',
            IndrCont: '04',
          },
        },
        SISMSG: {
          STR0000: {
            CodMsg: '05',
            Grupo_BMC0004_OpInterbanc: {
              TaxCam: '06',
              Grupo_BMC0004_OpContrd: {
                NumCtrlBMC: '07',
              },
              CodMoeda: '08',
              ControleIF: '18',
            },
            DtMovto: '09',
          },
          STR0000R1: {
            CodMsg: '10',
            valor: '0',
          },
        },
        USERMSG: '12',
      },
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
  });

  const onSubmit = (data: FormValues) => setResultForm(data);

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DOC
            name="DOC"
            type="DOCComplexType"
            childRef="complexType"
            Evento="BMC0004 - BMC informa Operações interbancárias de câmbio contratadas no dia"
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
              xmlStack="DOC.BCMSG"
            >
              <InputString
                //  "name": "IdentdEmissor",
                //   "type": "ISPB",
                //   "NomeCampo": "Identificador Emissor",
                //   "DescricaoCampo": "Número de Identificação do emissor junto ao Bacen para o Sistema de pagamentos Brasileiro.",
                //   "childRef": "simpleType"
                type="text"
                id="IdentdEmissor"
                // name="IdentdEmissor"
                required={true}
                pattern={`[0-9]{0,${8}}`}
                maxLength={8}
                min={8}
                max={8}
                {...methods.register(`DOC.BCMSG.IdentdEmissor` as const, {
                  required: true,
                })}
                className={
                  methods.formState.errors?.DOC?.BCMSG?.IdentdEmissor
                    ? 'error'
                    : ''
                }
                defaultValue=""
              />
              <InputString
                //  "name": "IdentdDestinatario",
                //  "type": "ISPB",
                //  "NomeCampo": "Identificador Destinatário",
                //  "DescricaoCampo": "Número de identificação do destinatário junto ao BACEN para o Sistema de Pagamentos Brasileiro.",
                //  "childRef": "simpleType"
                type="text"
                id="IdentdDestinatario"
                // name="IdentdDestinatario"
                required={true}
                pattern={`[0-9]{0,${8}}`}
                maxLength={8}
                {...methods.register(`DOC.BCMSG.IdentdDestinatario` as const, {
                  required: true,
                })}
                className={
                  methods.formState.errors?.DOC?.BCMSG?.IdentdDestinatario
                    ? 'error'
                    : ''
                }
                defaultValue=""
              />
              <Group
                name="Grupo_Seq"
                type="Grupo_SeqComplexType"
                minOccurs={0}
                NomeCampo="Grupo Sequencia"
                tagRef="Group"
                childRef="complexType"
              >
                <InputInteger
                  // "name": "CodMoeda",
                  // "DescricaoTipo": "Código de identificação da moeda, padrão utilizado pelo BACEN, conforme CNC, Capítulo 2, Título 22.",
                  // "base": "xs:integer",
                  // "tagRef": "InputXsInteger",
                  // "totalDigits": 3

                  type="text"
                  id="NumSeq"
                  // name="NumSeq"
                  required={true}
                  pattern={`[0-9]{0,${8}}`}
                  maxLength={8}
                  {...methods.register(`DOC.BCMSG.Grupo_Seq.NumSeq` as const, {
                    required: true,
                  })}
                  className={
                    methods.formState.errors?.DOC?.BCMSG?.Grupo_Seq?.NumSeq
                      ? 'error'
                      : ''
                  }
                  defaultValue=""
                />
                <InputString
                  type="text"
                  id="IndrCont"
                  name="IndrCont"
                  required={true}
                  pattern={`[0-9]{0,${8}}`}
                  maxLength={8}
                />
              </Group>
            </BCMSG>
            <SISMSG
              name="SISMSG"
              type="SISMSGComplexType"
              description="Segmento do Sistema"
              tagRef="SISMSG"
              childRef="complexType"
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
                >
                  <InputString
                    // "name": "CodMsg",
                    // "DescricaoTipo": "Código da mensagem do sistema associado ao evento.",
                    // "base": "xs:string",
                    // "tagRef": "InputXsString",
                    // "minLength": 7,
                    // "maxLength": 9,
                    // "pattern": "[A-Z]{3}[0-9]{4}(E|R1|R2|R3)?"
                    type="text"
                    id="CodMsg"
                    // name="CodMsg"
                    required={true}
                    pattern={`[0-9]{0,${8}}`}
                    maxLength={8}
                    min={8}
                    max={8}
                    readOnly
                    {...methods.register(`DOC.SISMSG.STR0000.CodMsg` as const, {
                      required: true,
                    })}
                    className={
                      methods.formState.errors?.DOC?.SISMSG?.STR0000?.CodMsg
                        ? 'error'
                        : ''
                    }
                    defaultValue="STR0000"
                  />
                  <Group
                    name="Grupo_BMC0004_OpInterbanc"
                    type="Grupo_BMC0004_OpInterbancComplexType"
                    maxOccurs="unbounded"
                    tagRef="Group"
                    childRef="complexType"
                    NomeCampo="Grupo Operações Interbancárias"
                  >
                    <InputInteger
                      // "name": "TaxCam",
                      // "type": "TaxaCambio",
                      // "childRef": "simpleType",
                      // "NomeCampo": "Taxa Câmbio",
                      // "DescricaoCampo": "Taxa de câmbio utilizada na operação de contratação de câmbio."
                      type="text"
                      id="TaxCam"
                      // name="TaxCam"
                      required={true}
                      pattern={`[0-9]{0,${2}}`}
                      maxLength={2}
                      {...methods.register(
                        `DOC.SISMSG.STR0000.Grupo_BMC0004_OpInterbanc.TaxCam` as const,
                        {
                          required: true,
                        }
                      )}
                      className={
                        methods.formState.errors?.DOC?.SISMSG?.STR0000
                          ?.Grupo_BMC0004_OpInterbanc?.TaxCam
                          ? 'error'
                          : ''
                      }
                    />
                    <Group
                      name="Grupo_BMC0004_OpContrd"
                      type="Grupo_BMC0004_OpContrdComplexType"
                      minOccurs={0}
                      maxOccurs="unbounded"
                      tagRef="Group"
                      childRef="complexType"
                      NomeCampo="Grupo Operações Contratadas"
                    >
                      <InputString
                        type="text"
                        id="NumCtrlBMC"
                        // name="NumCtrlBMC"
                        required={true}
                        pattern={`[0-9]{0,${3}}`}
                        maxLength={3}
                        min={1}
                        max={3}
                        {...methods.register(
                          `DOC.SISMSG.STR0000.Grupo_BMC0004_OpInterbanc.Grupo_BMC0004_OpContrd.NumCtrlBMC` as const,
                          {
                            required: true,
                          }
                        )}
                        className={
                          methods.formState.errors?.DOC?.SISMSG?.STR0000
                            ?.Grupo_BMC0004_OpInterbanc?.Grupo_BMC0004_OpContrd
                            ?.NumCtrlBMC
                            ? 'error'
                            : ''
                        }
                      />
                    </Group>
                  </Group>
                  <Choice>
                    <InputInteger
                      // "name": "CodMoeda",
                      // "DescricaoTipo": "Código de identificação da moeda, padrão utilizado pelo BACEN, conforme CNC, Capítulo 2, Título 22.",
                      // "base": "xs:integer",
                      // "tagRef": "InputXsInteger",
                      // "totalDigits": 3
                      type="text"
                      id="CodMoeda"
                      // name="CodMoeda"
                      required={true}
                      pattern={`[0-9]{0,${3}}`}
                      maxLength={3}
                      {...methods.register(
                        `DOC.SISMSG.STR0000.Grupo_BMC0004_OpInterbanc.CodMoeda` as const,
                        {
                          required: false,
                        }
                      )}
                      className={
                        methods.formState.errors?.DOC?.SISMSG?.STR0000
                          ?.Grupo_BMC0004_OpInterbanc?.CodMoeda
                          ? 'error'
                          : ''
                      }
                    />
                    <InputString
                      type="text"
                      id="ControleIF"
                      // name="ControleIF"
                      required={true}
                      pattern={`[0-9]{0,${3}}`}
                      maxLength={3}
                      min={1}
                      max={3}
                      {...methods.register(
                        `DOC.SISMSG.STR0000.Grupo_BMC0004_OpInterbanc.ControleIF` as const,
                        {
                          required: false,
                        }
                      )}
                      className={
                        methods.formState.errors?.DOC?.SISMSG?.STR0000
                          ?.Grupo_BMC0004_OpInterbanc?.ControleIF
                          ? 'error'
                          : ''
                      }
                    />
                  </Choice>
                  <InputDate
                    type="date-local"
                    id="DtMovto"
                    // name="DtMovto"
                    // onChange={handleChangeInput}
                    required
                    // value={inputXsDate}
                    {...methods.register(
                      `DOC.SISMSG.STR0000.DtMovto` as const,
                      {
                        required: false,
                      }
                    )}
                    className={
                      methods.formState.errors?.DOC?.SISMSG?.STR0000?.DtMovto
                        ? 'error'
                        : ''
                    }
                  />
                </Message>
                <Message
                  name="STR0000R1"
                  Mensagem="Mensagem de teste STR0000R1"
                >
                  <InputString
                    // "name": "CodMsg",
                    // "DescricaoTipo": "Código da mensagem do sistema associado ao evento.",
                    // "base": "xs:string",
                    // "tagRef": "InputXsString",
                    // "minLength": 7,
                    // "maxLength": 9,
                    // "pattern": "[A-Z]{3}[0-9]{4}(E|R1|R2|R3)?"
                    type="text"
                    id="CodMsg"
                    // name="CodMsg"
                    required={true}
                    pattern={`[0-9]{0,${10}}`}
                    maxLength={10}
                    min={10}
                    max={10}
                    // value="STR0000R1"
                    readOnly
                    {...methods.register(
                      `DOC.SISMSG.STR0000R1.CodMsg` as const,
                      {
                        required: true,
                      }
                    )}
                    className={
                      methods.formState.errors?.DOC?.SISMSG?.STR0000R1?.CodMsg
                        ? 'error'
                        : ''
                    }
                    defaultValue="STR0000R1"
                  />
                  <InputDecimal
                    // "name": "VlrTotCompraMN",
                    // "type": "Valor",
                    // "childRef": "simpleType",
                    // "NomeCampo": "Valor Total Compra Moeda_Nacional",
                    // "DescricaoCampo": "Valor total das operações de compra de moeda estrangeira expresso em  moeda nacional."

                    id="Valor"
                    // name="Valor"
                    // minExclusive={-100000000000000000}
                    // maxExclusive={100000000000000000}
                    required={true}
                    defaultValue={123.45}
                    maxLength={19}
                    decimalsLimit={2}
                    decimalScale={2}
                    fixedDecimalLength={2}
                    allowDecimals={!!2}
                    prefix="R$"
                    // decimalSeparator=","
                    // groupSeparator="."
                    intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                    allowNegativeValue={true}
                    disableGroupSeparators={false}
                    disableAbbreviations={true}
                    // onValueChange={handleChangeInput}
                    {...methods.register(
                      `DOC.SISMSG.STR0000R1.valor` as const,
                      {
                        required: true,
                      }
                    )}
                    className={
                      methods.formState.errors?.DOC?.SISMSG?.STR0000R1?.valor
                        ? 'CurrencyInput error'
                        : 'CurrencyInput'
                    }
                  />
                </Message>
              </Choice>
            </SISMSG>
            <USERMSGMODEL
              // "name": "USERMSGSimpleType",
              // "base": "xs:string",
              // "tagRef": "InputXsString",
              // "maxLength": 1048576
              name="USERMSG"
              type="USERMSGSimpleType"
              minOccurs={0}
              description="Segmento de Usuário"
              maxLength={5}
              xmlStack="DOC.USERMSG"
            />
          </DOC>
          <InputSubmit type="submit" />
        </form>
      </FormProvider>
      <Pre>{JSON.stringify(resultForm, null, 2)}</Pre>
    </Container>
  );
}
