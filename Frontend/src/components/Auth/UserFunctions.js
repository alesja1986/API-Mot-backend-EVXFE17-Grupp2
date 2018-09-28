import axios from 'axios'

export const register = newUser => {
    return axios
        .post('http://localhost:3001/users/register', {
            email: newUser.username,
            password: newUser.password,
        })
        .then(res => {
            console.log('Registered!')
        })
}

export const login = user => {
    return axios
        .post('http://localhost:3001/users/login', {
            email: user.username,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

