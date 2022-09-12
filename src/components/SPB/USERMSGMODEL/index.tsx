import { Info } from 'phosphor-react';
import { USERMSGContainer, Button, Em, Input, Label, Span } from './styles';
import { MouseEvent, useState } from 'react';

import { ErrorMessage } from '@hookform/error-message';
import { toast } from 'react-toastify';
import { ConnectForm } from '../../../contexts/ConnectForm';
import { FormValues } from '../../../pages/MessagesForm';

interface USERMSGProps {
  name?: string;
  type?: string;
  description?: string;
  childRef?: string;
  base?: string;
  tagRef?: string;
  xmlStack: any;
  minOccurs?: number;
  maxLength: number;
}

export function USERMSGMODEL(props: USERMSGProps) {
  const [isFieldHelp, setIsFieldHelp] = useState(false);
  const xmlStackLocal = props.xmlStack;

  function handleFieldHelp(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    function expireFieldHelp() {
      setIsFieldHelp(false);
    }
    setTimeout(expireFieldHelp, 4000);
    setIsFieldHelp(true);
  }

  return (
    <USERMSGContainer>
      <Label htmlFor={props.name}>
        <Button
          type="button"
          onClick={handleFieldHelp}
          title="Informação do campo"
        >
          <Info size={20} />
        </Button>
        <Span>
          <a tabIndex={-1}>{props.name}</a>
        </Span>
        <Em isFieldHelp={isFieldHelp}>{props.description}</Em>
      </Label>
      <ConnectForm<FormValues>>
        {({ register, formState: { errors } }) => (
          <>
            <Input
              type="text"
              {...register(xmlStackLocal, {
                maxLength: {
                  value: props.maxLength,
                  message: `Tamanho maximo do campo excedido - limite: ${props.maxLength}`,
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name={props.xmlStack}
              render={({ message }) => message && <p>{message}</p>}
            />
          </>
        )}
      </ConnectForm>
    </USERMSGContainer>
  );
}
//     required: 'Este campo é obrigatório',
//     pattern: {
//       value: /d+/,
//       message: 'Esta entrada tem que ser numerica',
//     },
//     maxLength: {
//       value: 10,
//       message: 'A entrada não pode exceder a 10 caracteres',
//     },
//   })}
// />
