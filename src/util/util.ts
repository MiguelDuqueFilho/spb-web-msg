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
