import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wk11_thu_directive_http';
  items = [
    { title: "Explore the Docs", link: 'https://angular.io/docs' },
    { title: "Learn with Tutorials", link: 'https://angular.io/tutorial' },
    { title: "Start Building Apps", link: 'https://angular.io/start' },
    { title: "Reference the API", link: 'https://angular.io/api' },
    { title: "Angular DevTools", link: 'https://angular.io/devtools' },
  ];


  isAdmin = true
  dayNo = 1

 
}