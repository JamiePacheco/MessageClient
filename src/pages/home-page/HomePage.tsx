import Layout from "../../components/layouts/Layout";
import {useAuth} from "../../context/AuthContext";

export default function HomePage() {

    const {user, setUser, logout} = useAuth();

    console.log("current user: " + JSON.stringify(user))

    return (
        <Layout>
            <main>
                {user == null ? (<h1> Welcome to Duke-chan</h1>) : (<h1> Welcome to Duke-chan {user.username} </h1>)}
            </main>
        </Layout>
    )
}