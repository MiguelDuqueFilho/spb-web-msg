import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { Occurs } from '../Occurs';
import { InputXsInteger } from '../InputXsInteger';
import { InputXsDecimal } from '../InputXsDecimal';
import { InputXsDate } from '../InputXsDate';
import { InputXsDateTime } from '../InputXsDateTime';
import { InputXsString } from '../InputXsString';

interface InputXsBaseProps {
  choice?: boolean;
  name: string;
  type?: string;
  base?: string;
  NomeCampo: string;
  DescricaoCampo?: string;
  DescricaoTipo?: string;
  xmlStack: string;
  tagRef?: string;
  fixed?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  minOccurs?: number;
  maxOccurs?: string | number;
  totalDigits?: number;
  minExclusive?: bigint;
  maxExclusive?: bigint;
  fractionDigits?: number;

  sequence?: number;
  removeChild?: (sequence: number) => void;
}

/**
 * * important
 * Todo: refactor this function
 * ! important
 * ? maybe
 * @param props
 * @returns
 */
export function InputXsBase(props: InputXsBaseProps) {
  const [isChoice, SetIsChoice] = useState(true);
  const { unregister } = useFormContext();

  useEffect(() => {
    let choice = true;
    if (typeof props.choice === 'undefined') {
      choice = true;
    } else {
      choice = !!props.choice;
      if (!props.choice) {
        unregister(props.xmlStack);
      }
    }
    SetIsChoice(choice);
  }, [props.choice, unregister, props.xmlStack]);

  return (
    <>
      {isChoice && (
        <Occurs
          name={props.name}
          NomeCampo={props.NomeCampo}
          xmlStack={props.xmlStack}
          minOccurs={props.minOccurs}
          maxOccurs={props.maxOccurs}
        >
          {props.tagRef === 'InputXsString' && <InputXsString {...props} />}
          {props.tagRef === 'InputXsInteger' && <InputXsInteger {...props} />}
          {props.tagRef === 'InputXsDecimal' && <InputXsDecimal {...props} />}
          {props.tagRef === 'InputXsDate' && <InputXsDate {...props} />}
          {props.tagRef === 'InputXsDateTime' && <InputXsDateTime {...props} />}
        </Occurs>
      )}
    </>
  );
}
