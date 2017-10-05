import { Component } from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chatMessage: string = '';
  messages: any = [];
  
  constructor(public dataProvider: DataProvider) {

  }
  
  sendMessage(): void {
  
  }

}
