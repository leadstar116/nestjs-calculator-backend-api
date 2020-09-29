import { Injectable } from '@nestjs/common';
import Big from 'big.js';
import { Calculate } from './calculate.interface';

@Injectable()
export class CalculateService {
  static instance;

  static getInstance() {
    if(CalculateService.instance) return CalculateService.instance;
    CalculateService.instance = new CalculateService;
    return CalculateService.instance;
  }

  calculate(input: Calculate): string{
    const one = Big(input.total || "0");
    const two = Big(input.next || (input.operation === "÷" || input.operation === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
    if (input.operation === "+") {
      return one.plus(two).toString();
    }
    if (input.operation === "-") {
      return one.minus(two).toString();
    }
    if (input.operation === "x" || input.operation === "*") {
      return one.times(two).toString();
    }
    if (input.operation === "÷" || input.operation === "/") {
      if (two === "0") {
        alert("Divide by 0 error");
        return "0";
      } else {
        return one.div(two).toString();
      }
    }
    throw Error(`Unknown operation '${input.operation}'`);
  }

}
