import { http } from "../api/http";
import type { User } from "../types/user";
import type { ResponseModel, LoginRequest, LoginResponse, RegisterRequest } from "../types/auth";


export function getUsers(): Promise<User[]> {
    return http<User[]>("/api/login", {
        method: "GET",
    });
}

export function register(payload: RegisterRequest) {
    return http<ResponseModel>("/api/register", {
        method: "POST",
        body: JSON.stringify(payload),
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
