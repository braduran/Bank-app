import {Component, ViewChild, ElementRef, Output, EventEmitter, Input} from '@angular/core';
import {Service} from '../services/Service';
import {Constants} from '../utils/Constants';


declare var jQuery: any;
@Component({
	selector:'HeaderMenu',
	templateUrl:'./HeaderMenu.html'
})

export class HeaderMenu{
	@ViewChild('nav') ul: ElementRef;
	@ViewChild('div') div: ElementRef;

	@Output() typeInformation = new EventEmitter();
	@Output() logout = new EventEmitter();
	@Input() inputsHeaderMenu:  any;

	information: Array<string>;
	nameChannel: string;
	credentials: any;

	constructor(private service: Service){
		this.information = ["Contingencia", "Normal"];
		this.nameChannel = "CANAL";
	}

	ngAfterViewInit() {
		jQuery(this.ul.nativeElement).sideNav();
		jQuery(this.div.nativeElement).modal();
	}

	ngOnChanges(){
		if(this.inputsHeaderMenu.nameChannel !== ""){
			this.nameChannel = this.inputsHeaderMenu.nameChannel;
		}
	}

	onClickInfo(typeInfo: any){
		this.typeInformation.emit(typeInfo);
	}
	
	onClickLogOut(){
		this.logout.emit();
	}
}