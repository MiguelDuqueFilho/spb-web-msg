import { MessagesEditContainer, Pre } from './styles';
import { useContext, useState } from 'react';
import { MessagesContext } from '../../contexts/MessagesContext';
// import { FormProvider, useFormContext } from 'react-hook-form';GEN000

export function MessagesEdit() {
  const [value, setValue] = useState({});
  const { messageComponent } = useContext(MessagesContext);
  // const { handleSubmit } = useFormContext();

  return (
    <MessagesEditContainer>
      {/* <FormProvider>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            setValue(data);
          })}
        > */}
      {messageComponent}
      {/* </form>
      </FormProvider>
      <Pre>{JSON.stringify(value, null, 2)}</Pre> */}
    </MessagesEditContainer>
  );
}
