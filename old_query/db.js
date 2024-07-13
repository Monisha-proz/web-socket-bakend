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
   "id": 1,
   "name": "LOGESH R",
   "mobileno": 9345478552,
   "cricheroes": 9943350541,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 2,
   "name": "VISWANATH R ",
   "mobileno": 9360914499,
   "cricheroes": 9360914499,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 3,
   "name": "Ganesh Srinivasan",
   "mobileno": 9894812880,
   "cricheroes": 9894812880,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 4,
   "name": "Gokul Ravichandran ",
   "mobileno": 9500592226,
   "cricheroes": 9500592226,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 5,
   "name": "Vaitheesh",
   "mobileno": 7200184185,
   "cricheroes": 7200184185,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 6,
   "name": "DHARSHAN.M",
   "mobileno": 9344507963,
   "cricheroes": 9344507963,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 7,
   "name": "Mohankumar Subramani ",
   "mobileno": 8220756666,
   "cricheroes": 8220756666,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 8,
   "name": "M LALITH KUMAR ",
   "mobileno": 9488240521,
   "cricheroes": 9488240521,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 9,
   "name": "Revanth M",
   "mobileno": 8220122030,
   "cricheroes": 8220122030,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 10,
   "name": "Jaswanth ",
   "mobileno": 9894561222,
   "cricheroes": 9894561222,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 11,
   "name": "Sureshkumar Kandasamy ",
   "mobileno": 8124279279,
   "cricheroes": 8124279279,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 12,
   "name": "SATHISHKUMAR T",
   "mobileno": 8667342591,
   "cricheroes": 9843660002,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 13,
   "name": "Kaliyappan ",
   "mobileno": 7904431348,
   "cricheroes": 7904431348,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 14,
   "name": "Meyyarasan",
   "mobileno": 7826979492,
   "cricheroes": 7826979492,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 15,
   "name": "Sibi",
   "mobileno": 9791720517,
   "cricheroes": 9791720517,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 16,
   "name": "Ravinder",
   "mobileno": 9500571290,
   "cricheroes": 9500571290,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 17,
   "name": "Nakkeeran. M",
   "mobileno": 7373827112,
   "cricheroes": 7539941880,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 18,
   "name": "Ganapathi ",
   "mobileno": 6379835359,
   "cricheroes": 9994934448,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 19,
   "name": "G SUDHAKAR ",
   "mobileno": 9344956392,
   "cricheroes": 9344956392,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 20,
   "name": "E.Yaswanth",
   "mobileno": 9360272828,
   "cricheroes": 9360272828,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 21,
   "name": "Dinesh Kumar K",
   "mobileno": 7373341024,
   "cricheroes": 7373341024,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 22,
   "name": "Dinesh Ramados",
   "mobileno": 8144660030,
   "cricheroes": 8144660030,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 23,
   "name": "Praveenkumar R",
   "mobileno": 8508709456,
   "cricheroes": 8508709456,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 24,
   "name": "Dinesh",
   "mobileno": 9042660462,
   "cricheroes": 9042660462,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 25,
   "name": "Sathishkumar Rajan ",
   "mobileno": 9994437682,
   "cricheroes": 9994437682,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 26,
   "name": "Amarnath",
   "mobileno": 9789108189,
   "cricheroes": 9789108189,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 27,
   "name": "Sankar K",
   "mobileno": 9791720517,
   "cricheroes": 6383443092,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 28,
   "name": "Gopi.P",
   "mobileno": 9944029629,
   "cricheroes": 9944029629,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 29,
   "name": "Mathankumar Ramasamy",
   "mobileno": 9688619252,
   "cricheroes": 9688619252,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 30,
   "name": "Kaarthick.G",
   "mobileno": 9787772729,
   "cricheroes": 9787772729,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 31,
   "name": "JANARTHANAN N ",
   "mobileno": 9597697360,
   "cricheroes": 9597697360,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 32,
   "name": "BALAJI S",
   "mobileno": 9095503214,
   "cricheroes": 9095503214,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 33,
   "name": "Sakthisaran",
   "mobileno": 6382665954,
   "cricheroes": 6382665954,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 34,
   "name": "PREZATH VP",
   "mobileno": 7373072850,
   "cricheroes": 7373072850,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 35,
   "name": "DINESHKUMAR",
   "mobileno": 9042430069,
   "cricheroes": 9042430069,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 36,
   "name": "Mithun Chakkaravarthy S",
   "mobileno": 9894243086,
   "cricheroes": 9894243086,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 37,
   "name": "Gobi",
   "mobileno": 9787208793,
   "cricheroes": 9787208793,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 38,
   "name": "Lokeswaran SS ",
   "mobileno": 9080364974,
   "cricheroes": 9080364974,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 39,
   "name": "B.MUSTHAFA",
   "mobileno": 9952772577,
   "cricheroes": 9952772577,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 40,
   "name": "Gowtham",
   "mobileno": 6383771829,
   "cricheroes": 6383771829,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 41,
   "name": "Kathiravan Manoharan",
   "mobileno": 8870484727,
   "cricheroes": 8870484727,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 42,
   "name": "Prakatheeswaran R",
   "mobileno": 9363537677,
   "cricheroes": 9363537677,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 43,
   "name": "Keerthi",
   "mobileno": 9566443095,
   "cricheroes": 9566443095,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 44,
   "name": "Bharadhi ",
   "mobileno": 9790189024,
   "cricheroes": 9790189024,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 45,
   "name": "R.PASUPATHI",
   "mobileno": 9597302486,
   "cricheroes": 9597302486,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 46,
   "name": "SEKAR S",
   "mobileno": 7373489789,
   "cricheroes": 7373489789,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 47,
   "name": "Alex Raj S",
   "mobileno": 8098909119,
   "cricheroes": 8098909119,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 48,
   "name": "Arun",
   "mobileno": 8754700176,
   "cricheroes": 8754700176,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 49,
   "name": "Nirmal ",
   "mobileno": 8608924734,
   "cricheroes": 8608924734,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 50,
   "name": "Murali ",
   "mobileno": 9994190817,
   "cricheroes": 9994190817,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 51,
   "name": "Raja sekar",
   "mobileno": 9025095851,
   "cricheroes": 9025095851,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 52,
   "name": "Vengatesh",
   "mobileno": 9840587776,
   "cricheroes": 9840587776,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 53,
   "name": "KANNAN K",
   "mobileno": 9095077379,
   "cricheroes": 9095077379,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 54,
   "name": "DINESHKUMAR NATARAJAN",
   "mobileno": 8940045049,
   "cricheroes": 9080902704,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 55,
   "name": "Dinesh kumar",
   "mobileno": 9629631213,
   "cricheroes": 9629631213,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 56,
   "name": "Mukesh S",
   "mobileno": 9629013308,
   "cricheroes": 9629013308,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 57,
   "name": "Manikandan",
   "mobileno": 9524553287,
   "cricheroes": 9524553287,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 58,
   "name": "Ramesh P",
   "mobileno": 9566414451,
   "cricheroes": 9566414451,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 59,
   "name": "Sanjay Kumar ",
   "mobileno": 8438578337,
   "cricheroes": 8438578337,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 60,
   "name": "Mithun",
   "mobileno": 9865405720,
   "cricheroes": 9865405720,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 61,
   "name": "Maran prakash",
   "mobileno": 8526792200,
   "cricheroes": 8526792200,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 62,
   "name": "Moorthi.R",
   "mobileno": 9150766696,
   "cricheroes": 9150766696,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 63,
   "name": "T.MANI",
   "mobileno": 6381182417,
   "cricheroes": 6381182417,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 64,
   "name": "Balasubramani d",
   "mobileno": 8056790145,
   "cricheroes": 8056790145,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 65,
   "name": "MARAN SELVA ",
   "mobileno": 9655156549,
   "cricheroes": 9655156549,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 66,
   "name": "Jagan",
   "mobileno": 9884288760,
   "cricheroes": 8838230022,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 67,
   "name": "ARUN DEVARAJAN",
   "mobileno": 7708710215,
   "cricheroes": 7708710215,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 68,
   "name": "NT RAJA",
   "mobileno": 9600444853,
   "cricheroes": 9600444853,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 69,
   "name": "Naveen",
   "mobileno": 9342394231,
   "cricheroes": 9865898123,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 70,
   "name": "Gokulachandran M",
   "mobileno": 7708914553,
   "cricheroes": 9442134337,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 71,
   "name": "Dinesh kumar",
   "mobileno": 9636998908,
   "cricheroes": 9636998908,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 72,
   "name": "Keerthiraj M",
   "mobileno": 9944353193,
   "cricheroes": 9944353193,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 73,
   "name": "Karthick Kumaran",
   "mobileno": 7812051568,
   "cricheroes": 7812051568,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 74,
   "name": "Suresh",
   "mobileno": 6381140542,
   "cricheroes": 6381140542,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 75,
   "name": "Yuvanesh",
   "mobileno": 8667712992,
   "cricheroes": 8667712992,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 76,
   "name": "Senthil Raja",
   "mobileno": 9488194568,
   "cricheroes": 9488194568,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 77,
   "name": "Rajasehar",
   "mobileno": 7010517292,
   "cricheroes": 7010517292,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 78,
   "name": "Gowtham Raaj PS",
   "mobileno": 8668081812,
   "cricheroes": 8668081812,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 79,
   "name": "RANJITHNATHAN",
   "mobileno": 9597103402,
   "cricheroes": 9597103402,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 80,
   "name": "Sankar",
   "mobileno": 8668046302,
   "cricheroes": 8668046302,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 81,
   "name": "Suriya kandhasamy",
   "mobileno": 9159772564,
   "cricheroes": 9159772564,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 82,
   "name": "Loganathan Muthu",
   "mobileno": 9952827999,
   "cricheroes": 9952827999,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 83,
   "name": "Mahi Veddanth",
   "mobileno": 9025756946,
   "cricheroes": 9025756946,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 84,
   "name": "NIKIL",
   "mobileno": 6369998001,
   "cricheroes": 9688517257,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 85,
   "name": "Giri Ganesan",
   "mobileno": 9751943351,
   "cricheroes": 9751943351,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 86,
   "name": "Ganesan Sridhar ",
   "mobileno": 9003633939,
   "cricheroes": 9003633939,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 87,
   "name": "Lalith",
   "mobileno": 8807929659,
   "cricheroes": 8807929659,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 88,
   "name": "Nandhakumar.G",
   "mobileno": 8883757862,
   "cricheroes": 8883757862,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 89,
   "name": "Srikanth S",
   "mobileno": 9047632350,
   "cricheroes": 9047632350,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 90,
   "name": "Krishna Kumar ",
   "mobileno": 9865614444,
   "cricheroes": 9865614444,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 91,
   "name": "RG Anbhu",
   "mobileno": 9787771473,
   "cricheroes": 9787771473,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 92,
   "name": "Dhavooth Ibrahim.A",
   "mobileno": 8072004041,
   "cricheroes": 8072004041,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 93,
   "name": "Gokul ramesh",
   "mobileno": 8667608857,
   "cricheroes": 8667608857,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 94,
   "name": "Sankar Duraisamy",
   "mobileno": 9003368893,
   "cricheroes": 9003368893,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 95,
   "name": "Suresh Kumar.G",
   "mobileno": 9362233779,
   "cricheroes": 9442544779,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 96,
   "name": "JAWAHAR R D",
   "mobileno": 9600732500,
   "cricheroes": 9600732500,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 97,
   "name": "R.Gaushik prajin",
   "mobileno": 8056661551,
   "cricheroes": 8056661551,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 98,
   "name": "Gokul",
   "mobileno": 8248429250,
   "cricheroes": 8248429250,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 99,
   "name": "Karthick.P",
   "mobileno": 9344242505,
   "cricheroes": 9362233779,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 100,
   "name": "Ramesh rangaraj",
   "mobileno": 8667609996,
   "cricheroes": 8667609996,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 101,
   "name": "E. Udhaya kumar ",
   "mobileno": 9944894318,
   "cricheroes": 9944894318,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 102,
   "name": "NAVIN LOGANATHAN",
   "mobileno": 9003540882,
   "cricheroes": 9003540882,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 103,
   "name": "Karthikeyan S",
   "mobileno": 9840121495,
   "cricheroes": 9840121495,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 104,
   "name": "PRAVEENKUMAR GUNASEKARAN",
   "mobileno": 9842793316,
   "cricheroes": 9842793316,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 105,
   "name": "Nivas Gowrishankar ",
   "mobileno": 9952674663,
   "cricheroes": 9952674663,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 106,
   "name": "Aravind",
   "mobileno": 8867612604,
   "cricheroes": 8867612604,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 107,
   "name": "GOKUL",
   "mobileno": 7845157557,
   "cricheroes": 7845157557,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 108,
   "name": "Aasip ",
   "mobileno": 6374898699,
   "cricheroes": 6374898699,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 109,
   "name": "DINESH KUMAR",
   "mobileno": 9566975100,
   "cricheroes": 9566975100,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 110,
   "name": "Rathish Saravanan",
   "mobileno": 8870037153,
   "cricheroes": 8870037153,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 111,
   "name": "Sivaram V",
   "mobileno": 9894893341,
   "cricheroes": 9894893341,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 112,
   "name": "Lohith. K. S",
   "mobileno": 7339555201,
   "cricheroes": 7339555201,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 113,
   "name": "PS Gowtham",
   "mobileno": 9952674663,
   "cricheroes": 9952674663,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 114,
   "name": "Gokulraaj ",
   "mobileno": 7299030373,
   "cricheroes": 7299030373,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 115,
   "name": "Arivazhagan",
   "mobileno": 9600229444,
   "cricheroes": 9600229444,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 116,
   "name": "Pradeep sekar",
   "mobileno": 9843672661,
   "cricheroes": 9843672661,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 117,
   "name": "Dj ananth",
   "mobileno": 9384384878,
   "cricheroes": 9384384878,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 118,
   "name": "Balasubramaniam k",
   "mobileno": 8940172602,
   "cricheroes": 8940172602,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 119,
   "name": "Dileep",
   "mobileno": 9597732965,
   "cricheroes": 9597732965,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 120,
   "name": "Alavudeen N",
   "mobileno": 6382476631,
   "cricheroes": 6382476631,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 121,
   "name": "Barani ",
   "mobileno": 6380403165,
   "cricheroes": 6380403165,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 122,
   "name": "Mani Mubarak ",
   "mobileno": 7010111747,
   "cricheroes": 8056766474,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 123,
   "name": "Sastha Madheswaran",
   "mobileno": 8344939170,
   "cricheroes": 8344939170,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 124,
   "name": "Udaya kumar",
   "mobileno": 9551807889,
   "cricheroes": 9551807889,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 125,
   "name": "ASHWIN KUMAR",
   "mobileno": 8056889550,
   "cricheroes": 8056889550,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 126,
   "name": "Taareeq",
   "mobileno": 7540054781,
   "cricheroes": 7540054781,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 127,
   "name": "SUNIL N",
   "mobileno": 9384538881,
   "cricheroes": 9384538881,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 128,
   "name": "Sarveshvar ",
   "mobileno": 9047875757,
   "cricheroes": 9047875757,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 129,
   "name": "B.saravanan",
   "mobileno": 9360146013,
   "cricheroes": 9715651924,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 130,
   "name": "SYED HUSSAIN S",
   "mobileno": 9894163925,
   "cricheroes": 9894163925,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 131,
   "name": "Karthik thangaraj",
   "mobileno": 8526383357,
   "cricheroes": 8526383357,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  },
  {
   "id": 132,
   "name": "KARTHICK",
   "mobileno": 8056482664,
   "cricheroes": 8056482664,
   "match_count": 0,
   "teamid": 8,
   "is_active": 1,
   "is_sold": 0,
   "is_cancel": 0
  }
 ]
  data.forEach(item => {
    connection.query('INSERT INTO players SET ?', {...item,teamid:8}, (err, res) => {
      if (err) {
        console.log(err)
        throw err;
      }
  
      console.log('Inserted row:', res.insertId);
    });
  });
  connection.end();