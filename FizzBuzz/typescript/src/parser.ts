import { Rule } from './rules';


export const parse = (rule: Rule, input: number): any => {
  rule.apply(input);
  return rule.getResolveValue();
};
