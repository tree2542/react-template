// import { useCallback } from "react";
// import { useFetch } from "../hooks/useFetch";
// import { getUsers } from "../services/user.service";

import { useState } from "react";
import { login } from "../services/user.service";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(null);

            const res = await login({ username, password });
            alert(`Login success! token = ${res.data.username}`);

            localStorage.setItem("username", res.data.username)
            localStorage.setItem("role", res.data.role)
            navigate("/main", { state: res.data })
        } catch (err) {
            if (err instanceof Error) setError(`Not found ${username}`);
            else setError("Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            maxWidth: 600,
            width: "100%",
            margin: "40px auto",
            padding: 24,
            borderRadius: 12,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            background: "#fff",
        }}>
            <h2 style={{ color: "black" }}>Login</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 12, padding: "0 12px" }}>
                    <input
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px 12px",
                            borderRadius: 8,
                            border: "1px solid #bcbabaff",
                            background: "#bcbabaff",
                            boxSizing: "border-box",
                            color: "black"
                        }}
                    />
                </div>

                <div style={{ marginBottom: 12, padding: "0 12px" }}>
                    <input
                        // type="email"
                        placeholder="password"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px 12px",
                            borderRadius: 8,
                            border: "1px solid #bcbabaff",
                            background: "#bcbabaff",
                            boxSizing: "border-box",
                            color: "black"
                        }}
                    />
                </div>

                <button type="submit" disabled={loading} style={{ margin: 10 }}>
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}