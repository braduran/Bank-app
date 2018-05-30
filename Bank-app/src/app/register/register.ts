import { Component, ViewChild, ElementRef, DoCheck, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import {Service} from '../services/Service'; 

@Component({
    selector: 'Register',
    templateUrl: './register.html'
})

export class register implements DoCheck, OnChanges{
    
    @Output() register = new EventEmitter();
    @Input() inpRegister: any;
    @Input() rndRegister: any;
    @Input() inpLoan: any;
    @Input() rndLoan: any;

    public dsbBtn: boolean;
    public id: number;
    public nombre: string;
    public apellido: string;
    public fechaNac: string;
    private outRegister: any;
    public alert: boolean;
    private message: string;

    constructor() {
        this.dsbBtn = true;
        this.outRegister = {};
        this.alert = false;
        this.message = "";
    }

    public ngOnChanges(){
        this.message = this.inpRegister.message;
        this.alert = this.inpRegister.alert;
        setTimeout(()=>{
            this.alert = false;
        }, 5000);
    }

    public ngDoCheck(){
        if(this.id == 0 || this.nombre == '' || this.apellido == '' || this.fechaNac == ''
        || this.id == undefined || this.nombre == undefined || this.apellido == undefined || this.fechaNac == undefined){
             this.dsbBtn = true;
        }else{
             this.dsbBtn = false;
        }
    }
    
    public onClickRegister(){
        this.outRegister.id = this.id;
        this.outRegister.nombre = this.nombre;
        this.outRegister.apellido = this.apellido;
        this.outRegister.fechaNac = this.fechaNac;
        this.register.emit(this.outRegister);
    }
}