import { Component, DoCheck, Output, EventEmitter, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'Loan',
    templateUrl: './loan.html'
})

export class loan implements DoCheck, OnChanges{

    @Output() loans = new EventEmitter();
    @Input() inpLoan: any;
    @Input() rndLoan: any;

    public dsbBtn: boolean;

    public nombreEmpresa: string;
    public nitEmpresa: number;
    public salario: number;
    public fechaIngreso: string;

    private message: string;
    private alert: boolean;
    private outLoan: any;

    constructor() {
        this.outLoan = {};
        this.dsbBtn = true;
        this.alert = false; 
        this.message = "";      
    }

    public ngOnChanges(){
        this.message = this.inpLoan.message;
        this.alert = this.inpLoan.alert;
        setTimeout(()=>{
            this.alert = false;
        }, 8000);
    }

    public ngDoCheck(){
        if(this.nombreEmpresa == "" || this.nitEmpresa == 0 || this.salario == 0 || this.fechaIngreso == ''
        || this.nombreEmpresa == undefined || this.nitEmpresa == undefined || this.salario == undefined || this.fechaIngreso == undefined){
             this.dsbBtn = true;
        }else{
             this.dsbBtn = false;
        }
    }

    public onClickLoan(){
        this.outLoan.nombreEmpresa = this.nombreEmpresa;
        this.outLoan.nitEmpresa = this.nitEmpresa;
        this.outLoan.salarioActual = this.salario;
        this.outLoan.fechaIngreso = this.fechaIngreso;
        this.loans.emit(this.outLoan);
    }
}