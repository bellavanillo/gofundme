import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund.model';
import { FundService } from '../fund.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [FundService]
})
export class AddComponent implements OnInit {

  constructor(private fundService: FundService) { }

  ngOnInit() {
  }

  submitForm(name: string, location: string, title: string, imageUrl: string, description: string, goal: string, category: string) {
    let newFund: Fund = new Fund(name, location, title, imageUrl, description, goal, category);
    this.fundService.addFund(newFund);
  }

}
