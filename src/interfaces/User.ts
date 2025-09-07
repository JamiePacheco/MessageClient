import {Message} from "./Message";
import {MessageBoard} from "./MessageBoard";

export type Role = "ROLE_USER" | "ROLE_ADMIN";

export interface User {
    id : number,
    username : string,
    biography : string,
    role : Role,
    profilePicture : Uint8Array,
    ownedMessageBoards : MessageBoard[],
    messages : Message[]
}