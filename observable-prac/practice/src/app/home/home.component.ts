import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
    customObsSubsciption:Subscription;
  constructor() { }

  ngOnInit() {
    const myObservable=Observable.create((observer:Observer<string>)=>{
      setTimeout(()=>{
        observer.next('first package');
      },2000);
      setTimeout(()=>{
        observer.next('second pacakage');
      },4000);
      setTimeout(()=>{
        observer.complete();
      },5000);
      setTimeout(()=>{
        observer.next('third package');
      },6000);
    });
    this.customObsSubsciption=myObservable.subscribe((data:string)=>{
      console.log(data);
    },(error:string)=>{
      console.log(error);
    },()=>{
      console.log('completed');
    }
  );
  }
ngOnDestroy(){
  this.customObsSubsciption.unsubscribe();
}
}
