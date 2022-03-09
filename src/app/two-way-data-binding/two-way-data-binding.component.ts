import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {
  twoWayDataBinding="two way binding"
  constructor() { }

  ngOnInit(): void {
  }
  twoWayDataBindingfun(event:any){
    this.twoWayDataBinding=this.twoWayDataBinding+event.data
  }
}
