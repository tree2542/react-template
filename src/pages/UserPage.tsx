// import { useCallback } from "react";
// import { useFetch } from "../hooks/useFetch";
// import { getUsers } from "../services/user.service";

import { useState } from "react";
import { login } from "../services/user.service";

export default function UserPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(null);

            const res = await login({ username, email });
            alert(`Login success! token = ${res.username}`);
        } catch (err) {
            if (err instanceof Error) setError(err.message);
            else setError("Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 24 }}>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}