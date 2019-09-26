import test from 'ava';

import dnic from '../src';

const VALID_DNI = '001-280592-0025N';

test('shoud pass a valid dni', t => {
  t.true(dnic(VALID_DNI));
});
