import { InputSubmit, MessagesEditContainer, Pre } from './styles';
import { useContext, useState } from 'react';
import { MessagesContext } from '../../contexts/MessagesContext';
import { useForm, FormProvider } from 'react-hook-form';
import XMLViewer from 'react-xml-viewer';
import { toast } from 'react-toastify';
// import { DevTool } from '@hookform/devtools';

export function MessagesForm() {
  const [resultForm, setResultForm] = useState({});
  const [resultXml, setResultXml] = useState('');
  const { messageComponent, transformToXML, validateXML } =
    useContext(MessagesContext);

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    shouldUnregister: true,
    shouldUseNativeValidation: false,
    delayError: 500,
  });

  const customTheme = {
    attributeKeyColor: '#aaa',
    attributeValueColor: 'white',
    tagColor: 'pink',
    textColor: 'yellow',
    separatorColor: '#fff',
    cdataColor: 'green',
  };

  const onSubmit = async (data: any): Promise<void> => {
    const codMsg = messageComponent ? messageComponent.codMsg : '';

    if (codMsg !== '') {
      const result: object = await validateXML(codMsg, data);
      setResultForm(data);
      setResultXml(await transformToXML(data));
      toast.info(JSON.stringify(result));
    } else {
      toast.warn(`mensagem não carregada.`);
    }
  };

  return (
    <MessagesEditContainer>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {messageComponent?.msgComponent}
          <InputSubmit type="submit" />
        </form>
      </FormProvider>
      <Pre>{JSON.stringify(resultForm, null, 2)}</Pre>
      <Pre>
        <XMLViewer xml={resultXml} theme={customTheme} />
      </Pre>
      {/* <DevTool control={methods.control} /> */}
    </MessagesEditContainer>
  );
}
