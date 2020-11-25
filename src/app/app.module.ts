import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { ListComponent } from './components/list.component';
import { SearchComponent } from './components/search.component';
import { ResultComponent } from './components/result.component';
import { AnimeDataBase } from './anime.database';

import { LottieModule } from "ngx-lottie";
import player from 'lottie-web';
import { JikanService } from './jikan.service';

export function playerfactory() {
  return player;
}

const ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'list', component: ListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'result/:genre/:q', component: ResultComponent},
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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AnimeDataBase,
    JikanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
