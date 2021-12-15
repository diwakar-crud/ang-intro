import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-application-intro',
  templateUrl: './application-intro.component.html',
  styleUrls: ['./application-intro.component.scss']
})
export class ApplicationIntroComponent implements OnInit {
  @Input() data = '';
  @Output() childData = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(){
    this.childData.emit('The child triggered an event');
  }

}
