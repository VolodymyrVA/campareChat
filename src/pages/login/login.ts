import { Component } from '@angular/core';
import {AlertController, IonicPage, MenuController, NavController, Platform} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import firebase from "firebase";

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
    let provider = new firebase.auth.FacebookAuthProvider();
    
    firebase.auth().signInWithRedirect(provider).then(() => {
      alert('signInWithRedirect')
      firebase.auth().getRedirectResult().then((result) => {
        alert(JSON.stringify(result));
      }).catch((err) => {
        alert(JSON.stringify(err));
      })
    })
  }
  
  getProfile(): void {
    this.menu.enable(true);
    this.navCtrl.setRoot('HomePage');
  }

}
