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
