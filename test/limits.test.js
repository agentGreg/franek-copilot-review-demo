import test from 'node:test';
import assert from 'node:assert/strict';
import { exceeded, remaining } from '../src/limits.js';

test('wykorzystanie poniżej limitu', () => assert.equal(exceeded(6000, 10000), 0));
test('wykorzystanie ponad limitem', () => assert.equal(exceeded(11000, 10000), 1000));
test('równość nie jest przekroczeniem', () => assert.equal(exceeded(10000, 10000), 0));
test('brak limitu nie ogranicza wykorzystania', () => assert.equal(exceeded(11000, null), 0));

test('pozostało poniżej limitu', () => assert.equal(remaining(3000, 10000), 7000));
test('nic nie zostaje po przekroczeniu', () => assert.equal(remaining(15000, 10000), 0));
test('limit zero nie zostawia nic', () => assert.equal(remaining(0, 0), 0));
test('brak limitu zostawia nieskończoność', () => assert.equal(remaining(5000, null), Infinity));
test('undefined to brak limitu', () => assert.equal(remaining(5000, undefined), Infinity));
