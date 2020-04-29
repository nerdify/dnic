import {municipalities} from './municipalities';
import {isValidDate} from './utils';

/**
 * Basic Dni Validation
 *
 * @param {*} dni
 */
export const validate = dni => {
  if (!dni) {
    return false;
  }

  const regex = /^([0-6][\d]{2})-([0-2][\d]|3[0-1])(0[1-9]|1[0-2])([\d]{2})-([\d]{4}[A-X])$/;

  return regex.test(dni);
};

/**
 * Dni Validation with date validation
 * @param {*} dni
 */
export const validateDate = dni => {
  if (!validate(dni)) {
    return false;
  }

  const date = dni.split('-')[1];
  const day = date.slice(0, 2);
  const month = date.slice(2, 4);
  const year = date.slice(4, 6);

  return isValidDate(day, month, year);
};

/**
 * Get the regions from dni
 *
 * @param {*} dni
 */
export const getMunicipalities = dni => {
  if (!validate(dni)) {
    return false;
  }

  const region = dni.split('-')[0];
  const foundRegion = municipalities.find(r => r[region]);

  return foundRegion[region];
};

/**
 * Export default.
 */

const exportDefault = {
  isValid: dni => validate(dni),
  isValidDate: dni => validateDate(dni)
};

export {exportDefault as default};
