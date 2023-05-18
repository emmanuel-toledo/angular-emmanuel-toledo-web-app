import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './components/resume/resume.component';
import { ProfessionalWorkComponent } from './components/professional-work/professional-work.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    ResumeComponent,
    ProfessionalWorkComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class AboutModule { }
