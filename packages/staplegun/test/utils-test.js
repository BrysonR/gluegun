import test from 'ava'
import { isBlank, isNotString, thrower } from '../src/utils'

test('isBlank', t => {
  t.true(isBlank())
  t.true(isBlank(1))
  t.true(isBlank(true))
  t.true(isBlank(false))
  t.true(isBlank(null))
  t.true(isBlank(''))
  t.true(isBlank(' '))
  t.true(isBlank({}))
  t.true(isBlank([]))
  t.false(isBlank('s'))
})

test('isNotString', t => {
  t.true(isNotString())
  t.true(isNotString(1))
  t.true(isNotString(true))
  t.true(isNotString(false))
  t.true(isNotString(null))
  t.true(isNotString({}))
  t.true(isNotString([]))
  t.false(isNotString(''))
  t.false(isNotString('s'))
})

test('thrower', t => {
  t.throws(() => thrower('hi'), Error, 'hi')
})
