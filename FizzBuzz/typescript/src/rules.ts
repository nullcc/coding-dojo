import * as _ from 'lodash';
import { RuleType } from './enums';
import {
  DividableByNumberValidation,
  ContainsNumberValidation,
} from './validations';


export class Rule {
  protected type: RuleType;
  protected parameter: number;
  protected resolvedValue: any;
  protected subRules: Rule[];

  constructor(type: RuleType, parameter: number, resolvedValue: any, subRules: Rule[]) {
    this.type = type;
    this.parameter = parameter;
    this.resolvedValue = resolvedValue;
    this.subRules = subRules;
  }

  apply(input: number): boolean {
    switch (this.type) {
      case RuleType.AND:
        return _.every(this.subRules, subRule => {
          return subRule.apply(input);
        });
      case RuleType.OR:
        return _.some(this.subRules, subRule => {
          return subRule.apply(input);
        });
      case RuleType.SERIAL:
        return this.applySubRulesUntilPassed(input);
      default:
        throw new Error(`Unknown rule type: ${this.type}.`);
    }
  }

  applySubRulesUntilPassed(input: number): boolean {
    if (this.subRules.length === 0) {
      return true;
    }
    for (const subRule of this.subRules) {
      const res = subRule.apply(input);
      if (res) {
        this.resolvedValue = subRule.resolvedValue;
        return res;
      }
    }
    return false;
  }

  getResolveValue(): any {
    return this.resolvedValue;
  }
}

export class DividableByNumberRule extends Rule {
  constructor(type: RuleType, parameter: number, resolvedValue: any, subRules: Rule[]) {
    super(type, parameter, resolvedValue, subRules);
  }

  apply(input: number): boolean {
    const dividableByNumberValidation = new DividableByNumberValidation(this.parameter);
    return dividableByNumberValidation.apply(input);
  }
}

export class ContainsNumberRule extends Rule {
  constructor(type: RuleType, parameter: number, resolvedValue: any, subRules: Rule[]) {
    super(type, parameter, resolvedValue, subRules);
  }

  apply(input: number): boolean {
    const containsNumberValidation = new ContainsNumberValidation(this.parameter);
    return containsNumberValidation.apply(input);
  }
}

export class EchoRule extends Rule {
  constructor(type: RuleType, parameter: number, resolvedValue: any, subRules: Rule[]) {
    super(type, parameter, resolvedValue, subRules);
  }

  apply(input: number): boolean {
    this.resolvedValue = input;
    return true;
  }
}
