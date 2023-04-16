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