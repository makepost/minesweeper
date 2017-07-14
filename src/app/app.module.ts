import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MobxAngularModule } from 'mobx-angular';
import { InlineSVGModule } from 'ng-inline-svg';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ScrollStoreModule } from 'scrollstore';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    MobxAngularModule,
    ScrollStoreModule,
    BrowserModule,
    FormsModule,
    InlineSVGModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
})
export class AppModule { }
