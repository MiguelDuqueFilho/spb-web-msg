import { FormContainer, InputSubmit, MessageInput, Pre } from './styles';
import { useContext } from 'react';
import { MessagesContext } from '../../contexts/MessagesContext';
import { useForm } from 'react-hook-form';

// const newMessageFormValidationSchema = zod.object({
//   schema: zod.string().min(7, 'Informe a mensagem'),
// });

// type newMessageFormData = zod.infer<typeof newMessageFormValidationSchema>;

export function Messages() {
  const { message, getMessage } = useContext(MessagesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const { register } = useFormContext()

  // const newMessageForm = useForm<newMessageFormData>({
  //   resolver: zodResolver(newMessageFormValidationSchema),
  //   defaultValues: {
  //     codMsg: '',
  //   },
  // })

  // const { handleSubmit, watch, reset } = newMessageForm

  // function handleCreatenewMessage(data: newMessageFormData) {
  //   createnewMessage(data)
  //   reset()
  // }

  return (
    <FormContainer>
      <form
        onSubmit={handleSubmit((data) => {
          getMessage(data.codMsg);
        })}
      >
        <label htmlFor="codMsg">Schema da Mensagem a ser escolhida</label>
        <MessageInput
          id="codMsg"
          type="text"
          list="msg-suggestions"
          placeholder="Entre com a mensagem"
          {...register('codMsg', { required: true })}
        />
        {errors.codMsg?.type === 'required' &&
          'Código de mensagem é obrigatório'}
        <datalist id="msg-suggestions">
          <option value="GEN0001" />
          <option value="STR0008" />
          <option value="BMC0004" />
          <option value="BMC0253" />
        </datalist>
        <InputSubmit type="submit" value="enter" />
      </form>
      <Pre>{JSON.stringify(message, null, 2)}</Pre>
    </FormContainer>
  );
}
