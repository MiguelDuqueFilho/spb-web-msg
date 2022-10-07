import { InputSubmit, MessagesEditContainer, Pre } from './styles';
import { useContext, useState } from 'react';
import { MessagesContext } from '../../contexts/MessagesContext';
import { useForm, FormProvider } from 'react-hook-form';

import { toast } from 'react-toastify';

export function MessagesForm() {
  const { messageComponent, transformToXML, sendXML } =
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

  const onSubmit = async (data: any): Promise<void> => {
    const codMsg = messageComponent ? messageComponent.codMsg : '';

    if (codMsg !== '') {
      const result: object = await sendXML(codMsg, data);
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
    </MessagesEditContainer>
  );
}
