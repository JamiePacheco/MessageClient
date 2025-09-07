import {User} from "../interfaces/User";
import {Response} from "../interfaces/Response";

import axios from "axios";

const USER_URL = "http://localhost:8080/api/v1/user"

export async function getUser(token : string) : Promise<Response<User>> {
    const res = await axios.get<Response<User>>(
        USER_URL,
        {
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        },
    )

    return res.data;
}