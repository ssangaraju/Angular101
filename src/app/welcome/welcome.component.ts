import { Component, OnInit } from '@angular/core';
import { BeverageServiceService } from 'src/services/beverage-service.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public beverages = ["apple","mango", "banana"]
  constructor(private beverageService: BeverageServiceService) { }

  ngOnInit() {
    //this.beverageService.getBeverages()
     // .subscribe(data => this.beverages = data)
  }

}
