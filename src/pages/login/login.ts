import { Component } from '@angular/core';
import {AlertController, IonicPage, MenuController, NavController, Platform} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public menu: MenuController,
              public dataProvider: DataProvider,
              public alertCtrl: AlertController,
              public platform: Platform) {
  }

  ionViewDidLoad() {
  }
  
  login(): void {
  
  }
  
  getProfile(): void {
    this.menu.enable(true);
    this.navCtrl.setRoot('HomePage');
  }

}
