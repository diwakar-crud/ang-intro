import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ApplicationIntroComponent } from './application-intro/application-intro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentComponent } from './demo-component/demo-component.component';


@NgModule({
  declarations: [
    HomeComponent,
    ApplicationIntroComponent,
    DemoComponentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
