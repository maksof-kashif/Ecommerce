import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  viewUser="mainPage";

  constructor() { }

  ngOnInit() {
  }

  updateHeaderToggle(val){
  	var str2 = val.replace(/\n|\r/g, "");
		this.viewUser=str2;
		console.log(this.viewUser);
	}

}
