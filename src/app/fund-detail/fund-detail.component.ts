import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Fund } from '../fund.model';
import { FundService } from '../fund.service';

@Component({
  selector: 'app-fund-detail',
  templateUrl: './fund-detail.component.html',
  styleUrls: ['./fund-detail.component.css'],
  providers: [FundService]
})
export class FundDetailComponent implements OnInit {
  fundId: number;
  fundToDisplay: Fund;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fundService: FundService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.fundId = parseInt(urlParameters['id']);
    });
    this.fundToDisplay = this.fundService.getFundById(this.fundId);
  }

}
