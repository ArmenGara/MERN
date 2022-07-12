// What is Express.js 
/// Express.js is an fast and unopinionated  framework 
// we can compare it to flask, becasue it it minimalist...


// What is node.js?
// Its the environment in which Javascript functions(runtime)


/// HTTP Verbs/////
//Post(Create, C in Crud)
//Get(Read, R om Crud)
//Put(Update, U in Crud)
//Delete(Delete, D in Crud)

//Today we we will be Designing an API from the Server Sid!

// RESTful; API
// resources exposed by endpoints

//SWAPI - Planets, People

//Superheros Resouce
//GET all superheroes: api/superheroes
//POST create superhero: api/superheros

//GET one superhero: api/superheros/:id
//PUT update one superhero: api/superheros/:id
//DELETE one superhero: api/superheros/:id


//STEP ONE 
//CREATE FOLDER cd into folder create and package json folder (npm init -y)
// Install dependencies  // 1,(npm install express) 
// CREATE a server.js file (touch server.js) in the project folder

/////////////INSERT THIS INTO SERVER.JS FIlE/////////////////
//// // Commmon JS 
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>YO YO YO</h1>')
// })

// app.listen(8000, () => console.log('Listening on port 8000'));

// //FROM The Terminal START THE SERVER WITH (node server)
// TO START THE TERMINAL WITH NODEMON you can star the SERVER WITH
///// nodemon server.js