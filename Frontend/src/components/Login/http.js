const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

// ...

const mock = new MockAdapter(axios);

// ...
// Example of user credentials to match against incoming credentials.
const username = 'me@domain.com';
const password = 'password';

// list of friends to return when the route /api/friends is invoked.
const friends = ['alice', 'bob']

// the hardcoded JWT access token you created @ jwt.io.
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtZUBkb21haW4uY29tIiwibmFtZSI6IkFuZHJlYXMgTHltYWxtIn0.at8t0IQiAAvRu3xmEW7o8QbLZGz-R-sbD9NIvRZoufQ';

// ...

// /api/auth
mock.onPost('/api/auth').reply(config => {
    const body // object
        = JSON.parse(config.data);

    console.log(body);
    if (body.username && body.password) {
        if (body.username === username && body.password === password) {
            return [200, { token }];
        }
    }
    return [401, { error: "Invalid user credentials" }];
});

mock.onGet('/api/friends').reply(config => {
    const {
        headers // object
    } = config;

    if (headers.Authorization) {
        if (headers.Authorization === `Bearer ${token}`) {
            return [200, { friends }];
        }
        return [401, { error: "Unauthorized token" }];
    }
    return [400, { error: "No authorization header" }];
});

// if a request in not handled in the mocks above, this will return a generic 400 response.
mock.onAny().reply(400, { error: 'Unsupported request' });

// ...

export default axios;