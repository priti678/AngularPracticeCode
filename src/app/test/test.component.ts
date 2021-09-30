import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-test', use as a tag in html
  // selector: 'app-test', use as a class name in html 
  selector:'[app-test]',
  // templateUrl: './test.component.html',
  template: `
  <h1 style="color: black;">string interpolation start (see test.component.ts file)</h1>
  <div>welcome {{name}}</div>
    <h2>{{2+2}}</h2>
    <h2>{{"welcome " + name}}</h2>    
    <h1>{{name.length}}</h1>
    <h1>{{name.toUpperCase()}}</h1>
    <h1>{{greetUser()}}</h1>
    <h1>{{SiteURL}}</h1>
    <h1 style="color: black;">string interpolation end</h1>
    `,   
  // styleUrls: ['./test.component.css']
  styles:[`
    *{
      color: red;
      font-size: 20px;
      background-color:powderblue;
    }
  `]
})
export class TestComponent implements OnInit {
    public name ="priti gupta"
    public SiteURL = window.location.href;
  constructor() { }

  ngOnInit(): void {

  }
      greetUser(){
        return "hello " + this.name;
      }
}
