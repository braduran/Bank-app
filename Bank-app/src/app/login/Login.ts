import { Component, ViewChild, ElementRef, AfterViewInit, DoCheck, Output, EventEmitter} from '@angular/core';
import {Service} from '../services/Service'; 
import {Constants} from '../utils/Constants';
import {Utils} from '../utils/Utils';


declare var jQuery: any;
@Component({
    selector: 'Login',
    templateUrl: './Login.html'
})

export class Login implements AfterViewInit, DoCheck{

    @Output() login = new EventEmitter();
    public dsbBtn: boolean;
    public id: number;
    public nombre: string;
    public apellido: string;
    public fechaNac: string;
    private outLogin: any;

    constructor() {
        this.dsbBtn = true;
        this.outLogin = {};
    }

    public ngAfterViewInit() {
    }

    public ngDoCheck(){
        if(this.id == 0 || this.nombre == '' || this.apellido == '' || this.fechaNac == ''
        || this.id == undefined || this.nombre == undefined || this.apellido == undefined || this.fechaNac == undefined){
             this.dsbBtn = true;
        }else{
             this.dsbBtn = false;
        }
    }
    
    public onClickLogIn(){
        this.outLogin.id = this.id;
        this.outLogin.nombre = this.nombre;
        this.outLogin.apellido = this.apellido;
        this.outLogin.fechaNac = this.fechaNac;
        this.login.emit(this.outLogin);
    }
}