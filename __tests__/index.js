import test from 'ava';

import dnic, {validate, validateDate, getMunicipalities} from '../src';

const VALID_DNI = '001-280592-0025N';
const INVALID_DATE = '001-310292-0000N';

test('should pass a valid dni (default)', t => {
  t.true(dnic.isValid(VALID_DNI));
});

test('should pass a valid dni', t => {
  t.true(validate(VALID_DNI));
});

test('valid dni (date)', t => {
  t.true(validateDate(VALID_DNI));
});

test('valid a wrong date', t => {
  t.false(validateDate(INVALID_DATE));
});

test('valid municipalities (managua)', t => {
  t.is(getMunicipalities(VALID_DNI), 'Managua');
});
