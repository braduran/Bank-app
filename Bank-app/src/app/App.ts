import { Component, HostListener } from '@angular/core';
import {RequestOptions, ResponseContentType} from '@angular/http';
import {Service} from './services/Service';
import {Constants} from './utils/Constants';
import {Utils} from './utils/Utils';

@Component({
  selector: 'App',
  templateUrl: './app.html',
})

export class App{ 
	constructor(private service: Service){
  }
  
  private onClickLogIn(outLogin: any){
    console.log(outLogin);
    const options = new RequestOptions({
      params: outLogin
    });

    this.service.post("http://localhost:8080/insertarCliente", "", options, this.onSuccess.bind(this), this.onError.bind(this));
    /*this.loading = false;
    this.nameChannel = outputsLogin.selectedChannelName;
    const PARAMS_AUTH = '{"user":"'+ outputsLogin.user +'", "password":"'+ outputsLogin.password +'", "appId":"'+ this.idChannel +'"}';
    this.service.post(Constants.AUTHENTICATION, PARAMS_AUTH, this._onSuccessLogin.bind(this), this._onErrorNC.bind(this));*/
  }

  private onSuccess(data: any): void{
    console.log(data);
  }

  private onError(error: any): void{
    console.log(error);
  }
}

