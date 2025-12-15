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
    username: string;
    first_name: string;
    last_name: string;
    role: string;
}