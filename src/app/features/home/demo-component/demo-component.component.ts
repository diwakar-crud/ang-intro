import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.scss']
})
export class DemoComponentComponent implements OnInit {

  @Input() data : any
  @Output() childData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(){
    this.childData.emit("hello from child")
  }

}
