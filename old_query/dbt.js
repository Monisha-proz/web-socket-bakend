const mysql = require('mysql2');
// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'auction_cricket'
  });
  
  // Connect
  connection.connect(err => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });
  
  // Example query
//   connection.query('SELECT * FROM your_table', (err, rows) => {
//     if (err) throw err;
  
//     console.log('Data received from DB:');
//     console.log(rows);
//   });
  
  // Close the connection
const data =[
  {
   "name": "Street Strikers",
   "owner": "Mani Raja ",
   "mobileno": 6381512870,
   "no_players": 0,
   "team_amount": 25000,
   "used_amount": 0,
   "is_retained": 0,
   "is_active": 1
  },
  {
   "name": "Black Panthers",
   "owner": "Sasidharan",
   "mobileno": 8056381385,
   "no_players": 0,
   "team_amount": 25000,
   "used_amount": 0,
   "is_retained": 0,
   "is_active": 1
  },
  {
   "name": "Duckout Boys",
   "owner": "Aravind",
   "mobileno": 9786887788,
   "no_players": 0,
   "team_amount": 25000,
   "used_amount": 0,
   "is_retained": 0,
   "is_active": 1
  },
  {
   "name": "Dheeran Builders",
   "owner": "PARTHIBAN.D ",
   "mobileno": 9790155286,
   "no_players": 0,
   "team_amount": 25000,
   "used_amount": 0,
   "is_retained": 0,
   "is_active": 1
  },
  {
   "name": "Vicky Builders",
   "owner": "Vicky Steve",
   "mobileno": 9715783990,
   "no_players": 0,
   "team_amount": 25000,
   "used_amount": 0,
   "is_retained": 0,
   "is_active": 1
  },
  {
   "name": "YNot Boys",
   "owner": "Jeeva",
   "mobileno": 9600890320,
   "no_players": 0,
   "team_amount": 25000,
   "used_amount": 0,
   "is_retained": 0,
   "is_active": 1
  },
  {
   "name": "TM Global Cricket Club",
   "owner": "Mullai Vendhan ",
   "mobileno": 9626269797,
   "no_players": 0,
   "team_amount": 25000,
   "used_amount": 0,
   "is_retained": 0,
   "is_active": 1
  }
 ]
  data.forEach(item => {
    connection.query('INSERT INTO teams SET ?', item, (err, res) => {
      if (err) {
        console.log(err)
        throw err;
      }
  
      console.log('Inserted row:', res.insertId);
    });
  });
  connection.end();