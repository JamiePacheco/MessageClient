
// make the first segment a global variable dependent on the profile being used
import axios from "axios";

const AUTHENTICATION_URL = "http://localhost:8080/api/v1/auth"

export function authenticateUser(username : string, password: string) {
    axios.post(
        AUTHENTICATION_URL,
        null,
        {
            params :{
                username : username,
                password: password
            }
        }
    ).then(response => {
            console.log(response.data)
        }
    )
}