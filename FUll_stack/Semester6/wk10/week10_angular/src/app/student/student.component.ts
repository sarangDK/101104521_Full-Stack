import { DatePipe, LowerCasePipe, UpperCasePipe, JsonPipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [DatePipe, LowerCasePipe, UpperCasePipe, JsonPipe, CurrencyPipe, DecimalPipe],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  a = 100 // local 
  @Input("student") student:any
  
  leo = "https://media.istockphoto.com/id/1796374503/photo/the-lion-king.jpg?s=2048x2048&w=is&k=20&c=gynl-IH7JehDI1yIKLRww-y-OWFGyaEKKdwXAXKBUU0="
}
