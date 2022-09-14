/**
 * isString
 * @param value
 * @returns boolean
 */
export const isObjectString = (value: any): boolean => {
  return !!(
    value && Object.prototype.toString.call(value) === '[object String]'
  );
};
/**
 * isObject
 * @param value
 * @returns boolean
 */
export const isObjectObject = (value: any): boolean => {
  return !!(
    value && Object.prototype.toString.call(value) === '[object Object]'
  );
};

/**
 * isArray
 * @param value
 * @returns boolean
 */
export const isObjectArray = (value: any): boolean => {
  return !!(
    value && Object.prototype.toString.call(value) === '[object Array]'
  );
};

export const checkInput = (props: any) => {
  let inputChecked = {};
  /**
   * check is readyOnly
   */
  if (typeof props.fixed !== 'undefined') {
    inputChecked = {
      ...inputChecked,
      readyOnly: {
        value: true,
      },
    };
  }
  /**
   * check is required
   */
  inputChecked = {
    ...inputChecked,
    required: {
      value: true,
      message: `${props.name} é obrigatório`,
    },
  };
  /**
   * check is minLenght
   */
  if (props.minLenght) {
    inputChecked = {
      ...inputChecked,
      minLenght: {
        value: props.minLenght,
        message: `${props.name} tamanho mínimo de ${props.minLenght} caracteres`,
      },
    };
  }
  /**
   * check is maxLenght
   */
  if (props.maxLength) {
    inputChecked = {
      ...inputChecked,
      maxLength: {
        value: props.maxLength,
        message: `${props.name} tamanho máximo de ${props.maxLength} caracteres`,
      },
    };
  }

  /**
   * check is minExclusive
   */
  if (props.min) {
    inputChecked = {
      ...inputChecked,
      min: {
        value: props.minExclusive,
        message: `${props.name} valor mínimo ${props.minExclusive}.`,
      },
    };
  }
  /**
   * check is min
   */
  if (props.max) {
    inputChecked = {
      ...inputChecked,
      max: {
        value: props.max,
        message: `${props.name} valor máximo ${props.max}.`,
      },
    };
  }
  /**
   * check is pattern
   */
  if (props.pattern) {
    inputChecked = {
      ...inputChecked,
      pattern: {
        value: props.pattern,
        message: `${props.name} deve respeitar o formato ${props.pattern}.`,
      },
    };
  }
  /**
   * check is minExclusive
   */
  if (props.minExclusive) {
    inputChecked = {
      ...inputChecked,
      minExclusive: {
        value: props.minExclusive,
        message: `${props.name} deve ter o valor mínimo de ${props.minExclusive}.`,
      },
    };
  }
  /**
   * check is maxExclusive
   */
  if (props.maxExclusive) {
    inputChecked = {
      ...inputChecked,
      maxExclusive: {
        value: props.maxExclusive,
        message: `${props.name} deve ter o valor máximo de ${props.minExclusive}.`,
      },
    };
  }
  /**
   * check is totalDigits
   */
  if (props.totalDigits) {
    inputChecked = {
      ...inputChecked,
      maxLength: {
        value: props.totalDigits,
        message: `${props.name} total de digitos deve ser  ${props.totalDigits}.`,
      },
      pattern: {
        value: `[0-9]{0,${props.totalDigits}}`,
        message: `${props.name} deve respeitar o formato ${props.pattern}.`,
      },
    };
  }

  return inputChecked;
};
