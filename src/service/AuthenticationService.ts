
// make the first segment a global variable dependent on the profile being used
import axios from "axios";
import {Response} from "../interfaces/Response";

const AUTHENTICATION_URL = "http://localhost:8080/api/v1/auth"

export async function authenticateUser(username : string, password: string) : Promise<Response<string>>{
    const res = await axios.get<Response<string>>(
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