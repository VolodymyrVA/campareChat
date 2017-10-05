import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {HomeModule} from "../pages/home/home.module";
import { DataProvider } from '../providers/data/data';
import {IonicStorageModule} from "@ionic/storage";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Keyboard} from "@ionic-native/keyboard";
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDqcJp4Hxmh5_OPuLTu4fKvRDT3qREl_RE",
  authDomain: "camper-chat-da59b.firebaseapp.com",
  databaseURL: "https://camper-chat-da59b.firebaseio.com",
  projectId: "camper-chat-da59b",
  storageBucket: "camper-chat-da59b.appspot.com",
  messagingSenderId: "878635736365"
});

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HomeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    InAppBrowser,
    Keyboard
  ]
})
export class AppModule {}
