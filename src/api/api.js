import axios from "./axios";

export async function login(username, password) {
    return axios.post("/login", {
        username, password
    });
}

export async function logout() {
    return axios.post("/logout", {
        token: localStorage.getItem("token")
    });
}

export async function getData() {
    return axios.get("/data");
}

export async function getPumpData() {
    // TODO
    return new Promise((resolve, reject) => {
        resolve([
            { action: 'on', time: '14:56, April 16, 2023'},
            { action: 'off', time: '14:56, April 16, 2023'},
            { action: 'on', time: '10:00, April 15, 2023'},
            { action: 'off', time: '18:59, April 15, 2023'},
            { action: 'on', time: '7:59, April 14, 2023'},
            { action: 'off', time: '17:56, April 14, 2023'},
            { action: 'on', time: '18:18, April 13, 2023'},
            { action: 'off', time: '18:20, April 10, 2023'},
        ]);
    })
}