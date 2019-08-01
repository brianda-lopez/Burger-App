// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'spring2019',
    database : "burgers_db"
  });
};

connection.connect(function(err) {
  if (err) throw err;
  console.log("Successfully connected to MySQL! Connected as ID: " + connection.threadId);
});

// export connection to ORM
module.exports = connection;

// //Make Connection
// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });



// // Export connection for our ORM to use.
// module.exports = connection;



// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Successfully connected to MySQL! Connected as ID: " + connection.threadId);
// });

// // export connection to ORM
// module.exports = connection;
