import { Component, Input, OnInit } from '@angular/core';
import { FundService } from '../fund.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [FundService]
})
export class EditComponent implements OnInit {
  @Input() selectedFund;
  constructor(private fundService: FundService) { }

  ngOnInit() {

  }

}
