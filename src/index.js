import {municipalities} from './municipalities';
import {validateDate} from './utils';

const dnic = dni => {
  if (!dni) {
    return false;
  }

  const regex = /^([0-6][\d]{2})-([0-2][\d]|3[0-1])(0[1-9]|1[0-2])([\d]{2})-([\d]{4}[A-X])$/;

  return regex.test(dni);
};

export {dnic as default};

/**
 *
 * @param {*} dni
 */
export const dnicWithDateValidation = dni => {
  if (!dnic(dni)) {
    return false;
  }

  const date = dni.split('-')[1];
  const day = date.slice(0, 2);
  const month = date.slice(2, 4);
  const year = date.slice(4, 6);

  return validateDate(day, month, year);
};

/**
 * Get the regions from dni
 * @param {*} dni
 */
export const getRegionFromDni = dni => {
  if (!dnic(dni)) {
    return false;
  }

  const region = dni.split('-')[0];
  const foundRegion = municipalities.find(r => r[region]);

  return foundRegion[region];
};
