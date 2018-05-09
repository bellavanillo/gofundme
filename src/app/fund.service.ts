import { Injectable } from '@angular/core';
import { Fund } from './fund.model';
import { FUNDS } from './mock-funds';

@Injectable()
export class FundService {

  constructor() { }

  getFunds() {
    return FUNDS;
  }

  getFundById(fundId: number) {
    for (let i=0; i<=FUNDS.length - 1; i++) {
      if (FUNDS[i].id === fundId) {
        return FUNDS[i];
      }
    }
  }
}
