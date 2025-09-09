
// make the first segment a global variable dependent on the profile being used
import axios from "axios";
import {Response} from "../interfaces/Response";
import api from "./AxiosInstance";

const AUTHENTICATION_URL = "/v1/auth"

export async function authenticateUser(username : string, password: string) : Promise<Response<string>>{
    const res = await api.get<Response<string>>(
        AUTHENTICATION_URL,
        {
            params :{
                username : username,
                password: password
            }
        }
    );

    return res.data;
}