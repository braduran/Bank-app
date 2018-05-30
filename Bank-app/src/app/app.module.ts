import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {App}  from './App';
import {register} from './register/register';
import {loan} from './loan/loan';

import {Service} from './services/Service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ App, register, loan],
  bootstrap:    [ App ],
  providers: 	[Service]
})
export class AppModule { }
