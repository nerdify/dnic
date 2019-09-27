import test from 'ava';

import dnic from '../src';

const VALID_DNI = '001-280592-0025N';
const INVALID_DATE = '001-310292-0000N';

test('shoud pass a valid dni', t => {
  t.true(dnic(VALID_DNI));
});

test('validate date', t => {
  t.true(VALID_DNI);
  t.true(INVALID_DATE);
});
