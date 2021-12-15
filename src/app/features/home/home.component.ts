import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message = "hello Crud Operations"
  toChild = "hello child component"
  currentItem = 'Television';
  newData: any;
  Form: FormGroup | any
  name: any;
  dataFromChild: any;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.createForm()
    this.Form = this.formBuilder.group({
          name: ['12345'],
          gender: ''
        });
  }
//  createForm(){
//
//   this.formGroup.valueChanges.subscribe()
//  }

getValue(){
  console.log(this.Form)

}


  getClick(){
    this.message = "hello world"
  }

  getData(e : any){
    this.dataFromChild = e;
  }

  getInputValue(){
    console.log(this.name, 'name')
  }

  // getModelValue(e:any){
  //   console.log(this.name, 'name')
  // }

  parentWillTakeAction(data: any){
    this.newData = data;
  }

}
