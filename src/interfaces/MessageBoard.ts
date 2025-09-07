import {User} from "./User";
import {Message} from "./Message";

export interface MessageBoard {
    id : number,
    messageBoardName : string,
    author : User,
    messages : Message[]
    users : User[]
}