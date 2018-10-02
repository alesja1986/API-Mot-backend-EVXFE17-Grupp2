const chai = require("chai");
const fetch = require("node-fetch");
chai.use(require("chai-date-string"));
const {assert} = chai;
const {expect} = chai;

describe("Testing /api/monthlyearningleft routes to return their respective types", function(){
    it("Should return Email when requesting data from /api/monthlyearningleft/Email", (done) =>{

        fetch("http://localhost:3001/api/monthlyearningleft/Email")
            .then(result => result.json())
            .then(value => {
                expect(value[0].type).to.equal("Email");
            })
            .then(done, done);        
    })

    it("Should return Store when requesting data from /api/monthlyearningleft/Store", (done) =>{
        
        fetch("http://localhost:3001/api/monthlyearningleft/Store")
            .then(result => result.json())
            .then(value => {
                expect(value[0].type).to.equal("Store");
            })
            .then(done, done);        
    })

    it("Should return Download when requesting data from /api/monthlyearningleft/Download", (done) =>{
        
        fetch("http://localhost:3001/api/monthlyearningleft/Download")
            .then(result => result.json())
            .then(value => {
                expect(value[0].type).to.equal("Download");
            })
            .then(done, done);        
    })
})

describe("Testing /api/email to return expected format", function(){
    it('Should be returning a proper formated date e.g "2018-22-12" should not work', (done) =>{
        fetch("http://localhost:3001/api/email")
            .then(result => result.json())
            .then(value => {
                expect(value[0].created).to.be.a.dateString();
            }).then(done, done);
    })
})

//Simon tester
describe("Fetching from orders", function(){
    it("Price should be an number", (done) =>{

        fetch("http://localhost:3001/api/simon/orders")
            .then(result => result.json())
            .then(value => {
                expect(value[0].price).to.be.a("Number");
            })
            .then(done, done);        
    })
})

describe("Fetching from products", function(){
    it("name should be a string", (done) =>{

        fetch("http://localhost:3001/api/simon/products")
            .then(result => result.json())
            .then(value => {
                expect(value[0].name).to.be.a("String");
            })
            .then(done, done);
})
})


// Robins test-fall
describe("Testing /api/orders to return expected type", function(){
    it("Should return a boolean", (done) =>{
        
        fetch("http://localhost:3001/api/orders/")
            .then(result => result.json())
            .then(value => {
                expect(value[0].edit).to.be.a('boolean');
            })
            .then(done, done);        
    })
    it("Should return string", (done) =>{
        
        fetch("http://localhost:3001/api/orders/")
            .then(result => result.json())
            .then(value => {
                expect(value[0].productname).to.be.a('string');
            })
            .then(done, done);        
    })

    it("Should return a number", (done) =>{
        
        fetch("http://localhost:3001/api/orders/")
            .then(result => result.json())
            .then(value => {
                expect(value[0].price).to.be.a('number');
            })
            .then(done, done);        
    })
})
