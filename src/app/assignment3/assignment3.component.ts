import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  status=false;
  count=[0]
  i=0
  x=1
  countStatus=false
 
  constructor() { }

  ngOnInit(): void {
    this.status=false;
  }
  onClick(event:any){
    this.countStatus=true
    this.status=true
   
    this.count[this.i]=this.x
    this.i=this.i+1
    this.x=this.x+1
    console.log(this.status)
   console.log(event)
    setTimeout(() => {
      this.ngOnInit()
    }, 200);
   
  }
 
}
