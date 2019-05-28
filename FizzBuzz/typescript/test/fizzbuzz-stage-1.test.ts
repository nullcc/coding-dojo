import 'jest';
import * as _ from 'lodash';
import { parse } from '../src/parser';
import { RuleType } from '../src/enums';
import { DividableByNumberRule, EchoRule, Rule } from '../src/rules';
import { getExpectedValueForStage1 } from './helper';


const dividableByThreeRule = new DividableByNumberRule(
  RuleType.AND,
  3,
  true,
  []
);

const fizzRule = new Rule(
  RuleType.OR,
  null,
  'Fizz',
  [dividableByThreeRule]
);

const dividableByFiveRule = new DividableByNumberRule(
  RuleType.AND,
  5,
  null,
  []
);

const buzzRule = new Rule(
  RuleType.OR,
  null,
  'Buzz',
  [dividableByFiveRule]
);

const fizzBuzzRule = new Rule(
  RuleType.AND,
  null,
  'FizzBuzz',
  [fizzRule, buzzRule],
);

const echoRule = new EchoRule(
  RuleType.AND,
  null,
  null,
  []
);

const myRule = new Rule(
  RuleType.SERIAL,
  null,
  null,
  [fizzBuzzRule, fizzRule, buzzRule, echoRule],
);

describe('Test fizz buzz stage 1.', () => {
  test('Should output 1 when given 1.', () => {
    const output = parse(myRule, 1);
    expect(output).toEqual(1);
  });

  test('Should output 2 when given 2.', () => {
    const output = parse(myRule, 2);
    expect(output).toEqual(2);
  });

  test('Should output \'Fizz\' when given 3.', () => {
    const output = parse(myRule, 3);
    expect(output).toEqual('Fizz');
  });

  test('Should output 4 when given 4.', () => {
    const output = parse(myRule, 4);
    expect(output).toEqual(4);
  });

  test('Should output \'Buzz\' when given 5.', () => {
    const output = parse(myRule, 5);
    expect(output).toEqual('Buzz');
  });

  test('Should output \'Fizz\' when given 6.', () => {
    const output = parse(myRule, 6);
    expect(output).toEqual('Fizz');
  });

  test('Should output 7 when given 7.', () => {
    const output = parse(myRule, 7);
    expect(output).toEqual(7);
  });

  test('Should output 8 when given 8.', () => {
    const output = parse(myRule, 8);
    expect(output).toEqual(8);
  });

  test('Should output 9 when given 9.', () => {
    const output = parse(myRule, 9);
    expect(output).toEqual('Fizz');
  });

  test('Should output \'Buzz\' when given 10.', () => {
    const output = parse(myRule, 10);
    expect(output).toEqual('Buzz');
  });

  test('Should output 11 when given 11.', () => {
    const output = parse(myRule, 11);
    expect(output).toEqual(11);
  });

  test('Should output \'Fizz\' when given 12.', () => {
    const output = parse(myRule, 12);
    expect(output).toEqual('Fizz');
  });

  test('Should output 13 when given 13.', () => {
    const output = parse(myRule, 13);
    expect(output).toEqual(13);
  });

  test('Should output 14 when given 14.', () => {
    const output = parse(myRule, 14);
    expect(output).toEqual(14);
  });

  test('Should output \'FizzBuzz\' when given 15.', () => {
    const output = parse(myRule, 15);
    expect(output).toEqual('FizzBuzz');
  });

  test('Should verify output when given 1 - 100.', () => {
    _.range(1, 101).forEach(input => {
      const output = parse(myRule, input);
      const expectedOutput = getExpectedValueForStage1(input);
      expect(output).toEqual(expectedOutput);
    });
  });
});
