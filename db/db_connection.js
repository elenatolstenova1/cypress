'user_strict'

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"atybxrf159",
    database:"usertest1"
})

//create the DB

// connection.query(`CREATE TABLE if not exists users(
//     id int primary key auto_increment,
//     name varchar(255) not null,
//     age int not null
//     )`, function (err) {
//             if(err) console.log(err);
//             else console.log('usertable created');
//     });

// const users_data = [
//     ['Max', 400],
//     ['Olik', 300],
//     ['Lop',400],
//     ['Asdsd',120]
// ]

//add data
// const sql_query = `INSERT INTO users(name,age) VALUES ?`;
//     connection.query(sql_query, [users_data], function(err) {
//         if(err) console.log(err);
//         else console.log('user data added');
//     });

//select all data
// connection.query(`SELECT * FROM users`, function(err,results) {
//             if(err) console.log(err);
//             else console.log(results);
// });

connection.query(`SELECT * FROM users WHERE name='Max'`, function(err,results) {
                if(err) console.log(err);
                else console.log(results);
    });
    
    //важная штука, постоянно нужно добавлять в конце
connection.end();