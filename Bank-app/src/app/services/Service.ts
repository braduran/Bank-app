import {Http, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class Service{

    constructor(private http: Http){}

    public post(url:string, body:any, requestParams: any, onSuccess: any, onError: any){
        const options = new RequestOptions({
            params: requestParams
        });
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