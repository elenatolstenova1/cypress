'use_strict';


// const axios =require('axios');


// axios.get('https://reqres.in/api/users?page=2')
// .then(function (response){
//     console.log(response);
// })
// .catch(function(error) {
//     console.log(console.log(error));
// })

// .then(function() {

// });

//выполнение запроса node request


// const axios =require('axios');


// axios.post('https://reqres.in/api/users', {
//     "name":"Neo",
//     "job":"matrix leader",
//     "age":32
// })

// .then(function (response){
//     console.log(response);
// })
// .catch(function(error) {
//     console.log(console.log(error));
// })

// .then(function() {

// });


async function createUser() {
    try {
        const response = await axios.post('https://reqres.in/api/users', {
            "name":"Agent Smith",
            "job":"programm",
            "age":100
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
 }

    createUser();
