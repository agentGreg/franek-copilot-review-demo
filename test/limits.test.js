import test from 'node:test';
import assert from 'node:assert/strict';
import { exceeded, remaining } from '../src/limits.js';

test('wykorzystanie poniżej limitu', () => assert.equal(exceeded(6000, 10000), 0));
test('wykorzystanie ponad limitem', () => assert.equal(exceeded(11000, 10000), 1000));
test('równość nie jest przekroczeniem', () => assert.equal(exceeded(10000, 10000), 0));
test('brak limitu nie ogranicza wykorzystania', () => assert.equal(exceeded(11000, null), 0));

test('pozostała kwota poniżej limitu', () => assert.equal(remaining(6000, 10000), 4000));
test('po osiągnięciu limitu nic nie pozostaje', () => assert.equal(remaining(10000, 10000), 0));
test('przekroczenie nie daje ujemnej pozostałej kwoty', () => assert.equal(remaining(11000, 10000), 0));
test('bez limitu pozostała kwota jest nieokreślona', () => {
	assert.equal(remaining(11000, null), null);
	assert.equal(remaining(11000, undefined), null);
});
