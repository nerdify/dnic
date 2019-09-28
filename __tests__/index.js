import test from 'ava';

import dnic, {dnicWithDateValidation} from '../src';

const VALID_DNI = '001-280592-0025N';
const INVALID_DATE = '001-310292-0000N';

test('shoud pass a valid dni', t => {
  t.true(dnic(VALID_DNI));
});

test('validate date', t => {
  t.true(dnicWithDateValidation(VALID_DNI));
  t.false(dnicWithDateValidation(INVALID_DATE));
});
