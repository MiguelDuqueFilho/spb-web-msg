import { MouseEvent } from 'react';
import { Info, XSquare } from 'phosphor-react';
import { Span, Button, DescContainer, ButtonInfo, Label } from './styles';
import { toast } from 'react-toastify';

interface FieldLabelProps {
  name: string;
  xmlStack: string;
  type?: string;
  NomeCampo?: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  minOccurs?: number;
  maxOccurs?: string | number;

  sequence?: number;
  removeChild?: (sequence: number) => void;
}

export function FieldLabel(props: FieldLabelProps) {
  const options = {
    autoClose: 6000,
    type: toast.TYPE.INFO,
    hideProgressBar: false,
    position: toast.POSITION.TOP_RIGHT,
    pauseOnHover: true,
  };

  function handleFieldHelp(event: MouseEvent<HTMLButtonElement>) {
    toast.info(props.DescricaoCampo, options);
  }

  // function handleTypeHelp(event: MouseEvent<HTMLButtonElement>) {
  //   toast.info(props.DescricaoTipo, options);
  // }

  return (
    <>
      <Label>
        <DescContainer>
          {props.DescricaoCampo && (
            <Button
              tabIndex={-1}
              type="button"
              onClick={handleFieldHelp}
              title="Informação do campo"
            >
              <Info size={25} />
            </Button>
          )}
          {/* {props.DescricaoTipo && (
            <Button
              type="button"
              onClick={handleTypeHelp}
              title="regra do campo"
            >
              <DotsThreeCircle size={25} />
            </Button>
          )} */}
          <Span>{props.NomeCampo} </Span>
          {typeof props.removeChild !== 'undefined' &&
            typeof props.sequence !== 'undefined' && (
              <ButtonInfo
                type="button"
                onClick={() =>
                  typeof props.removeChild !== 'undefined' &&
                  props.removeChild(
                    typeof props.sequence !== 'undefined' ? props.sequence : 0
                  )
                }
              >
                <XSquare size={25} />
              </ButtonInfo>
            )}
        </DescContainer>
      </Label>
    </>
  );
}
