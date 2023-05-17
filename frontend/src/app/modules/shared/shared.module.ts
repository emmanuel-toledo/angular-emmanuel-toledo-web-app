import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderCardComponent } from './components/header-card/header-card.component';
import { DownloadButtonComponent } from './components/download-button/download-button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderCardComponent,
    DownloadButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeaderCardComponent,
    DownloadButtonComponent
  ]
})
export class SharedModule { }
