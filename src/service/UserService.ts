import {User} from "../interfaces/User";
import {Response} from "../interfaces/Response";

import axios from "axios";
import api from "./AxiosInstance";

const USER_URL = "/v1/user"

export async function getUser() : Promise<Response<User>> {
    const res = await api.get<Response<User>>(
        USER_URL,
    )

    return res.data;
}