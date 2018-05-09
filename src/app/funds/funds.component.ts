import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund.model';
import { Router } from '@angular/router';
import { FundService } from '../fund.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css'],
  providers: [FundService]
})

export class FundsComponent implements OnInit {
  funds: FirebaseListObservable<any[]>;

  goToFund(clickedFund) {
    this.router.navigate(['funds', clickedFund.$key]);
  };

  constructor(private router: Router, private fundService: FundService) { }

  ngOnInit() {
    this.funds = this.fundService.getFunds();
  }

}
