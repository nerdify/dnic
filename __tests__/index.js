import test from 'ava';

import dnic, {dnicWithDateValidation} from '../src';

const VALID_DNI = '001-280592-0025N';
const INVALID_DATE = '001-310292-0000N';

test('should pass a valid dni', t => {
  t.true(dnic(VALID_DNI));
});

test('valid dni (date)', t => {
  t.true(dnicWithDateValidation(VALID_DNI));
});

test('valid a wrong date', t => {
  t.false(dnicWithDateValidation(INVALID_DATE));
});
