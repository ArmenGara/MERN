const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Creating Classes
class Users {
    constructor(){
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.email = faker.internet.email(),
        this.phoneNumber = faker.phone.phoneFormats(),
        this.password = faker.internet.password(),
        this.id = faker.datatype.number()
    }

}

class Companies {
        constructor() {
        this.id = faker.company.companyName(),
        this.name = faker.company.companyName(),
        this.address = {
            street: faker.address.streetAddress(),
            city :faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
}


//Define Routes


app.get("/api/users/new", (req, res) => {
    console.log(`Creating new user`)
    res.json( new Users() );
});

app.get("/api/companies/new", (req, res) => {
    // console.log(`Creating new company`)
    res.json( new Companies() );
});

app.get("/api/users/company", (req, res) => {
    // console.log(`Creating new company & Users`)
    res.json( {users: new Users(), comapnies: new Companies()} );
});

app.get("/", (req, res) => {
    res.send("<h1>HI</h1>")
})

app.listen(8000, () => console.log('Listening on port 8000'));