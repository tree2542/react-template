import { http } from "../api/http";
import type { User } from "../types/user";
import type { LoginRequest, LoginResponse } from "../types/auth";


export function getUsers(): Promise<User[]> {
    return http<User[]>("/api/login", {
        method: "GET",
    });
}

export function login(payload: LoginRequest) {
    return http<LoginResponse>("/api/login", {
        method: "POST",
        body: JSON.stringify(payload),
    });
}

// export function login(payload: {
//     email: string;
//     password: string;
// }) {
//     return http<{ token: string }>("/api/login", {
//         method: "POST",
//         body: JSON.stringify(payload),
//     });
// }
