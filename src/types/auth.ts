export interface ResponseModel {
    status_code: number;
    message_th: string;
    message_en: string;
}

export interface LoginRequest {
    username: string;
    email: string;
}

export interface LoginResponse {
    status_code: number;
    message_th: string;
    message_en: string;
    data: {
        username: string;
        first_name: string;
        last_name: string;
        role: string;
    }
}

export interface RegisterRequest {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
}
