import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {RequestOptions, ResponseContentType} from '@angular/http';
import {Service} from './services/Service';
import {Constants} from './utils/Constants';

@Component({
  selector: 'App',
  templateUrl: './app.html',
})

export class App{ 

  public inpRegister: any;
  public rndRegister:number;
  public inpLoan: any;
  public rndLoan:number;
  public loading: boolean;
  public switch: boolean;

  private outConsult: any;
  private outRegister: any;

	constructor(private service: Service){
    this.inpRegister = {};
    this.inpLoan = {};
    this.outConsult = {};
    this.outRegister = {};
    this.loading = true;
    this.switch = true;
  }
  
  private onClickRegister(outRegister: any){
    this.loading = false;
    this.outRegister = outRegister;
    this.outConsult.id = outRegister.id;
    this.service.post(Constants.CONSULTAR_CLIENTE, "", this.outConsult, this.onSuccessConsult.bind(this), this.onErrorConsult.bind(this));
  }

  private onSuccessConsult(data: any): void{
    var json = this.convertStringToJson(data._body);

    if(json.status == Constants.OK){
      this.service.post(Constants.INSERTAR_CLIENTE, "", this.outRegister, this.onSuccessRegister.bind(this), this.onErrorRegister.bind(this));
    }else{
      this.showMessageRegister(json.message);
    }
  }

  private onErrorConsult(error: any): void{
    this.showMessageRegister(Constants.ERROR_SYSTEM);
  }

  private onSuccessRegister(data: any): void{
    var json = this.convertStringToJson(data._body);
    if(json.status == Constants.OK){
      this.inpRegister.message = Constants.CLIENT_OK;
      this.inpRegister.showMessage = true;
      this.rndRegister = Math.random();
      this.loading = true;
    }else{
      this.showMessageRegister(json.message);
    }
  }

  private onErrorRegister(error: any): void{
    this.showMessageRegister(Constants.ERROR_SYSTEM);
  }

  private onClickLoan(outLoan: any){
    this.loading = false;
    outLoan.idCliente = this.outConsult.id;
    this.service.post(Constants.INSERTAR_PRESTAMO, "", outLoan, this.onSuccessLoan.bind(this), this.onErrorLoan.bind(this));
  }

  private onSuccessLoan(data: any): void{
    var json = this.convertStringToJson(data._body);
    if(json.status == Constants.OK){
      this.inpLoan.message =json.message;
      this.inpLoan.showMessage = true;
      this.rndLoan = Math.random();
      this.loading = true;
    }else{
      this.showMessageLoan(json.message);
    }
  }

  private onErrorLoan(error: any): void{
    this.showMessageLoan(Constants.ERROR_SYSTEM);
  }

  private convertStringToJson(str: string): any{
    return JSON.parse(str);
  }

  private showMessageRegister(msg: string): void{
    this.inpRegister.message = msg;
    this.inpRegister.alert = true;
    this.rndRegister = Math.random();
    this.loading = true;
  }

  private showMessageLoan(msg: string): void{
    this.inpLoan.message = msg;
    this.inpLoan.alert = true;
    this.rndLoan = Math.random();
    this.loading = true;
  }

  private onClickConfirmRegister(){
    this.switch = false;
  }

  private onClickConfirmLoan(){
    this.switch = true;
    this.inpLoan.showMessage = false;
    this.inpRegister.showMessage = false;
    this.inpRegister.alert = false;
    this.rndLoan = Math.random();
  }
}

