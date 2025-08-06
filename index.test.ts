// Node.js v18+
// usage : npx tsx --test index.test.ts
import test from 'node:test';
import assert from 'node:assert/strict';

import { mykadDOB } from "./index.ts";

test('mykadDOB return correct DOB', () => {
    assert.equal(mykadDOB("901030-55-1011"), '1990-10-30');
    assert.equal(mykadDOB("011030-55-1011"), '2001-10-30');
});

test('mykadDOB reject INVALID month and day', () => {
    assert.equal(mykadDOB("900015-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("901315-55-1011"), 'MYKAD INVALID');

    assert.equal(mykadDOB("900132-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("900230-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("900332-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("900431-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("900532-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("900631-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("900732-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("900832-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("900931-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("901032-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("901131-55-1011"), 'MYKAD INVALID');
    assert.equal(mykadDOB("901232-55-1011"), 'MYKAD INVALID');
});

