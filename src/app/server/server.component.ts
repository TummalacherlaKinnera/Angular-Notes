import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    a:number=9;
    status:String="Offline";
    getServerStatus(){
        return this.status;
    }
}