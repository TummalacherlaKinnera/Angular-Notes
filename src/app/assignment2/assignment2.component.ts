import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  username:String=''
  status=false;
  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.username.length)
    if(this.username.length == 0){
      this.status=true;
      console.log("Hiiiiiiiiiiiiiiiiiiiiii")
    }
    else{
      this.status=false;
    }
  }
   onClick(){
    this.status=true;
    this.username=''
    this.ngOnInit()
  }
  GivingInput(){
    this.ngOnInit()
  }
}
