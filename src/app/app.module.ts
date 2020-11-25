import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { ListComponent } from './components/list.component';
import { SearchComponent } from './components/search.component';
import { ResultComponent } from './components/result.component';

import { LottieModule } from "ngx-lottie";
import player from 'lottie-web';

export function playerfactory() {
  return player;
}

const ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'list', component: ListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    SearchComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    LottieModule.forRoot( { player: playerfactory }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
