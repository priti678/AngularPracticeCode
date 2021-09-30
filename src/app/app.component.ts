import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  getvalue(){
    alert("calling getvalue function")
  }
  name ="calling function getvaluefun"
  getvaluefun(value: any){
    alert(value)
  }
  MyEvent(val: any){
    alert(val)
  }
  MyEvent1(val: any){
    alert(val)
  }

  MyEvent2(val: any){
    alert(val)
  }
}
