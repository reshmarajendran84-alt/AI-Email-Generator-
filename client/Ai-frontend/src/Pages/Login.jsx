import { useContext, useState } from "react";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { token, setToken } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/login", {
                email,
                password,
            });

            console.log(response.data);

            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);

            navigate("/dashboard");

        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };

    return (
        <>
            <h3>Login</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />

                <button type="submit">
                    {token ? "Logged In" : "Login"}
                </button>
            </form>
        </>
    );
}

export default Login;