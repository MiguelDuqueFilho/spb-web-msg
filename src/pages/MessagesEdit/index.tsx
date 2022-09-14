import { InputSubmit, MessagesEditContainer, Pre } from './styles';
import { useContext, useState } from 'react';
import { MessagesContext } from '../../contexts/MessagesContext';
import { useForm, FormProvider } from 'react-hook-form';

export function MessagesEdit() {
  const [resultForm, setResultForm] = useState({});
  const { messageComponent } = useContext(MessagesContext);

  const methods = useForm();

  const onSubmit = (data: any): void => setResultForm(data);

  return (
    <MessagesEditContainer>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {messageComponent}
          <InputSubmit type="submit" />
        </form>
      </FormProvider>
      <Pre>{JSON.stringify(resultForm, null, 2)}</Pre>
    </MessagesEditContainer>
  );
}
