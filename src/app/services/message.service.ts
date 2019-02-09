import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(protected angularFireDataBase: AngularFireDatabase) { }

  addMessage(message) {
    return this.angularFireDataBase.object('/messages/' + message.uid).set(message);
  }

  getMessages() {
    return this.angularFireDataBase.list('/messages');
  }
  //
  // getUserByID(uid) {
  //   return this.angularFireDataBase.object('/users/' + uid);
  // }
  //
  // addUser(user) {
  //   return this.angularFireDataBase.object('/users/' + user.uid).set(user);
  // }
  //
  // editUser(user) {
  //   return this.angularFireDataBase.object('/users/' + user.uid).set(user);
  // }
}
