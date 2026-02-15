import { useState } from "react";
import { register } from "../services/user.service";
import type { RegisterRequest } from "../types/auth";
import { useNavigate } from "react-router-dom";

// type LoginForam = {
//     username: string,
//     password: string,
//     firstname: string,
//     lastname: string,
//     email: string,
// }
export default function RegisterPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [form, setForm] = useState<RegisterRequest>({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
    })
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(null);

            const res = await register(form)
            alert(`Register success! token = ${res.message_th}`);
            navigate("/login")
        } catch (err) {
            if (err instanceof Error) setError(err.message);
            else setError("Login failed");
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //ข้อมูลจะอิงตาม name ที่อยู่ใน tag input
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
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
            <h2 style={{ color: "black" }}>Register</h2>
            <form onSubmit={handleSubmit} style={{ padding: 10 }}>
                <div style={{ marginBottom: 12, padding: "0 12px" }}>
                    <input
                        name="username"
                        placeholder="username"
                        value={form.username}
                        onChange={handleChange}
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
                        name="password"
                        placeholder="password"
                        value={form.password}
                        onChange={handleChange}
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
                        name="firstname"
                        placeholder="firstname"
                        value={form.firstname}
                        onChange={handleChange}
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
                        name="lastname"
                        placeholder="lastname"
                        value={form.lastname}
                        onChange={handleChange}
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
                        name="email"
                        placeholder="email"
                        value={form.email}
                        onChange={handleChange}
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

                <button type="submit" style={{ margin: 10 }}>
                    {loading ? "Loading..." : "Submit"}
                </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )

}