import {Http} from '@angular/http';
import {Utils} from '../utils/Utils';
import {Injectable} from '@angular/core';


@Injectable()
export class Service{

    constructor(private http: Http){}

    public post(url:string, body:any, options: any, onSuccess: any, onError: any){
        return this.http.post(url, body, options)
        .subscribe(
            data =>{        
                onSuccess(data);
            },
            error =>{
                onError(error);
            });
    }
}