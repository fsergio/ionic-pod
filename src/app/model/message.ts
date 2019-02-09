import {User} from './user';

export class Message {
    constructor(public uid?: number,
                public user?: User,
                public header?: string,
                public body?: string) {
    }
}
