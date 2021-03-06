import { ApplicationIntroComponent } from './application-intro/application-intro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';

const routes: Routes = [{ path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
