import { InputSubmit, MessagesEditContainer, Pre } from './styles';
import { useContext, useState } from 'react';
import { MessagesContext } from '../../contexts/MessagesContext';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function MessagesForm() {
  const navigate = useNavigate();
  const { messageComponent, sendXML } = useContext(MessagesContext);

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
      const result: boolean = await sendXML(codMsg, data);

      if (result) {
        navigate('/messages');
        methods.reset();
      }
    }
  };

  return (
    <MessagesEditContainer>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {messageComponent?.msgComponent}
          <InputSubmit type="submit" value="Enviar Mensagem" />
        </form>
      </FormProvider>
    </MessagesEditContainer>
  );
}
