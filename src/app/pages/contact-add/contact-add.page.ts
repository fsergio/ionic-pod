import { Component, OnInit } from '@angular/core';
import {Message} from '../../model/message';
import {AlertController} from '@ionic/angular';
import {GenericPage} from '../../model/generic-page';
import {User} from '../../model/user';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.page.html',
  styleUrls: ['./contact-add.page.scss'],
})
export class ContactAddPage extends GenericPage implements OnInit {
  public message: Message = new Message();
  public user: User = new User();

  constructor(protected alertController: AlertController) {
    super(alertController);
  }

  ngOnInit() {}

  onSubmit() {
    this.message.user = this.user;
    console.log(this.message);
    return this.genericPresentAlert(this.message);
  }
}
