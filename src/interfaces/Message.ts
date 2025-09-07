import {User} from "./User";
import {MessageBoard} from "./MessageBoard";

export interface Message {
    id : number,
    author : User,
    messageBoard : MessageBoard,
    message : string,
    image : Uint8Array,
    timestamp : Date
}