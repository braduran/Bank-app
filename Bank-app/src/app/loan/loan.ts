import { Component, DoCheck, Output, EventEmitter, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'Loan',
    templateUrl: './loan.html'
})

export class loan implements DoCheck, OnChanges{

    @Output() loans = new EventEmitter();
    @Output() confirm = new EventEmitter();
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

    private showMessage: boolean;

    constructor() {
        this.outLoan = {};
        this.dsbBtn = true;
        this.alert = false; 
        this.message = "";  
        this.showMessage = false;    
    }

    public ngOnChanges(){
        if(this.inpLoan.showMessage){
            this.message = this.inpLoan.message;
            this.showMessage = this.inpLoan.showMessage;
        }else{
            this.showMessage = this.inpLoan.showMessage;
            this.message = this.inpLoan.message;
            this.alert = this.inpLoan.alert;
            setTimeout(()=>{
                this.alert = false;
            }, 8000);
              
        }
        
    }

    public ngDoCheck(){
        if(this.nombreEmpresa == "" || this.nitEmpresa <= 0 || this.salario <= 0 || this.fechaIngreso == ''
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

    public onClickConfirmLoan(){
        this.showMessage = false;
        this.confirm.emit();
    }
}