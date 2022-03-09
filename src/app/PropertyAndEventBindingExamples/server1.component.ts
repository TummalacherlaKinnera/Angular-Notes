import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server1',
  templateUrl: './server1.component.html',
  styleUrls: ['./server1.component.css']
})
export class Server1Component implements OnInit {
  Status:Boolean=false;
  propertyBind:Boolean=false;
  eventbind="Event Bind not used"
  eventDataValue=""
  constructor() {

   }

  ngOnInit(): void {
  }
  EventBindFun(){
    this.eventbind="Event Bind Used"
    this.propertyBind=true;
  }
  passingEventVariable(eventVariable:any){
    console.log(eventVariable);
    console.log("=======")
    console.log(eventVariable.target.value)
  }
  inputEventWithParameter(event:any){
    console.log(event.data+"==is the value of event data==")
    this.eventDataValue=this.eventDataValue+event.data
  }


}
