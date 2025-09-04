import {Button, Form} from "react-bootstrap";
import {FormEvent, useState} from "react";
import AuthLayout from "../../components/layouts/AuthLayout";

import {authenticateUser} from "../../service/AuthenticationService";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameValidated, setUsernameValidated] = useState(false);
    const [passwordValidated, setPasswordValidated] = useState(false);

    const [usernameErrorMessage, setUsernameErrorMessage] = useState("Username Required");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("Password Required");

    const [userNameTouched, setUserNameTouched] = useState(false)
    const [passwordTouched, setPasswordTouched] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

        const usernameState = (!userNameTouched || username === "");
        const passwordState = (!passwordTouched) || (password === "");

        if (usernameState || passwordState) {
            setUsernameErrorMessage(!usernameState ? "" : "Username Required");
            setUsernameValidated(usernameState);

            setPasswordErrorMessage(!passwordState ? "" : "Password Required");
            setPasswordValidated(passwordState);
        }


        //TODO call api authentication







        const form = event.currentTarget as HTMLFormElement;
        if (form !== null && !form.checkValidity()) {
            console.log("not valid form")
            event.preventDefault();
            event.stopPropagation();
        }

    }

    return (
        <AuthLayout>
            <div>
                <Form noValidate validated={usernameValidated && passwordValidated} onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label> Username </Form.Label>
                        <Form.Control
                            type = "text"
                            placeholder="username"
                            id = "input-username"
                            name = "username"
                            isValid = {usernameValidated}
                            onBlur={() => setUserNameTouched(true)}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        {usernameValidated && <Form.Control.Feedback type = "invalid">{usernameErrorMessage}</Form.Control.Feedback>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Password </Form.Label>
                        <Form.Control
                            type = "password"
                            placeholder="password"
                            id = "input-password"
                            name = "password"
                            isValid={usernameValidated}
                            onBlur={() => setPasswordTouched(true)}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {passwordValidated && <Form.Control.Feedback  type = "invalid">{passwordErrorMessage}</Form.Control.Feedback>}
                    </Form.Group>

                    <Button type = "submit"> Login </Button>
                </Form>
            </div>`
        </AuthLayout>
    )
}