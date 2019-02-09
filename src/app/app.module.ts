import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {Firebase} from '@ionic-native/firebase/ngx';
import {FcmService} from './services/fcm.service';



const firebase = {
  apiKey: "AIzaSyBZ6g096-WvJQzdOToyhBHJYGN7bAuhUk4",
  authDomain: "ionic-pod.firebaseapp.com",
  databaseURL: "https://ionic-pod.firebaseio.com",
  projectId: "ionic-pod",
  storageBucket: "ionic-pod.appspot.com",
  messagingSenderId: "654083464063"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    FcmService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
