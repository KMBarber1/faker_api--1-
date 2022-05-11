const express = require("express");
const {faker} = require('@faker-js/faker');
// https://github.com/faker-js/faker
// in terminal: npm install @faker-js/faker --save-dev
const app = express();
const port=8000;


class User {

    constructor(){
        this.id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName =faker.name.lastName()
        this.phoneNumber= faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }

}

console.log(new User());


class Company{

    constructor() {
        this.id = faker.datatype.uuid()
        this.companyName = faker.company.companyName()
        this.address ={
            streetAddress:faker.address.streetAddress(), 
            city:faker.address.city(), 
            state:faker.address.state(),
            zipCode: faker.address.zipCode(), 
            country:faker.address.country() 
        }
    }

}

console.log(new Company());


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Routes:
// req is short for request
// res is short for response

app.get("/api/users/new", (req, res) => {
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company);
});

app.get("/api/user/company", (req, res) => {
    res.json({ user: new User , company: new Company});
});


// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
