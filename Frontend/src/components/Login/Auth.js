import http from './http';

const jwt_decode = require('jwt-decode');

// ...

class AuthService {

    // the decoded token if the user has been authenticated, carrying information about the user.
    user;

    accessToken = "accessToken";

    constructor() {
        // perform any logic upon application startup here...
        let token = localStorage.getItem(this.accessToken);
        if (token) {
            const decodedToken = jwt_decode(token);
            this.user = decodedToken;
        }
    }

    // use this method to catch http errors. 
    handleError(error) {
        throw error.response.data;
    }

    // convenience method to get authentication state for a user, which should include the 'user' class property; 
    // this method is used in the <App> component.
    getAuthState() {
        return {
            user: this.user
        };
    }

    login(credentials) {
        // invoke the relevant API route for authenticating the user with the given credentials and return a Promise
        // that fulfills with authentication state.
        // 
        // Make sure to handle a successful authentication by storing and also decoding the returned token, as well as
        // catching http errors. 

        return new Promise((resolve, reject) => {
            http.post("/api/auth", {
                username: credentials.username,
                password: credentials.password
            })
                .then(response => {
                    console.log(response);
                    if (response.status !== 200)
                        this.handleError(response);

                    const { token } = response.data;
                    console.log(response);
                    const decodedToken = jwt_decode(token);

                    localStorage.setItem(this.accessToken, token);
                    this.user = decodedToken;
                    resolve(this.user);
                })
                .catch(err => reject(err));
        });
    }

    logout() {
        // logout the current user by removing the corresponding token. 
        localStorage.removeItem(this.accessToken);
        this.user = undefined;
    }

    getResource(resource) {
        // invoke a protected API route by including the Authorization header and return a Promise that fulfills 
        // with the response body. 
        //
        // If e.g. invoking /api/friends, the 'resource' parameter should equal 'friends'.

        const token = localStorage.getItem(this.accessToken);

        return new Promise((resolve, reject) => {
            http.get(`/api/${resource}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status !== 200)
                        this.handleError(response);

                    resolve(response)
                })
                .catch(err => reject(err));
        });
    }
}

export default new AuthService();