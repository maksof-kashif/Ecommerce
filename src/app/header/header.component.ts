import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';
import {NotificationsService, SimpleNotificationsComponent} from 'angular2-notifications';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoriesRes:any={};
  fnlResult;
  menu;
  viewAllUser=false;

  constructor(public apiService: ApiService, private notificationsService: NotificationsService) { }
  @Output() headerClassChange = new EventEmitter();

  ngOnInit() {
  	this.getNav();
  }

getNav(){
  this.apiService.getCategories().subscribe(res => {
    this.categoriesRes=res;
    this.fnlResult=JSON.parse(this.categoriesRes._body);
    // this.categoriesRes=result;
    this.menu=this.fnlResult.data;
    console.log(this.menu);
    }, (error) => {
      this.notificationsService.error('Error', 'Internal server error, please try again later!');
    });
}

viewUserTrue(menu){
  this.viewAllUser=true;
  this.headerClassChange.emit(menu.toElement.innerText);
}

}