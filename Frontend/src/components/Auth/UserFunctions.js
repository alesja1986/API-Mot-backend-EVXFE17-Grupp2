// import axios from 'axios'

// export const register = newUser => {
//     return axios
//         .post('http://localhost:3001/users/register', {
//             email: newUser.username,
//             password: newUser.password,
//         })
//         .then(res => {
//             console.log('Registered!')
//         })
// }

// export const login = user => {
//     return axios
//         .post('http://localhost:3001/users/login', {
//             email: user.username,
//             password: user.password
//         })
//         .then(res => {
//             localStorage.setItem('usertoken', res.data)
//             return res.data
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

export const register = newUser => {
    fetch("http://localhost:3001/users/register",
        {
            method: "POST",
            headers: {
                "Accept": "Application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: newUser.username, password: newUser.password })
        })
        .then(response => response.json())
        .then((result) => {
            console.log(result);
        })
        .catch(err => console.log("err", err));

};

export const login = user => {
    fetch("http://localhost:3001/users/login",
        {
            method: "POST",
            headers: {
                "Accept": "Application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: user.username, password: user.password })
        })
        .then(response => response.json())
        .then((user) => {
            if (!user.token) {
                console.log("No user token. Object returned is: " + user);
            } else {
                console.log("usertoken: " + user.token); // for testing
                localStorage.setItem("usertoken", JSON.stringify(user.token));
                // return user.token; // added this line to copy axios code above
            }
        })
        .catch(err => console.log("err", err));

};




