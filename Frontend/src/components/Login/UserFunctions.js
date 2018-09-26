import axios from "axios";

export const register = newUser => {
    return axios
        .post("/register", {
            username: newUser.username,
            password: newUser.password,
        })
        .then(res => {
            console.log("Registered!")
        })
}

export const login = user => {
    return axios
        .post("/login", {
            username: user.username,
            password: user.password
        })
        .then(res => {
            localStorage.setItem("usertoken", res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
};