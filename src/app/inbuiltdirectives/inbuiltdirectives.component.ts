import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltdirectives',
  templateUrl: './inbuiltdirectives.component.html',
  styleUrls: ['./inbuiltdirectives.component.css']
})
export class InbuiltdirectivesComponent implements OnInit {
  ngdir1=true
  arr1=[1,2]
  constructor() { }

  ngOnInit(): void {
  }
  getColor(){
    return "green"
  }
}
