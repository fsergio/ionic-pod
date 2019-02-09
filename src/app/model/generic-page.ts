import {AlertController} from '@ionic/angular';
import {Message} from './message';

export class GenericPage {
    constructor(protected alertController : AlertController) {}

    async genericPresentAlert(message : Message) {
        const alert = await this.alertController.create({
            header: 'Message send!',
            subHeader: 'thanks you!, '+ message.user.name,
            message: message.body,
            buttons: ['OK']
        });

        await alert.present();
    }
}
