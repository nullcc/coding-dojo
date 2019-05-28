import { IValidation } from './interfaces';


export class DividableByNumberValidation implements IValidation {
  private divisor: number;

  constructor(divisor: number) {
    this.divisor = divisor;
  }

  apply(input: number): boolean {
    return input % this.divisor === 0;
  }
}

export class ContainsNumberValidation implements IValidation {
  private factor: number;

  constructor(factor: number) {
    this.factor = factor;
  }

  apply(input: number): boolean {
    return input.toString().includes(this.factor.toString());
  }
}
