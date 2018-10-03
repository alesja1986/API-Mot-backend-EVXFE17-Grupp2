const chai = require("chai");
const fetch = require("node-fetch");
chai.use(require("chai-date-string"));
const { assert } = chai;
const { expect } = chai;

const request = require('supertest')("http://localhost:3001/users");

describe("Testing /api/monthlyearningleft routes to return their respective types", function () {
    it("Should return Email when requesting data from /api/monthlyearningleft/Email", (done) => {

        fetch("http://localhost:3001/api/monthlyearningleft/Email")
            .then(result => result.json())
            .then(value => {
                expect(value[0].type).to.equal("Email");
            })
            .then(done, done);
    })

    it("Should return Store when requesting data from /api/monthlyearningleft/Store", (done) => {

        fetch("http://localhost:3001/api/monthlyearningleft/Store")
            .then(result => result.json())
            .then(value => {
                expect(value[0].type).to.equal("Store");
            })
            .then(done, done);
    })

    it("Should return Download when requesting data from /api/monthlyearningleft/Download", (done) => {

        fetch("http://localhost:3001/api/monthlyearningleft/Download")
            .then(result => result.json())
            .then(value => {
                expect(value[0].type).to.equal("Download");
            })
            .then(done, done);
    })
})

describe("Testing /api/email to return expected format", function () {
    it('Should be returning a proper formated date e.g "2018-22-12" should not work', (done) => {
        fetch("http://localhost:3001/api/email")
            .then(result => result.json())
            .then(value => {
                expect(value[0].created).to.be.a.dateString();
            }).then(done, done);
    })
})

//Simon tester
describe("Fetching from orders", function () {
    it("Price should be an number", (done) => {

        fetch("http://localhost:3001/api/simon/orders")
            .then(result => result.json())
            .then(value => {
                expect(value[0].price).to.be.a("Number");
            })
            .then(done, done);
    })
})

describe("Fetching from products", function () {
    it("name should be a string", (done) => {

        fetch("http://localhost:3001/api/simon/products")
            .then(result => result.json())
            .then(value => {
                expect(value[0].name).to.be.a("String");
            })
            .then(done, done);
    })
})


// Robins test-fall
describe("Testing /api/orders to return expected type", function () {
    it("Should return a boolean", (done) => {

        fetch("http://localhost:3001/api/orders/")
            .then(result => result.json())
            .then(value => {
                expect(value[0].edit).to.be.a('boolean');
            })
            .then(done, done);
    })
    it("Should return string", (done) => {

        fetch("http://localhost:3001/api/orders/")
            .then(result => result.json())
            .then(value => {
                expect(value[0].productname).to.be.a('string');
            })
            .then(done, done);
    })

    it("Should return a number", (done) => {

        fetch("http://localhost:3001/api/orders/")
            .then(result => result.json())
            .then(value => {
                expect(value[0].price).to.be.a('number');
            })
            .then(done, done);
    })
})

//Alesjas test
describe("Testing /api/yearlysales routes to return sales for specific year", function () {
    it("Should return a array", (done) => {

        fetch("http://localhost:3001/api/yearlysales/2018")
            .then(result => result.json())
            .then(value => {
                expect(value).to.be.a('array');
            }).then(done, done);
    })

    it("Should include a date 2018", (done) => {

        fetch("http://localhost:3001/api/yearlysales/2018")
            .then(result => result.json())
            .then(value => {
                expect(value[0].date).to.include(2018);
            }).then(done, done);
    })

    it("Should return 2 items", (done) => {

        fetch("http://localhost:3001/api/yearlysales/2017")
            .then(result => result.json())
            .then(value => {
                expect(value).to.have.lengthOf(2);
            })
            .then(done, done);
    })
})



//Malins test

let user = {
    username: "ny", //Change username every time to pass creating-new-user-test
    password: "hejsan"
};

let user_exist = {
    username: "malin",
    password: "hejsan"
};

let user_dont_exist = {
    username: "kalle",
    password: "hejsan"
};


describe('Create a new User', function () {

    before(function () {

    });

    it('Should report status 201 when creating new User that don\'t exist', function (done) {
        request.post("/register")
            .send(user)
            .expect(201, done);
    });

    it('Should report status 400 "Bad Request" when trying to create a User that already exist', function (done) {
        request.post("/register")
            .send(user_exist)
            .expect(400, done);
    });

    after(function () {

    });

});

describe('Logging in the User', function () {

    before(function () {

    });

    // it('Should report status 200 when User successfully logged in.', function (done) {
    //     request.post("/login")
    //         .send(user_exist)
    //         .expect(200, done);
    // });

    it('Should report status 401 "Unauthorized" when user dosen\'t exist', function (done) {
        request.post("/login")
            .send(user_dont_exist)
            .expect(401, done);
    });

    after(function () {

    });

});

