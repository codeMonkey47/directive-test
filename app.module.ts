import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsList } from './news-list/newsList.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations:  [ NewsList ],
  bootstrap:     [ NewsList ]
})
export class AppModule { }
