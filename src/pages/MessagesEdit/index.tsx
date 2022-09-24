import { InputSubmit, MessagesEditContainer, Pre } from './styles';
import { useContext, useState } from 'react';
import { MessagesContext } from '../../contexts/MessagesContext';
import { useForm, FormProvider } from 'react-hook-form';
import XMLViewer from 'react-xml-viewer';
import { toast } from 'react-toastify';
// import { DevTool } from '@hookform/devtools';

export function MessagesEdit() {
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
    setResultForm(data);
    setResultXml(await transformToXML(data));
    const result: object = await validateXML();
    toast.info(JSON.stringify(result));
  };

  return (
    <MessagesEditContainer>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {messageComponent}
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
