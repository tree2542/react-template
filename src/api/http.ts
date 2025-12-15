const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// HTTP Methods
export async function http<T>(
    url: string,
    options?: RequestInit
): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options?.headers || {}),
        },
        ...options,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Request failed");
    }

    console.log("resss >> ", res.json())
    console.log(Promise<T>)
    return res.json() as Promise<T>;
}



//Post Method
// export async function http<T>(
//     username: string,
//     email: string
// ): Promise<T> {
//     const res = await fetch("/api/login", {
//         headers: {
//             "Content-Type": "application/json",
//         },
//         ...options,
//     });
//     console.log("RES >> ", res)
//     if (!res.ok) {
//         throw new Error("Request failed");
//     }

//     return res.json();
// }