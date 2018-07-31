import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	urlBase = 'http://localhost/maksof-team-server/';
	auth: string;

	constructor(private http: Http) { }

	setAuthToken() {
		this.auth = localStorage.getItem('token');
	}

	get(url) {
	    return this.http.get(this.urlBase + url)
	        // ...and calling .json() on the response to return data
	        .map((res: Response) => {
	            return res;
	        }).catch((error: any) => {
	            console.log("error:", error);
	            return Observable.throw(error.json())
	        });
	}

	post(url, data) {
	    this.setAuthToken();
	    var headers = new Headers({ 'Content-Type': 'application/json', 'auth': this.auth }); // ... Set content type to JSON        
	    var options = new RequestOptions({ headers: headers }); // Create a request option
	   
	    return this.http.post(this.urlBase + '' + url, data, options) // ...using post request
	        .map((res: Response) => {
	            var postRes = res.json();
	            postRes.request = data;
	            return postRes;
	        }) // ...and calling .json() on the response to return data
	        .catch((error: any) => {
	            error = error.json();
	            error.request = data;
	            return Observable.throw(error);
	        }); // ...errors if any
	        //
	}

	put(url, data) {
        const headers = new Headers({ 'Content-Type': 'application/json' }); 
        const options = new RequestOptions({ headers: headers }); 

        return this.http.put(this.urlBase + '' + url, data) 
            .map((res: Response) => res.json()) 
            .catch((error: any) => Observable.throw(error.json()));
    }

    delete(url) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers }); 

        return this.http.delete(this.urlBase + '' + url) 
            .map((res: Response) => res.json()) 
            .catch((error: any) => Observable.throw(error.json())); 
    }

}