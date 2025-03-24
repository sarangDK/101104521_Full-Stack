import { Component } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { LifeCycleComponentComponent } from './life-cycle-component/life-cycle-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [StudentComponent, LifeCycleComponentComponent],
  // template: `<h1>Hello, Steven Park </h1>`,
  // styles: `h1{color:blue}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'week10 | Welcome to Angular Class';
  title: string;
  
  // Custome style
  myStyle = {
    color: 'blue',
    fontSize: 20
  }

  stud = {
    sid: 1,
    name : `Steven Park`,
    bdate: new Date(1998, 3, 2)
  }
  
  constructor() {
    this.title = `week10 | Welcome to Angular Class`;
  }

  sayHello() {
    console.log("Hello world");
  }

  handleButtonClick() {
    alert(`Who clicked me?`);
  }
}