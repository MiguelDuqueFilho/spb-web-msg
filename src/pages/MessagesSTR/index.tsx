import {
  ChangeEvent,
  createElement,
  FormEvent,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import { BCMSG, SISMSG, USERMSG, Message, Container } from './styles'

import { Button } from '../../componentsSPB/Button'
import { DropDownField } from '../../componentsSPB/DropDownField'

import { InputXsString } from '../../componentsSPB/InputXsString'
import { InputXsDecimal } from '../../componentsSPB/InputXsDecimal'

import { InputXsDate } from '../../componentsSPB/InputXsDate'
import { InputXsDateTime } from '../../componentsSPB/InputXsDateTime'
import { InputXsInteger } from '../../componentsSPB/InputXsInteger'
import { DOC } from '../../componentsSPB/DOC'

function handleChange() {}

// eslint-disable-next-line no-unused-vars
const staticBcmsg = (
  <BCMSG name="BCMSG - Segmento de Controle">
    <InputXsString
      name="IdentdEmissor"
      fieldName="Identificador Emissor"
      fieldDescription="Identificador da IF e Câmara junto ao Banco Central para o Sistema de Pagamentos Brasileiro."
      currentValue={'Mensagen de envio BMC0004'}
      required
      changeHandler={handleChange}
      values={'xxxxxxxx'}
    />
    <InputXsString
      name="IdentdDestinatario"
      fieldName="Identificador Destinatário"
      fieldDescription="Identificador da IF e Câmara junto ao Banco Central para o Sistema de Pagamentos Brasileiro."
      currentValue={'Mensagen de envio BMC0004'}
      required
      changeHandler={handleChange}
      values={'xxxxxxxx'}
    />
    <InputXsString
      name="IdentdContg"
      fieldName="Identificador Contingencia"
      fieldDescription="ISPB do participante em regime de contingencia"
      currentValue={'Mensagen de envio BMC0004'}
      changeHandler={handleChange}
      values={'xxxxxxxx'}
    />

    {/* <IdentdOperad>00000004</IdentdOperad> */}
    {/* <IdentdOperadConfc>1</IdentdOperadConfc> */}
    {/* <Grupo_Seq> */}
    {/* <NumSeq>176</NumSeq> */}
    {/* <IndrCont>1</IndrCont> */}
    {/* </Grupo_Seq> */}
    {/* <DomSist>55555</DomSist> */}
    {/* <NUOp>12345678901234567890123</NUOp>  */}
  </BCMSG>
)

// eslint-disable-next-line no-unused-vars
const staticSismsg = (
  <>
    <SISMSG name="SISMSG - Segmento do Sistema">
      <Message name="BMC0004">
        {/* <CodMsg>BMC0004</CodMsg> */}
        {/* <NumCtrlBMC>88888888</NumCtrlBMC> */}
        <InputXsString
          name="ISPBIF"
          fieldName="ISPB IF"
          fieldDescription="Número de identificão da Instituição Financeira no Sistema de Pagamentos Brasileiro"
          currentValue={'Mensagen de envio BMC0004'}
          required
          changeHandler={handleChange}
          values={'xxxxxxxx'}
        />
        <InputXsDecimal
          name="VlrTotCompraMN"
          fieldName="Valor Total Compra Moeda_Nacional"
          fieldDescription="Valor total das operações de compra de moeda estrangeira expresso em moeda nacional."
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
          fieldName="Data Movimento"
          fieldDescription="Data Movimento"
          currentValue={'2022-05-15'}
          required
          changeHandler={handleChange}
          values={'xxxxxxxx'}
        />
        <InputXsDateTime
          name="DtHrSit"
          fieldName="Data Hora Situação"
          fieldDescription="Data e hora da situação."
          currentValue={'2022-05-15 12:35'}
          required
          changeHandler={handleChange}
          values={'xxxxxxxx'}
        />
        <InputXsInteger
          name="NumRefSWIFTBMC"
          fieldName="Número Referência SWIFT BMC"
          fieldDescription="Número de referência da mensagem Swift da C�mara BMC."
          // fieldHelp="N�mero de refer�ncia da mensagem Swift. Formato = AADDDNNNNNN onde:AA - Ano; DDD - Data  Juliana; NNNNNN - N�mero seq�encial."
          currentValue={'22123000001'}
          totalDigits="11"
          required
          changeHandler={handleChange}
          values={'xxxxxxxx'}
        />
        {/* <Grupo_BMC0004_OpContrd> */}
        {/* <CodMoeda>176</CodMoeda> */}
        {/* <DtLiquid>2022-08-13</DtLiquid> */}
        {/* <Grupo_BMC0004_OpInterbanc> */}
        {/* <NumCtrlBMCContrd>12345678</NumCtrlBMCContrd> */}
        {/* <VlrMN>10</VlrMN> */}
        {/* <VlrME>10</VlrME> */}
        {/* <TaxCam>10</TaxCam> */}
        {/* <ISPBIFCtrapart>12345678</ISPBIFCtrapart> */}
        {/* <TpOpCAM>1</TpOpCAM> */}
        {/* </Grupo_BMC0004_OpInterbanc> */}
        {/* <VlrTotCompraMN>10</VlrTotCompraMN> */}
        {/* <VlrTotCompraME>10</VlrTotCompraME> */}
        {/* <VlrTotVendaMN>10</VlrTotVendaMN> */}
        {/* <VlrTotVendaME>10</VlrTotVendaME> */}
        {/* </Grupo_BMC0004_OpContrd> */}
        {/* <DtMovto>2022-08-13</DtMovto> */}
      </Message>
    </SISMSG>
  </>
)

// eslint-disable-next-line no-unused-vars
const staticUsermsg = (
  <USERMSG name="USERMSG - Segmento do Usuário">
    <h1></h1>
  </USERMSG>
)

const doc = {
  name: 'DOC',
  type: 'DOCComplexType',
  anotation: {
    documentation: {
      InfEvento: {
        Evento:
          'BMC0253 - IF requisita Utilização de moeda depositada em garantias para pagamento de saldo devedor',
        Descricao:
          'Destinado à IF requisitar a utilização de moeda depositada em garantias para pagamento de saldo devedor.',
        TipoFluxo: 'Fluxo1',
      },
    },
  },
  complexType: {
    name: 'DOCComplexType',
    sequence: [
      {
        name: 'BCMSG',
        type: 'BCMSGComplexType',
        complexType: {
          sequence: [
            {
              name: 'IdentdEmissor',
              type: 'ISPB',
              NomeCampo: 'IdentdEmissor  ??????????',
              DescricaoCampo:
                'Identificador da IF e Câmara junto ao Banco Central para o Sistema de Pagamentos Brasileiro.',
              restriction: {
                minLength: 8,
                maxLength: 8,
                pattern: '[0-9]{8}',
              },
            },
            {
              name: 'IdentdDestinatario',
              type: 'ISPB',
              NomeCampo: 'IdentdDestinatario ??????',
              DescricaoCampo:
                'Identificador da IF e Câmara junto ao Banco Central para o Sistema de Pagamentos Brasileiro.',
              restriction: {
                minLength: 8,
                maxLength: 8,
                pattern: '[0-9]{8}',
              },
            },
            {
              name: 'IdentdContg',
              type: 'ISPB',
              minOccurs: 0,
              NomeCampo: 'IdentdContg ??????',
              DescricaoCampo:
                'Identificador da IF e Câmara junto ao Banco Central para o Sistema de Pagamentos Brasileiro.',
              restriction: {
                minLength: 8,
                maxLength: 8,
                pattern: '[0-9]{8}',
              },
            },
            {
              name: 'IdentdOperad',
              type: 'IdentdOperad',
              minOccurs: 0,
              NomeCampo: 'IdentdOperad ??????',
              DescricaoCampo: 'Identificador pessoal do operador',
              base: 'xs:string',
              restriction: {
                maxLength: 32,
              },
            },
            {
              name: 'IdentdOperadConfc',
              type: 'IdentdOperad',
              minOccurs: 0,
              NomeCampo: 'IdentdOperadConfc ??????',
              DescricaoCampo: 'Identificador pessoal do operador.',
              base: 'xs:string',
              restriction: {
                maxLength: 32,
              },
            },
            {
              name: 'Grupo_Seq',
              type: 'Grupo_SeqComplexType',
              minOccurs: 0,
              complexType: {
                sequence: [
                  {
                    name: 'NumSeq',
                    type: 'NumSeq',
                    NomeCampo: 'NumSeq  ??????????',
                    DescricaoCampo:
                      'Número Sequencial que indica a ordem das mensagens particionadas.',
                    restriction: {
                      minLength: 8,
                      maxLength: 8,
                      pattern: '[0-9]{8}',
                    },
                  },
                  {
                    name: 'IndrCont',
                    type: 'Indr',
                    NomeCampo: 'IndrCont  ??????????',
                    DescricaoCampo:
                      'Número Sequencial que indica a ordem das mensagens particionadas.',
                    restriction: {
                      minLength: 8,
                      maxLength: 8,
                      pattern: '[0-9]{8}',
                    },
                  },
                ],
              },
            },
            {
              name: 'DomSist',
              type: 'DomSist',
              NomeCampo: 'DomSist ??????',
              DescricaoCampo: 'Domínio de sistema',
              base: 'xs:string',
              restriction: {
                minLength: 5,
                maxLength: 5,
              },
            },
            {
              name: 'NUOp',
              type: 'NUOp',
              NomeCampo: 'NUOp ??????',
              DescricaoCampo:
                'Número único da operação. Formato: para o Domínio de Sistema SPB02 = XXXXXXXXAAMMDDSSSSSSSSS em que XXXXXXXX - ISPB; AAMMDD - data; SSSSSSSSS - sequencial. Para os demais domínios de sistema = XXXXXXXXAAAAMMDDSSSSSSS em que XXXXXXXX - ISPB ou CNPJ de 8 posições; AAAAMMDD - data; SSSSSSS - sequencial.',
              base: 'xs:string',
              restriction: {
                minLength: 23,
                maxLength: 23,
                pattern: '[0-9]{23}',
              },
            },
          ],
        },
      },
      {
        name: 'SISMSG',
        type: 'SISMSGComplexType',
        complexType: {
          choise: [
            {
              name: 'BMC0253',
              type: 'BMC0253ComplexType',
              anotation: {
                documentation: {
                  InfMensagem: {
                    Mensagem:
                      'Requisição de Utilização de moeda depositada em garantias para pagamento de saldo devedor',
                    Emissor: 'IF',
                    Destinatario: 'Câmara BMC',
                  },
                },
              },
              complexType: {
                sequence: [
                  {
                    element: 'field',
                    name: 'CodMsg',
                    type: 'xs:string',
                    fixed: 'BMC0253',
                    NomeCampo: 'Código Mensagem',
                    DescricaoCampo:
                      'Código da mensagem do sistema associado ao evento.',
                  },
                  {
                    element: 'field',
                    name: 'NumCtrlIF',
                    type: 'ControleIF',
                    NomeCampo: 'Número Controle IF',
                    DescricaoCampo: 'Número de controleda IF',
                  },
                  {
                    element: 'field',
                    name: 'ISPBIF',
                    type: 'ISPB',
                    NomeCampo: 'ISPB IF',
                    DescricaoCampo:
                      'Número de identificação da Instituição Financeira no Sistema de Pagamentos Brasileiro',
                  },
                  {
                    element: 'complexType',
                    name: 'Grupo_BMC0253_MoedaDepositada',
                    type: 'complexType',
                    NomeCampo: 'Grupo Moeda Depositada',
                    complexType: {
                      sequence: [
                        {
                          name: 'DtLiquid',
                          type: 'xs:date',
                          NomeCampo: 'Data Liquidação',
                          DescricaoCampo:
                            'Data de liquidação de uma operação a termo',
                        },
                        {
                          name: 'CodMoedaSldDevdr',
                          type: 'CodMoeda',
                          NomeCampo: 'Código Moeda Saldo Devedor',
                          DescricaoCampo:
                            'Código de identificação da moeda, padrão utilizado pelo BACEN, conforme CNC, Cap�tulo 2, Título 22.',
                          base: 'xs:integer',
                          restriction: {
                            totalDigits: 3,
                          },
                        },
                        {
                          name: 'CodMoeda',
                          type: 'CodMoeda',
                          NomeCampo: 'Código Moeda',
                          DescricaoCampo:
                            'Código de identificao da moeda, padrão utilizado pelo BACEN, conforme  CNC, Capítulo 2, T�tulo 22.',
                        },
                        {
                          name: 'VlrTot',
                          type: 'Valor',
                          NomeCampo: 'Valor Total',
                          DescricaoCampo: 'Valor total para liquidação',
                        },
                      ],
                    },
                  },
                  {
                    element: 'field',
                    name: 'DtMovto',
                    type: 'complexType',
                    NomeCampo: 'DtMovto',
                    DescricaoCampo: 'Data de movimento.',
                  },
                ],
              },
            },
            {
              name: 'BMC0253R1',
              type: 'BMC0253R1ComplexType',
              anotation: {
                documentation: {
                  InfMensagem: {
                    Mensagem:
                      'Resposta ao Requisitante de Utilização de moeda depositada em garantias para pagamento de saldo devedor',
                    Emissor: 'Câmara BMC',
                    Destinatario: 'IF',
                  },
                },
              },
              complexType: {},
            },
          ],
        },
      },
      {
        name: 'USERMSG',
        type: 'USERMSGSimpleType',
        base: 'xs:string',
        minOccurs: 0,
        maxLength: 1048576,
        description: 'Segmento do Usuário',
      },
    ],
  },
}

export function MessagesSTR() {
  // const [bcmsg, setBcmsg] = useState<ReactNode | null>(null)
  // const [sysmsg, setSysmsg] = useState<ReactNode | null>(null)
  // const [usermsg, setUsermsg] = useState<ReactNode | null>(null)

  const [elementReact, setElementReact] = useState<ReactNode>(null)

  const isObject = (value: any) => {
    return !!(value && typeof value === 'object')
  }
  const isArray = (value: any) => {
    return !!(value && Array.isArray(value))
  }

  const loadDoc = async (
    object: any,
    elementDocRoot: ReactNode | null = null,
    parentElementRoot: string = 'DOC'
  ): Promise<ReactNode | null> => {
    const elementChild: ReactNode[] = []
    const elementDoc: ReactNode = null
    let elementAttributes: object[] = []
    let parentElement: string = ''

    // console.log(`---------------------- loadDoc -----------------------`)
    // console.log(`Entrada object`)
    // console.log(object)
    // console.log(`Entrada elementDocRoot`)
    // console.log(elementDocRoot)
    // console.log(`Entrada parentElementRoot`)
    // console.log(parentElementRoot)
    // console.log(`parentElement foraloop: ${parentElement} item ${object}`)
    // console.log(object)
    parentElement = parentElementRoot
    for (const item in object) {
      switch (item) {
        case 'element': {
          parentElement = object[item]

          break
        }
        case 'complexType': {
          parentElement = item
          break
        }
        case 'sequence': {
          parentElement = item
          break
        }
      }

      if (typeof object[item] === 'string') {
        elementAttributes = [...elementAttributes, { [item]: object[item] }]
        // console.log(
        //   `---------------------- typeof object[item] === 'string' -----------------------`
        // )
        // console.log(`${item}: ${object[item]}`)
        // elementChild = loadDoc(object[item], elementDoc, parentElement)
      }

      if (isObject(object[item])) {
        // parentElement = object[item]
        // console.log(
        //   `---------------------- isObject(object[item] -----------------------`
        // )
        // console.log(parentElement)
        // console.log(parentElement)

        elementChild[elementChild.length] = await loadDoc(
          object[item],
          elementDoc,
          parentElement
        )
      }

      if (isArray(object[item])) {
        // parentElement = object[item]
        //  console.log(
        //    `---------------------- isArray(object[item]) -----------------------`
        //  )

        elementChild[elementChild.length] = await loadDoc(
          object[item],
          elementDoc,
          parentElement
        )
      }
      // console.log(
      //   `typeof item: ${typeof item}, item: ${item}, object[item]: ${
      //     object[item]
      //   }, typeof object[item]: ${typeof object[
      //     item
      //   ]}  parentElement: ${parentElement}  parentElementRoot: ${parentElementRoot}`
      // )
    }

    // console.log(`---------------------- final element -----------------------`)

    // elementDoc = createElement(
    //   element.toUpperCase(),
    //   elementAttributes,
    //   elementChild !== [] && elementChild
    // )
    // console.log(`elementDoc`)
    // console.log(elementDoc)

    console.log(
      `======> parentElementRoot: ${parentElementRoot} - parentElement: ${parentElement} `
    )

    // console.log(`elementAttributes`)
    // console.log(elementAttributes)
    // console.log(`elementChild`)
    // console.log(elementChild)

    // console.log(`---------------------- final element -----------------------`)
    return elementDoc
  }

  // const modelo = (
  //   <DOC
  //     name="DOC"
  //     type="DOCComplexType"
  //     description="Documento SPB"
  //     InfEvento={{
  //       Evento:
  //         'BMC0253 - IF requisita Utilização de moeda depositada em garantias para pagamento de saldo devedor',
  //       Descricao:
  //         'Destinado à IF requisitar a utilização de moeda depositada em garantias para pagamento de saldo devedor.',
  //       TipoFluxo: 'Fluxo1',
  //     }}
  //   >
  //     <BCMSG name="BCMSG - Segmento de Controle"></BCMSG>
  //     <SISMSG name="SISMSG - Segmento do Sistema">
  //       <DropDownField
  //         name="drop"
  //         fieldName="drop escolha IF"
  //         fieldDescription="xxxxxx"
  //         values={[
  //           { value: 'BMC0004', label: 'Mensagen de envio BMC0004' },
  //           { value: 'BMC0004R1', label: 'Mensagen de envio BMC0004R1' },
  //         ]}
  //         currentValue={'BMC0004'}
  //         required
  //         changeHandler={handleChange}
  //       />
  //     </SISMSG>
  //     <USERMSG name="USERMSG - Segmento do Usuário">
  //       <h1></h1>
  //     </USERMSG>
  //   </DOC>
  // )

  useEffect(() => {
    const testeElement = loadDoc(doc)
    setElementReact(testeElement)
  }, [elementReact, loadDoc])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    // setValues(event.target.value)
    console.log(`handleChange : ${event.target.name} - ${event.target.value}`)
  }

  return (
    <Container>
      <h1>conteudo</h1>
      {/* <form onSubmit={handleSubmit}> */}
      {/* {elementReact} */}
      {/* {bcmsg} */}
      {/* {sysmsg} */}
      {/* {usermsg} */}
      {/* <Button variant="secondary" type="submit" /> */}
      {/* </form> */}
    </Container>
  )
}
