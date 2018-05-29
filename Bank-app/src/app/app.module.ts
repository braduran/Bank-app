import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {App}  from './App';
import {Login} from './login/Login';
import {HeaderMenu}  from './header/HeaderMenu';

import {Service} from './services/Service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ App, Login, HeaderMenu],
  bootstrap:    [ App ],
  providers: 	[Service]
})
export class AppModule { }
