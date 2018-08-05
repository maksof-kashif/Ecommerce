import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';
// import { Observable } from 'rxjs/Rx';
import { SharedService } from './shared.service';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { NotificationsService } from 'angular2-notifications';
import { Component } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	

	constructor(private sharedservice: SharedService, private http: Http,public notificationService: NotificationsService) { }

	getCategories(){
		return this.sharedservice.get("get_categories");
	}

	notifyUserSuccess(sub, message) {
		console.log('notifyUserSuccess', sub, message);
		return this.notificationService.success(sub, message, {
			timeOut: 3000,
			showProgressBar: true,
			pauseOnHover: true,
			clickToClose: false,
			clickIconToClose: true
		});
	}
	notifyUserError(sub, message) {
		return this.notificationService.error(sub, message, {
			timeOut: 3000,
			showProgressBar: true,
			pauseOnHover: true,
			clickToClose: false,
			clickIconToClose: true
		});
	}
}
