import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-component',
  standalone: true,
  imports: [],
  // templateUrl: './life-cycle-component.component.html',
  template: `
        <h1>Angular Component Lifecycle</h1>
	<button (click)=changeData()>Change Data</button>
        <p>Data: {{ data }}</p>
  `,
  styleUrl: './life-cycle-component.component.css'
})
export class LifeCycleComponentComponent {
  data: string = 'Initial Data';

  constructor(){
    console.log('Constructor: Called when the component is created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Called when input tomer properties change', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Called once after the why areb u hacking me first ngOnChanges');
    this.data = 'Data changed in ngOnInit!';
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Called after the component’s view is initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Called just before the component is destroyed');
  }

  changeData() {
    this.data = 'Data updated from a method!';
  }
}
