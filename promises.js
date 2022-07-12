// const axios = new Promise((resolve, reject) => {
//     const chance = Math.floor(Math.random() * 10)

//     if(chance > 0){
//         resolve({"SUCCESS:": "The API RESPONDED this time"})
//     }

//     else{
//         reject({"ERROR": "The API DID NOT respond this time"})
//     }
// })


// axios
//     .then(res => console.log("Then:", res))
//     .catch(err => console.log("CATCH:", err))


const createUser =(userName) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Validate the name//
            if(userName.length < 3){
                reject({
                    "ValidationMessage": "Username must be longer than 3 chars",
                    userName
                })
            }
            else(
                resolve({
                    'id' : "1234567",
                    userName
                })
            )
        }, 2000)

    }, 2000)
}

createUser("Armen")
    .then(res => console.log("Then:", res))
    .catch(err => console.log("CATCH:", err))
