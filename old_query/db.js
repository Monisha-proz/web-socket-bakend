const mysql = require('mysql2');
// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cricket'
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
      "uuid": "3c56a1dd-127b-458e-9933-c447bd772ac8",
      "name": "Guadalupe Schuppe",
      "match_count": 5,
      "action": 6212,
      "profile_url": "https://picsum.photos/seed/e82f24cf-1bb2-430c-9c16-f3f4adde9f06/300/300",
      "role": "Batsman",
      "teamid": 4
    },
    {
      "id": 2,
      "uuid": "f196e550-53cc-4a00-877a-10a6e09bfdd7",
      "name": "Belinda Heidenreich",
      "match_count": 97,
      "action": 17175,
      "profile_url": "https://picsum.photos/seed/9746da4d-edc7-4c86-ab07-3279ab9fcd95/300/300",
      "role": "Batsman",
      "teamid": 7
    },
    {
      "id": 3,
      "uuid": "f755fb4e-1f9e-485b-b00f-c1408aa54ccc",
      "name": "Pearl Hettinger",
      "match_count": 48,
      "action": 14327,
      "profile_url": "https://picsum.photos/seed/a72c6ee7-7ed4-4e49-9f79-5b3c04c99f3d/300/300",
      "role": "All-rounder",
      "teamid": 1
    },
    {
      "id": 4,
      "uuid": "e0f63f58-8464-4d75-8f0c-a53c43f573bb",
      "name": "Denise Greenfelder",
      "match_count": 59,
      "action": 16068,
      "profile_url": "https://picsum.photos/seed/c1b7a02d-5633-44ae-b6c9-6c811afb8fe4/300/300",
      "role": "Bowler",
      "teamid": 8
    },
    {
      "id": 5,
      "uuid": "8e107b68-cbbf-4b68-bab3-09f2eebc1bd2",
      "name": "Andrea Mraz",
      "match_count": 39,
      "action": 8415,
      "profile_url": "https://picsum.photos/seed/9c4bf74b-371e-433e-9060-99c5ca06823e/300/300",
      "role": "All-rounder",
      "teamid": 8
    },
    {
      "id": 6,
      "uuid": "332d2c68-0076-4737-bb6c-f167e6b91fd6",
      "name": "Laura Lemke",
      "match_count": 69,
      "action": 22601,
      "profile_url": "https://picsum.photos/seed/cf2ed766-85a0-4468-bdd1-4fb2859d2434/300/300",
      "role": "Batsman",
      "teamid": 2
    },
    {
      "id": 7,
      "uuid": "15fc26b7-aa3e-483d-9ddb-df69cad2f888",
      "name": "Dianne Feest I",
      "match_count": 14,
      "action": 15164,
      "profile_url": "https://picsum.photos/seed/1bb920a2-1ccf-4a69-94dd-2e95d2d1b42e/300/300",
      "role": "Batsman",
      "teamid": 1
    },
    {
      "id": 8,
      "uuid": "149c6921-7634-4e3c-94e5-5b6f58fba133",
      "name": "Marjorie Runolfsdottir IV",
      "match_count": 99,
      "action": 1260,
      "profile_url": "https://picsum.photos/seed/5ca78119-f2a2-42d2-8e77-fda61e68c0ac/300/300",
      "role": "Bowler",
      "teamid": 8
    },
    {
      "id": 9,
      "uuid": "ca8f8887-1340-40de-9283-24a626427245",
      "name": "Myron Grant",
      "match_count": 65,
      "action": 19442,
      "profile_url": "https://picsum.photos/seed/94dac3a5-8bd2-4519-ae9c-e41754605fed/300/300",
      "role": "Wicketkeeper",
      "teamid": 5
    },
    {
      "id": 10,
      "uuid": "d1acc2d6-cefa-425b-a3b7-f10a8f2090da",
      "name": "Madeline Schamberger",
      "match_count": 41,
      "action": 8065,
      "profile_url": "https://picsum.photos/seed/8e6f7a08-672e-4df3-8d7a-30c17ccc6fe7/300/300",
      "role": "Wicketkeeper",
      "teamid": 1
    },
    {
      "id": 11,
      "uuid": "cb285ad2-5774-494b-b13d-2bf0d1290d6a",
      "name": "John Brekke-Cronin",
      "match_count": 14,
      "action": 1332,
      "profile_url": "https://picsum.photos/seed/b039784a-9c7b-4af7-bfbe-02a7337e5703/300/300",
      "role": "Bowler",
      "teamid": 2
    },
    {
      "id": 12,
      "uuid": "7f822fd4-6baa-4bd0-8a73-6ae970dabefe",
      "name": "Nathaniel Gorczany",
      "match_count": 98,
      "action": 22707,
      "profile_url": "https://picsum.photos/seed/3a8c4875-d30f-4142-97a1-b3a6c2184162/300/300",
      "role": "Batsman",
      "teamid": 10
    },
    {
      "id": 13,
      "uuid": "14be93f9-a8d0-41d5-a667-7402c6325a53",
      "name": "Bessie Maggio",
      "match_count": 13,
      "action": 3051,
      "profile_url": "https://picsum.photos/seed/7368e2b7-ec9f-44e4-9e08-37c0a2a5bd6f/300/300",
      "role": "Bowler",
      "teamid": 5
    },
    {
      "id": 14,
      "uuid": "ff690ef6-24c9-4271-b613-3f84bd969902",
      "name": "Ms. Ruth Lindgren V",
      "match_count": 64,
      "action": 24091,
      "profile_url": "https://picsum.photos/seed/5552e5ba-efd7-476c-b233-98b7f22cbbb0/300/300",
      "role": "All-rounder",
      "teamid": 2
    },
    {
      "id": 15,
      "uuid": "015380b2-c3b8-4c67-9686-8cf5c8f687d0",
      "name": "Mrs. Lillian Fritsch",
      "match_count": 25,
      "action": 5634,
      "profile_url": "https://picsum.photos/seed/c627a348-a42e-464e-97ce-a65f99663cc1/300/300",
      "role": "Wicketkeeper",
      "teamid": 9
    },
    {
      "id": 16,
      "uuid": "70090da0-a242-43c1-830e-163251164ee6",
      "name": "Stanley Braun",
      "match_count": 86,
      "action": 9741,
      "profile_url": "https://picsum.photos/seed/0ad7f9d4-c2b6-4688-83d9-168a8a688eb6/300/300",
      "role": "All-rounder",
      "teamid": 10
    },
    {
      "id": 17,
      "uuid": "64d402e2-d97f-4c88-8f3e-9e5ee91d0fa0",
      "name": "Terry Hermann",
      "match_count": 9,
      "action": 19203,
      "profile_url": "https://picsum.photos/seed/ff338e01-684a-45b7-af64-f8a1a63934c0/300/300",
      "role": "Wicketkeeper",
      "teamid": 6
    },
    {
      "id": 18,
      "uuid": "d8b4c27b-8727-4ba4-85bc-3c78372477db",
      "name": "Alexander Morissette",
      "match_count": 99,
      "action": 13646,
      "profile_url": "https://picsum.photos/seed/20aaff57-f894-4bad-bf2f-63ba63ed3634/300/300",
      "role": "All-rounder",
      "teamid": 10
    },
    {
      "id": 19,
      "uuid": "36209f10-e81a-4e01-9772-d5b99cafbf9b",
      "name": "Roxanne Tillman Sr.",
      "match_count": 65,
      "action": 6255,
      "profile_url": "https://picsum.photos/seed/fbf7d486-9da5-4190-9fac-b4bb3139a253/300/300",
      "role": "Bowler",
      "teamid": 1
    },
    {
      "id": 20,
      "uuid": "fc3545e2-161b-480e-9d32-4225dfe16803",
      "name": "Ted Deckow",
      "match_count": 29,
      "action": 4905,
      "profile_url": "https://picsum.photos/seed/f8814e8d-2549-4f59-b574-922bdf202d82/300/300",
      "role": "Batsman",
      "teamid": 2
    },
    {
      "id": 21,
      "uuid": "7f162b21-b6eb-4f18-915a-f58c87e33acf",
      "name": "Francis Gerlach",
      "match_count": 67,
      "action": 22549,
      "profile_url": "https://picsum.photos/seed/a006b6bf-b948-44bd-aaa7-df5e43dce631/300/300",
      "role": "Wicketkeeper",
      "teamid": 3
    },
    {
      "id": 22,
      "uuid": "c6c2ee7f-39b4-49c4-bcdd-ef1d5b2adb38",
      "name": "Alonzo Klein",
      "match_count": 85,
      "action": 13298,
      "profile_url": "https://picsum.photos/seed/98fb1c2f-247c-41ce-aad8-823d01b28a0c/300/300",
      "role": "Bowler",
      "teamid": 3
    },
    {
      "id": 23,
      "uuid": "39f73a0b-b485-4b5d-abbd-612566281f64",
      "name": "Gene Hills",
      "match_count": 6,
      "action": 17585,
      "profile_url": "https://picsum.photos/seed/a9687f66-7223-44f8-8fa5-95022a3e66c5/300/300",
      "role": "Wicketkeeper",
      "teamid": 7
    },
    {
      "id": 24,
      "uuid": "9e115e14-cd86-4cd3-8db6-51403b920c9d",
      "name": "Pat Herzog",
      "match_count": 87,
      "action": 12755,
      "profile_url": "https://picsum.photos/seed/de3146df-95e0-41bb-a70e-abd1393d2bdd/300/300",
      "role": "Wicketkeeper",
      "teamid": 3
    },
    {
      "id": 25,
      "uuid": "cf9d97a1-93a5-41de-85d7-bc4b4e7a898e",
      "name": "Alejandro Bechtelar",
      "match_count": 52,
      "action": 16292,
      "profile_url": "https://picsum.photos/seed/d53a0adf-eaf4-47b5-a865-a657ef45d356/300/300",
      "role": "All-rounder",
      "teamid": 3
    },
    {
      "id": 26,
      "uuid": "542a5f5a-287a-4492-953b-c9c79cae31cc",
      "name": "Dave West",
      "match_count": 74,
      "action": 14987,
      "profile_url": "https://picsum.photos/seed/2401ffbe-68f8-46ec-9a6c-c67c6647e401/300/300",
      "role": "All-rounder",
      "teamid": 10
    },
    {
      "id": 27,
      "uuid": "a16fd6d5-8564-45a6-a63f-40784b7f44b7",
      "name": "Ollie Howell",
      "match_count": 37,
      "action": 19606,
      "profile_url": "https://picsum.photos/seed/00d2b3f3-3213-42bd-aea5-6b33382494c1/300/300",
      "role": "Batsman",
      "teamid": 4
    },
    {
      "id": 28,
      "uuid": "3704793d-a817-41bc-97e9-160af3f1331a",
      "name": "Lauren Quigley",
      "match_count": 35,
      "action": 7475,
      "profile_url": "https://picsum.photos/seed/69f8f747-527b-41f3-bb92-b493765999e4/300/300",
      "role": "Bowler",
      "teamid": 3
    },
    {
      "id": 29,
      "uuid": "a865ec40-2c5c-4e93-a999-d3c433b8812e",
      "name": "Kim Connelly",
      "match_count": 41,
      "action": 9716,
      "profile_url": "https://picsum.photos/seed/a93c9892-5a2d-496f-bb09-9b10e872a3eb/300/300",
      "role": "Batsman",
      "teamid": 9
    },
    {
      "id": 30,
      "uuid": "30ea8bcb-a433-45c1-904c-3264219a97a6",
      "name": "Ignacio Stokes",
      "match_count": 11,
      "action": 11045,
      "profile_url": "https://picsum.photos/seed/be5cd941-f599-4b5e-b463-c474c201e820/300/300",
      "role": "Wicketkeeper",
      "teamid": 10
    },
    {
      "id": 31,
      "uuid": "1abf79d5-9581-419a-90eb-51eba262d55f",
      "name": "Olive Hagenes",
      "match_count": 31,
      "action": 6805,
      "profile_url": "https://picsum.photos/seed/6cc4a3ae-7ee0-42fe-bb53-14312e5e2316/300/300",
      "role": "Bowler",
      "teamid": 8
    },
    {
      "id": 32,
      "uuid": "4940448b-f12d-4885-86aa-050651b57676",
      "name": "Conrad Bogan",
      "match_count": 35,
      "action": 11132,
      "profile_url": "https://picsum.photos/seed/34c5e328-e8f3-40b3-bf7b-2a560da5ba36/300/300",
      "role": "All-rounder",
      "teamid": 1
    },
    {
      "id": 33,
      "uuid": "9965124d-b96d-494a-8328-1221a4b0c0bc",
      "name": "Clayton Weber",
      "match_count": 42,
      "action": 23605,
      "profile_url": "https://picsum.photos/seed/280a8eb5-bf4d-4cc1-8840-b2d73bf9edbc/300/300",
      "role": "Batsman",
      "teamid": 5
    },
    {
      "id": 34,
      "uuid": "7a00b5e5-aa9a-489d-9e5e-ac41b4e1b9c1",
      "name": "Roberto Gislason",
      "match_count": 48,
      "action": 2331,
      "profile_url": "https://picsum.photos/seed/b6a4511b-505d-44be-b627-7abd30fd38c4/300/300",
      "role": "Batsman",
      "teamid": 5
    },
    {
      "id": 35,
      "uuid": "6025f38f-c284-420c-85eb-1582c2edfd53",
      "name": "Claude Olson",
      "match_count": 37,
      "action": 11977,
      "profile_url": "https://picsum.photos/seed/fffe3295-e433-4161-aa0a-aec791c03761/300/300",
      "role": "Wicketkeeper",
      "teamid": 6
    },
    {
      "id": 36,
      "uuid": "8ad0b7f3-6371-4629-a5b9-f4faebbb0bff",
      "name": "Pedro Hamill",
      "match_count": 60,
      "action": 20472,
      "profile_url": "https://picsum.photos/seed/6d7dfa75-245d-40c8-8293-43b291788c9e/300/300",
      "role": "Batsman",
      "teamid": 10
    },
    {
      "id": 37,
      "uuid": "7d2ccd10-e871-469a-8ad6-8d4064d275aa",
      "name": "Johnnie Cassin",
      "match_count": 69,
      "action": 6865,
      "profile_url": "https://picsum.photos/seed/c13570ef-a53b-4d62-a979-88ec7b9c8a6a/300/300",
      "role": "Wicketkeeper",
      "teamid": 8
    },
    {
      "id": 38,
      "uuid": "c3ac94ba-39e4-47d7-a28e-2cf399fa87b7",
      "name": "Priscilla Walter",
      "match_count": 11,
      "action": 2124,
      "profile_url": "https://picsum.photos/seed/40647390-61aa-4089-9f72-254a32e69076/300/300",
      "role": "All-rounder",
      "teamid": 9
    },
    {
      "id": 39,
      "uuid": "f9ccccde-4529-468c-8c84-6a098e233452",
      "name": "Jeanne Yundt",
      "match_count": 20,
      "action": 8332,
      "profile_url": "https://picsum.photos/seed/eb19f7a3-cf43-4fd6-a656-6431b6b2725b/300/300",
      "role": "Bowler",
      "teamid": 6
    },
    {
      "id": 40,
      "uuid": "6ddc1b26-cd72-4264-819f-8550c9ebde0f",
      "name": "Bert Stokes",
      "match_count": 82,
      "action": 16082,
      "profile_url": "https://picsum.photos/seed/881ec43e-8fc7-4ba8-b8fd-06c7ffb91d28/300/300",
      "role": "All-rounder",
      "teamid": 9
    },
    {
      "id": 41,
      "uuid": "f603a7c9-7589-4f91-a0e7-05a191c1997b",
      "name": "Mona Wintheiser",
      "match_count": 47,
      "action": 14753,
      "profile_url": "https://picsum.photos/seed/e6e8910a-6b17-4876-92b3-4daea11380d4/300/300",
      "role": "Batsman",
      "teamid": 4
    },
    {
      "id": 42,
      "uuid": "22b0f37f-89b8-4f22-964e-b8f5a04249a7",
      "name": "Valerie Corkery",
      "match_count": 4,
      "action": 3889,
      "profile_url": "https://picsum.photos/seed/0ccf76ee-2e47-4adc-b4b0-96078ef5ef9b/300/300",
      "role": "Wicketkeeper",
      "teamid": 7
    },
    {
      "id": 43,
      "uuid": "6590578f-13ed-4587-8079-0713b5aa1c6e",
      "name": "Vickie Macejkovic",
      "match_count": 72,
      "action": 13539,
      "profile_url": "https://picsum.photos/seed/117376cc-4c45-4099-8f4e-129726762bd7/300/300",
      "role": "All-rounder",
      "teamid": 2
    },
    {
      "id": 44,
      "uuid": "75cf0132-b7f8-455a-b96a-4c4be41cbe6f",
      "name": "Edna Hickle",
      "match_count": 33,
      "action": 23602,
      "profile_url": "https://picsum.photos/seed/9807fd84-a5a3-48e9-aefa-7f9b8589eda0/300/300",
      "role": "Wicketkeeper",
      "teamid": 6
    },
    {
      "id": 45,
      "uuid": "a23dd67c-3df8-4f15-9de7-b0507b6196e7",
      "name": "Mr. Ervin Mante",
      "match_count": 23,
      "action": 2083,
      "profile_url": "https://picsum.photos/seed/d9e25bb1-7345-4d60-b43a-6313c2115d9a/300/300",
      "role": "All-rounder",
      "teamid": 3
    },
    {
      "id": 46,
      "uuid": "775a05a1-04ad-4685-9476-56e29a87226e",
      "name": "Corey Labadie",
      "match_count": 65,
      "action": 16278,
      "profile_url": "https://picsum.photos/seed/54709ae0-145f-4b51-9a06-72faa8a4c2c1/300/300",
      "role": "All-rounder",
      "teamid": 1
    },
    {
      "id": 47,
      "uuid": "39531030-0b41-4b1e-9636-05e1d098de46",
      "name": "Tara Beahan",
      "match_count": 48,
      "action": 15317,
      "profile_url": "https://picsum.photos/seed/707ec2f2-168e-4656-a84e-7a3668c606bc/300/300",
      "role": "All-rounder",
      "teamid": 8
    },
    {
      "id": 48,
      "uuid": "aca9ceae-00b6-44d1-83a2-7b772489ff11",
      "name": "Pamela Klocko III",
      "match_count": 85,
      "action": 6720,
      "profile_url": "https://picsum.photos/seed/0fdd2bd8-14a6-483b-b074-7c97cd64023f/300/300",
      "role": "Bowler",
      "teamid": 4
    },
    {
      "id": 49,
      "uuid": "149e68a3-ad0e-46c5-88bf-812fd88c6e7d",
      "name": "Sandy Schuster",
      "match_count": 65,
      "action": 7003,
      "profile_url": "https://picsum.photos/seed/0046144d-d2e3-43ab-9da3-8360eebfdf31/300/300",
      "role": "All-rounder",
      "teamid": 3
    },
    {
      "id": 50,
      "uuid": "92651845-0351-4294-86d8-9831d47928d6",
      "name": "Anthony Schaden",
      "match_count": 49,
      "action": 15765,
      "profile_url": "https://picsum.photos/seed/a52ce325-ae67-4f5c-8436-26c1e26762c3/300/300",
      "role": "Wicketkeeper",
      "teamid": 2
    },
    {
      "id": 51,
      "uuid": "cf4837b2-3fa0-4e66-a5c8-62cbf67985e2",
      "name": "Lauren Kihn",
      "match_count": 96,
      "action": 5449,
      "profile_url": "https://picsum.photos/seed/7f36e9d3-a7e3-4e4a-8435-720d6a1569f9/300/300",
      "role": "Wicketkeeper",
      "teamid": 10
    },
    {
      "id": 52,
      "uuid": "1281cfe0-aeb2-4102-bd48-9244f1679154",
      "name": "Dr. Dwight Rowe",
      "match_count": 63,
      "action": 22804,
      "profile_url": "https://picsum.photos/seed/db33e289-76fd-42cf-95e2-5b49afb58c40/300/300",
      "role": "Wicketkeeper",
      "teamid": 6
    },
    {
      "id": 53,
      "uuid": "80d3ecc3-3830-478a-9428-b88d160bd642",
      "name": "Miriam Brekke",
      "match_count": 48,
      "action": 13194,
      "profile_url": "https://picsum.photos/seed/87358a97-fd97-4745-9875-c607daa9c063/300/300",
      "role": "Batsman",
      "teamid": 2
    },
    {
      "id": 54,
      "uuid": "123faf8f-8461-460c-9bc3-e4688673aabb",
      "name": "Brittany West",
      "match_count": 46,
      "action": 14947,
      "profile_url": "https://picsum.photos/seed/072846fc-fc7b-448e-a699-d3f53db0c810/300/300",
      "role": "Bowler",
      "teamid": 10
    },
    {
      "id": 55,
      "uuid": "fc2eb243-27d7-4835-8df0-afead0b9e6cd",
      "name": "Mr. Barry Runolfsson",
      "match_count": 75,
      "action": 10115,
      "profile_url": "https://picsum.photos/seed/4e3023bc-4668-4ab0-b06b-dc3d231ec4d3/300/300",
      "role": "Bowler",
      "teamid": 5
    },
    {
      "id": 56,
      "uuid": "f8b11f32-ab9e-4944-af51-6f57e555ab6b",
      "name": "Cody Pagac",
      "match_count": 96,
      "action": 3676,
      "profile_url": "https://picsum.photos/seed/f7299aa6-1bb2-45b2-a2d3-5cb80efa3a9d/300/300",
      "role": "Batsman",
      "teamid": 6
    },
    {
      "id": 57,
      "uuid": "06d2578f-0bde-4494-a893-a24c00f0d558",
      "name": "Troy Yost",
      "match_count": 4,
      "action": 17692,
      "profile_url": "https://picsum.photos/seed/ceec61b0-7203-460f-beef-7797d66d6854/300/300",
      "role": "Batsman",
      "teamid": 6
    },
    {
      "id": 58,
      "uuid": "d6613f4e-66c3-471b-9360-3144d54646dd",
      "name": "Marc Jacobi",
      "match_count": 84,
      "action": 8808,
      "profile_url": "https://picsum.photos/seed/807a34b5-a7dd-4262-93c0-ddf50d1d6606/300/300",
      "role": "Batsman",
      "teamid": 4
    },
    {
      "id": 59,
      "uuid": "397394a3-d4af-4a59-9724-fbdfac9dd2fc",
      "name": "Nicholas Bartoletti",
      "match_count": 70,
      "action": 1416,
      "profile_url": "https://picsum.photos/seed/41458bfe-8383-4e46-80b7-eb07bfaca2aa/300/300",
      "role": "Batsman",
      "teamid": 9
    },
    {
      "id": 60,
      "uuid": "5d45665d-8d60-4755-aca5-4e90d85f988e",
      "name": "Vicky Kuphal",
      "match_count": 64,
      "action": 13081,
      "profile_url": "https://picsum.photos/seed/87d35c99-3d80-42e6-9550-8d37a25ffde1/300/300",
      "role": "All-rounder",
      "teamid": 7
    },
    {
      "id": 61,
      "uuid": "9e8623d1-5fbd-4a52-9560-50fec33c0255",
      "name": "Darrel Robel V",
      "match_count": 12,
      "action": 22737,
      "profile_url": "https://picsum.photos/seed/3a1393b3-1d25-4d49-b4b3-370c84e07e7d/300/300",
      "role": "Wicketkeeper",
      "teamid": 10
    },
    {
      "id": 62,
      "uuid": "ce7e4e4c-3098-41ce-b72c-0188ed85367e",
      "name": "Crystal Rau",
      "match_count": 66,
      "action": 21655,
      "profile_url": "https://picsum.photos/seed/48f9b06a-28d9-488d-964e-5fe86fb95157/300/300",
      "role": "Wicketkeeper",
      "teamid": 2
    },
    {
      "id": 63,
      "uuid": "263e7815-5b5b-4be0-a9f3-545b6d18e549",
      "name": "Kari Borer",
      "match_count": 75,
      "action": 2767,
      "profile_url": "https://picsum.photos/seed/a4ee7058-dbba-46c3-815c-7f67c995f2dc/300/300",
      "role": "All-rounder",
      "teamid": 4
    },
    {
      "id": 64,
      "uuid": "2424511b-b0a4-42d6-a189-18dabfde8dbe",
      "name": "Erika Dach DDS",
      "match_count": 38,
      "action": 11727,
      "profile_url": "https://picsum.photos/seed/7c562bad-f5d2-440c-825c-51d70fc70847/300/300",
      "role": "Bowler",
      "teamid": 4
    },
    {
      "id": 65,
      "uuid": "9a1b441d-71bf-4b63-b417-b1b0d3e19056",
      "name": "Ernesto Fahey",
      "match_count": 27,
      "action": 9210,
      "profile_url": "https://picsum.photos/seed/6eb55379-45bc-4261-9c73-2500e6e85c82/300/300",
      "role": "Wicketkeeper",
      "teamid": 7
    },
    {
      "id": 66,
      "uuid": "991aa4fa-47a8-4b62-a221-0a7b0704e00b",
      "name": "Tricia Quitzon",
      "match_count": 21,
      "action": 20434,
      "profile_url": "https://picsum.photos/seed/9d5c0fc3-0d6e-4d5f-88d6-e466c7d71b57/300/300",
      "role": "Batsman",
      "teamid": 1
    },
    {
      "id": 67,
      "uuid": "86282f8d-b473-4edb-9a98-57008bafafd1",
      "name": "Ada Hackett",
      "match_count": 80,
      "action": 18743,
      "profile_url": "https://picsum.photos/seed/b2cc497b-0fc3-41fc-9c45-bb0ddc7edfd1/300/300",
      "role": "Bowler",
      "teamid": 2
    },
    {
      "id": 68,
      "uuid": "90b54132-8a54-4a49-89f4-2e322a431971",
      "name": "Ruby Spencer",
      "match_count": 51,
      "action": 7748,
      "profile_url": "https://picsum.photos/seed/0cf26db0-d67f-4f03-8954-405fca456abf/300/300",
      "role": "Batsman",
      "teamid": 10
    },
    {
      "id": 69,
      "uuid": "bab0c831-9c01-47f1-88c5-1ba3fd41f33d",
      "name": "Kellie Lockman",
      "match_count": 26,
      "action": 16639,
      "profile_url": "https://picsum.photos/seed/7500026c-d65d-4c46-8ba9-51622d951e12/300/300",
      "role": "Bowler",
      "teamid": 1
    },
    {
      "id": 70,
      "uuid": "1793f8cc-c825-4139-b9d1-d5584f3f0fba",
      "name": "Dr. Winston Beatty",
      "match_count": 94,
      "action": 12953,
      "profile_url": "https://picsum.photos/seed/384b6fe0-03cb-4430-a598-6ff4ded96414/300/300",
      "role": "All-rounder",
      "teamid": 8
    },
    {
      "id": 71,
      "uuid": "8e8bfe05-82fc-4704-afc4-f6aee6448ff2",
      "name": "Troy Weimann",
      "match_count": 55,
      "action": 4921,
      "profile_url": "https://picsum.photos/seed/6fdecf4c-69ed-48de-85ce-f560cdaae240/300/300",
      "role": "All-rounder",
      "teamid": 5
    },
    {
      "id": 72,
      "uuid": "18fb7c2b-4ab7-4798-ac0a-c8d3601fffec",
      "name": "Harry Towne",
      "match_count": 21,
      "action": 19895,
      "profile_url": "https://picsum.photos/seed/adccd10b-7213-464a-9006-c89f4352d43f/300/300",
      "role": "Bowler",
      "teamid": 3
    },
    {
      "id": 73,
      "uuid": "7bcf825a-2fbb-4c10-a271-c4cc15f72dac",
      "name": "Casey Torp Sr.",
      "match_count": 34,
      "action": 1225,
      "profile_url": "https://picsum.photos/seed/21366c3c-4ac9-493f-9bde-fcd173e976ad/300/300",
      "role": "Batsman",
      "teamid": 8
    },
    {
      "id": 74,
      "uuid": "c6e7b72a-6287-4a18-9f99-09e453faf0ef",
      "name": "Craig Bailey",
      "match_count": 70,
      "action": 2363,
      "profile_url": "https://picsum.photos/seed/176ce93f-e0b0-462a-b873-8f4dec99d462/300/300",
      "role": "All-rounder",
      "teamid": 5
    },
    {
      "id": 75,
      "uuid": "18e2b281-10f9-4b6a-958c-9c690d9a2138",
      "name": "Matthew Hammes",
      "match_count": 1,
      "action": 5205,
      "profile_url": "https://picsum.photos/seed/3c08a183-0ced-417f-96cc-68616a2ef716/300/300",
      "role": "All-rounder",
      "teamid": 2
    },
    {
      "id": 76,
      "uuid": "79193379-d546-464b-ab64-9dbdf1d1b181",
      "name": "Darlene Wuckert",
      "match_count": 77,
      "action": 10247,
      "profile_url": "https://picsum.photos/seed/9678c12b-6345-4206-9069-6e72baf04c84/300/300",
      "role": "Bowler",
      "teamid": 10
    },
    {
      "id": 77,
      "uuid": "4b303231-c326-462f-a8ea-afec0ddc9006",
      "name": "Edwin Bogisich",
      "match_count": 44,
      "action": 17716,
      "profile_url": "https://picsum.photos/seed/5428d624-e46e-4fe3-a82d-193c5f7ff94a/300/300",
      "role": "Bowler",
      "teamid": 6
    },
    {
      "id": 78,
      "uuid": "3fdfd43f-22fe-4105-9fc5-c7e97afd1558",
      "name": "Kurt Lesch",
      "match_count": 64,
      "action": 13913,
      "profile_url": "https://picsum.photos/seed/3e3d9e23-5795-4e6f-b7af-97fca118871c/300/300",
      "role": "Wicketkeeper",
      "teamid": 8
    },
    {
      "id": 79,
      "uuid": "5c0bd07f-8a7a-4d6c-b569-177bb9c869d7",
      "name": "Abraham Breitenberg",
      "match_count": 97,
      "action": 4867,
      "profile_url": "https://picsum.photos/seed/38d3a34f-1505-4df3-ba2f-77c19be5dc0b/300/300",
      "role": "Bowler",
      "teamid": 2
    },
    {
      "id": 80,
      "uuid": "08401ee8-b38a-4b33-8a70-e025929ed832",
      "name": "Mr. Hugh Bernhard",
      "match_count": 22,
      "action": 18141,
      "profile_url": "https://picsum.photos/seed/cf8bb12a-6ef2-4ac0-a5a6-8e7f19dce1fb/300/300",
      "role": "Bowler",
      "teamid": 8
    },
    {
      "id": 81,
      "uuid": "02cf27f3-4dcb-4ba2-9e43-bed7926f3069",
      "name": "Stacey Turcotte",
      "match_count": 23,
      "action": 16911,
      "profile_url": "https://picsum.photos/seed/0dc051db-c4b3-4f41-9884-151583331cc2/300/300",
      "role": "Batsman",
      "teamid": 7
    },
    {
      "id": 82,
      "uuid": "457699cd-001f-46d6-ba2a-fbb3f81152a8",
      "name": "Ramiro Boehm",
      "match_count": 52,
      "action": 20683,
      "profile_url": "https://picsum.photos/seed/13f7c06d-ab15-40fe-bf80-204c3ae7c437/300/300",
      "role": "Batsman",
      "teamid": 7
    },
    {
      "id": 83,
      "uuid": "4ac1b2df-50c4-4e6c-b0ef-185503710542",
      "name": "Joey Schamberger",
      "match_count": 31,
      "action": 18482,
      "profile_url": "https://picsum.photos/seed/13532fc2-1ce1-4ea5-9a65-909b30cc823a/300/300",
      "role": "All-rounder",
      "teamid": 4
    },
    {
      "id": 84,
      "uuid": "c1f9f23a-5730-4502-b6dc-2504aa83457c",
      "name": "Andre Hartmann",
      "match_count": 37,
      "action": 3361,
      "profile_url": "https://picsum.photos/seed/76ece45d-7494-4220-aa7c-6ded93c07a06/300/300",
      "role": "Batsman",
      "teamid": 4
    },
    {
      "id": 85,
      "uuid": "bd0faa2e-2d4f-41db-8759-f8b4ab6a74ea",
      "name": "Gerald Dooley",
      "match_count": 65,
      "action": 12236,
      "profile_url": "https://picsum.photos/seed/17cc4bb9-23b3-404a-bb54-8811e416ecf9/300/300",
      "role": "Batsman",
      "teamid": 6
    },
    {
      "id": 86,
      "uuid": "c4b75ef2-bce9-4afd-8fd8-b7147a732085",
      "name": "Dwayne Treutel",
      "match_count": 35,
      "action": 10176,
      "profile_url": "https://picsum.photos/seed/8a864537-c151-4753-a46e-f62de2ad1280/300/300",
      "role": "Wicketkeeper",
      "teamid": 5
    },
    {
      "id": 87,
      "uuid": "64975106-b6eb-4288-a971-c7fdbbe71762",
      "name": "Melba McGlynn DVM",
      "match_count": 31,
      "action": 17328,
      "profile_url": "https://picsum.photos/seed/e5b78cc6-a0d1-4ed0-a338-ae2967c79333/300/300",
      "role": "Bowler",
      "teamid": 10
    },
    {
      "id": 88,
      "uuid": "9c18eee6-0cd7-4a29-b3c5-4b63b5db3a01",
      "name": "Amy Reinger V",
      "match_count": 73,
      "action": 21473,
      "profile_url": "https://picsum.photos/seed/3c0fb5ac-a7af-43cd-ab4c-8ea902145f5e/300/300",
      "role": "Wicketkeeper",
      "teamid": 1
    },
    {
      "id": 89,
      "uuid": "0d709dc2-268b-4b8e-b2f0-8de5cdd2c19a",
      "name": "Bennie Zulauf II",
      "match_count": 2,
      "action": 7268,
      "profile_url": "https://picsum.photos/seed/17a7db48-deac-47db-a0aa-3198f991a0b6/300/300",
      "role": "All-rounder",
      "teamid": 10
    },
    {
      "id": 90,
      "uuid": "60325065-c91e-40a3-bbd8-a16e0c880bd6",
      "name": "Kay Herzog",
      "match_count": 36,
      "action": 22809,
      "profile_url": "https://picsum.photos/seed/514d9538-37ca-43c1-82f5-01ef6515a4f7/300/300",
      "role": "Wicketkeeper",
      "teamid": 8
    },
    {
      "id": 91,
      "uuid": "0046fcaf-9277-4c19-8f92-744d14bc922c",
      "name": "Dr. Sally Hilpert Sr.",
      "match_count": 81,
      "action": 23660,
      "profile_url": "https://picsum.photos/seed/a11e00f3-a467-4e5d-a381-7ec49afc8ee1/300/300",
      "role": "Batsman",
      "teamid": 1
    },
    {
      "id": 92,
      "uuid": "169c1f6d-bc98-40a4-a01f-48afb6223536",
      "name": "Miss Pamela Murazik",
      "match_count": 33,
      "action": 12425,
      "profile_url": "https://picsum.photos/seed/850636f7-f72c-4f5f-bcd5-886267a6d085/300/300",
      "role": "All-rounder",
      "teamid": 3
    },
    {
      "id": 93,
      "uuid": "34998f27-d141-41b6-9b35-20a37b18b121",
      "name": "Ms. Cathy Buckridge",
      "match_count": 92,
      "action": 9369,
      "profile_url": "https://picsum.photos/seed/5223472d-522e-4c6e-911f-ccce1b18bd1a/300/300",
      "role": "Bowler",
      "teamid": 9
    },
    {
      "id": 94,
      "uuid": "5a6ee24d-de53-4747-af90-5d18ab3dbacc",
      "name": "Irvin Lowe",
      "match_count": 21,
      "action": 10402,
      "profile_url": "https://picsum.photos/seed/7f9b7022-acfb-4313-ae92-739279369ac9/300/300",
      "role": "Wicketkeeper",
      "teamid": 3
    },
    {
      "id": 95,
      "uuid": "7756a015-e415-4ce8-827c-50fed282ffc6",
      "name": "Jeanne Reinger",
      "match_count": 58,
      "action": 23536,
      "profile_url": "https://picsum.photos/seed/62e80ac5-4c23-4a03-870d-4a9ca7693b2b/300/300",
      "role": "Batsman",
      "teamid": 3
    },
    {
      "id": 96,
      "uuid": "33839476-22af-49c8-a6b5-7e80b0bf1b92",
      "name": "Bob Erdman",
      "match_count": 34,
      "action": 12218,
      "profile_url": "https://picsum.photos/seed/79b3cec7-d3ab-4471-af46-93204ecd9a38/300/300",
      "role": "Bowler",
      "teamid": 9
    },
    {
      "id": 97,
      "uuid": "a35613f7-61fa-48f7-9de9-640a75344f79",
      "name": "Maryann Carroll",
      "match_count": 83,
      "action": 16259,
      "profile_url": "https://picsum.photos/seed/0a4827b4-dfff-420d-a1a3-dca3db21f6fd/300/300",
      "role": "Wicketkeeper",
      "teamid": 7
    },
    {
      "id": 98,
      "uuid": "83bbe9b9-211d-4f51-9ea3-07d7427ccc56",
      "name": "Ms. Suzanne Schmidt",
      "match_count": 93,
      "action": 20562,
      "profile_url": "https://picsum.photos/seed/bcd58400-120e-486a-810b-7eaf78965870/300/300",
      "role": "Wicketkeeper",
      "teamid": 5
    },
    {
      "id": 99,
      "uuid": "2ab4ba53-ba55-4da0-9dfa-6385a3af4646",
      "name": "Ms. Eunice Rohan",
      "match_count": 10,
      "action": 24617,
      "profile_url": "https://picsum.photos/seed/0a78a8a8-e783-4220-9289-0c9fd6271cd2/300/300",
      "role": "All-rounder",
      "teamid": 9
    },
    {
      "id": 100,
      "uuid": "277135d7-d4a2-4e1b-954c-3c483a9a9dae",
      "name": "Jessie Satterfield",
      "match_count": 50,
      "action": 5500,
      "profile_url": "https://picsum.photos/seed/3dcbb723-e18c-4e56-a9ad-162007e5f9a0/300/300",
      "role": "Wicketkeeper",
      "teamid": 4
    },
    {
      "id": 101,
      "uuid": "ed69a383-497d-4481-a411-21b0f81f4a31",
      "name": "Faye Cartwright MD",
      "match_count": 44,
      "action": 12211,
      "profile_url": "https://picsum.photos/seed/96f63849-ce0e-49f5-a622-af096ae59bac/300/300",
      "role": "Wicketkeeper",
      "teamid": 1
    },
    {
      "id": 102,
      "uuid": "b8e4e83f-bcd6-4f07-baf6-67d752deb99e",
      "name": "Marlene Turner Sr.",
      "match_count": 62,
      "action": 7141,
      "profile_url": "https://picsum.photos/seed/00ab2377-82a9-4ec1-a437-851bace44059/300/300",
      "role": "Bowler",
      "teamid": 8
    },
    {
      "id": 103,
      "uuid": "b4403d44-084c-4ad9-b6a6-2ef234dc7f79",
      "name": "Douglas Hamill PhD",
      "match_count": 10,
      "action": 6681,
      "profile_url": "https://picsum.photos/seed/deffcf10-7048-4c0d-b826-9b7fdd64d507/300/300",
      "role": "Bowler",
      "teamid": 1
    },
    {
      "id": 104,
      "uuid": "c0e2d6b8-cc4d-4ef2-8191-3f805aa5e9c4",
      "name": "Ms. Sarah Cronin",
      "match_count": 69,
      "action": 9837,
      "profile_url": "https://picsum.photos/seed/b49a0c4d-e711-49a4-85d2-4b38878bc2cd/300/300",
      "role": "Wicketkeeper",
      "teamid": 1
    },
    {
      "id": 105,
      "uuid": "6c396f97-bcbc-4e70-9a31-9897911c89af",
      "name": "Leland Quigley PhD",
      "match_count": 29,
      "action": 2242,
      "profile_url": "https://picsum.photos/seed/0d80c3d0-b31a-4c9b-b3f9-0131fa475004/300/300",
      "role": "Bowler",
      "teamid": 3
    },
    {
      "id": 106,
      "uuid": "95c653db-9487-4fef-bfa8-7ae06996b09e",
      "name": "Shirley Simonis Jr.",
      "match_count": 9,
      "action": 11781,
      "profile_url": "https://picsum.photos/seed/ed0bbcd7-bf2b-419a-882b-cf94205e4cc9/300/300",
      "role": "Bowler",
      "teamid": 7
    },
    {
      "id": 107,
      "uuid": "3bc44d9e-9486-4e3f-95dc-eec5fce52ce0",
      "name": "Omar Rolfson",
      "match_count": 79,
      "action": 12598,
      "profile_url": "https://picsum.photos/seed/90c90379-c1e1-49ed-8c11-a71d8343a872/300/300",
      "role": "All-rounder",
      "teamid": 4
    },
    {
      "id": 108,
      "uuid": "b9b7bb7f-0422-45ce-91f9-c9bc801e7098",
      "name": "Casey Wehner",
      "match_count": 82,
      "action": 11978,
      "profile_url": "https://picsum.photos/seed/7305045d-efbd-40ea-85e2-c8cbf6ea5343/300/300",
      "role": "Batsman",
      "teamid": 8
    },
    {
      "id": 109,
      "uuid": "11dfe17d-82ff-418e-80a6-e22ea49d3019",
      "name": "Darrel VonRueden",
      "match_count": 89,
      "action": 5686,
      "profile_url": "https://picsum.photos/seed/d460171f-9bd2-4e51-8234-311ffc56c683/300/300",
      "role": "Wicketkeeper",
      "teamid": 5
    },
    {
      "id": 110,
      "uuid": "4d3e4fdc-0b5c-4fd7-81a7-3380f591f46e",
      "name": "Mrs. Glenda Pagac-Christiansen",
      "match_count": 41,
      "action": 4098,
      "profile_url": "https://picsum.photos/seed/9d6decc8-04f8-4461-9cf5-3e39b3086198/300/300",
      "role": "Batsman",
      "teamid": 9
    },
    {
      "id": 111,
      "uuid": "4f24ee97-210b-48d3-92fa-369c96bb752b",
      "name": "Jon Franecki",
      "match_count": 23,
      "action": 14879,
      "profile_url": "https://picsum.photos/seed/f5607666-aa7c-43a3-aee8-9cec9a01d0b8/300/300",
      "role": "Bowler",
      "teamid": 2
    },
    {
      "id": 112,
      "uuid": "b8365ba1-0cd8-41ad-8127-ac7cdeab5324",
      "name": "Mitchell Pagac",
      "match_count": 31,
      "action": 4107,
      "profile_url": "https://picsum.photos/seed/2f2400f8-6a34-4f08-8f34-2e62f3c78c8e/300/300",
      "role": "Wicketkeeper",
      "teamid": 3
    },
    {
      "id": 113,
      "uuid": "edc04a78-c0ab-4b60-ac88-79e6fe35e6a3",
      "name": "Lance Nicolas",
      "match_count": 65,
      "action": 16542,
      "profile_url": "https://picsum.photos/seed/7face522-f8a4-4de3-bd57-171883a54e96/300/300",
      "role": "Batsman",
      "teamid": 5
    },
    {
      "id": 114,
      "uuid": "9efaf264-b1d4-4711-b548-7eb907195a3e",
      "name": "Miss Emily Hane",
      "match_count": 9,
      "action": 10904,
      "profile_url": "https://picsum.photos/seed/1099020e-4102-46a8-a418-d03459ba8086/300/300",
      "role": "Wicketkeeper",
      "teamid": 5
    },
    {
      "id": 115,
      "uuid": "17c26dad-9b13-475b-acdf-19bb04cc22af",
      "name": "Cedric Kuphal",
      "match_count": 93,
      "action": 10687,
      "profile_url": "https://picsum.photos/seed/fd66eba6-057b-4cdd-938c-8a26581adbae/300/300",
      "role": "Wicketkeeper",
      "teamid": 7
    },
    {
      "id": 116,
      "uuid": "130ae6b5-6fd0-43ed-91ed-1c7bb4175257",
      "name": "Ervin Marks",
      "match_count": 52,
      "action": 1503,
      "profile_url": "https://picsum.photos/seed/5f23f3fa-b554-4a68-9ae3-7c5a991d8fc0/300/300",
      "role": "Bowler",
      "teamid": 4
    },
    {
      "id": 117,
      "uuid": "18892e74-b0ec-4eab-ae81-d0a3345ebabd",
      "name": "Essie Mohr",
      "match_count": 33,
      "action": 5089,
      "profile_url": "https://picsum.photos/seed/5cefdce7-1641-49f6-b154-5ea0e2e731d5/300/300",
      "role": "Bowler",
      "teamid": 6
    },
    {
      "id": 118,
      "uuid": "50eb5ddb-5f1e-402b-b2af-e436cdf14e6a",
      "name": "Janie Kirlin",
      "match_count": 24,
      "action": 4603,
      "profile_url": "https://picsum.photos/seed/d03ba010-218f-4715-8252-6f241cc92331/300/300",
      "role": "All-rounder",
      "teamid": 9
    },
    {
      "id": 119,
      "uuid": "46239173-1429-49e8-aabe-f9f914e21946",
      "name": "Gilbert Christiansen",
      "match_count": 93,
      "action": 15842,
      "profile_url": "https://picsum.photos/seed/5baaaf0b-c822-42c4-88ab-86ef52a6f1bf/300/300",
      "role": "All-rounder",
      "teamid": 7
    },
    {
      "id": 120,
      "uuid": "0368451c-f519-4974-9603-afe07d484f43",
      "name": "Melody Gutkowski V",
      "match_count": 69,
      "action": 13513,
      "profile_url": "https://picsum.photos/seed/29fc95f1-53bb-4244-b330-36ab65b1cfdc/300/300",
      "role": "All-rounder",
      "teamid": 2
    },
    {
      "id": 121,
      "uuid": "6787614b-1aae-42e2-bba5-ab58663fb884",
      "name": "Jana Davis",
      "match_count": 71,
      "action": 23085,
      "profile_url": "https://picsum.photos/seed/150a9bad-5af0-42bf-926f-b9ebe4fb4dd1/300/300",
      "role": "Bowler",
      "teamid": 9
    },
    {
      "id": 122,
      "uuid": "e55fe9e6-5e97-4fb0-93c4-cb79477bc223",
      "name": "Erica Legros",
      "match_count": 22,
      "action": 23904,
      "profile_url": "https://picsum.photos/seed/4dffc565-547e-4393-8449-0bfb1cc80434/300/300",
      "role": "Batsman",
      "teamid": 10
    },
    {
      "id": 123,
      "uuid": "10d8e690-11c6-4075-9217-af84ad0cd179",
      "name": "Byron Hauck",
      "match_count": 87,
      "action": 15945,
      "profile_url": "https://picsum.photos/seed/ebc41392-9fc3-4d2f-ada8-ffb1d32000fd/300/300",
      "role": "All-rounder",
      "teamid": 5
    },
    {
      "id": 124,
      "uuid": "2d60eba1-ab38-4ef2-9500-949f128e9359",
      "name": "Cesar Leuschke",
      "match_count": 13,
      "action": 5099,
      "profile_url": "https://picsum.photos/seed/e6e9918a-a24a-47e1-9716-2431ebc5cf70/300/300",
      "role": "Bowler",
      "teamid": 1
    },
    {
      "id": 125,
      "uuid": "91708f0b-a132-4ed4-a72e-76a756865a18",
      "name": "Chelsea Waelchi",
      "match_count": 76,
      "action": 24343,
      "profile_url": "https://picsum.photos/seed/60b3386b-73cc-4bf4-b833-138ab67c048a/300/300",
      "role": "Bowler",
      "teamid": 4
    },
    {
      "id": 126,
      "uuid": "dd56c778-d6ca-4a76-a0f3-cf6cc6dd957a",
      "name": "Clifton Kuhic",
      "match_count": 91,
      "action": 3786,
      "profile_url": "https://picsum.photos/seed/aa54b000-4a78-4428-910c-0d5be15bcd31/300/300",
      "role": "Bowler",
      "teamid": 1
    },
    {
      "id": 127,
      "uuid": "a0e97103-3f39-486f-969e-9d300f0e7e24",
      "name": "Bryant Cummings",
      "match_count": 60,
      "action": 8175,
      "profile_url": "https://picsum.photos/seed/eb34ff3e-e181-44a3-8638-3cac551f167d/300/300",
      "role": "Batsman",
      "teamid": 1
    },
    {
      "id": 128,
      "uuid": "b79cd3da-af34-4972-b194-179652d574ad",
      "name": "Allan Bahringer",
      "match_count": 62,
      "action": 12602,
      "profile_url": "https://picsum.photos/seed/ec22a249-fb1f-477f-9c35-a0443201cb07/300/300",
      "role": "Batsman",
      "teamid": 6
    },
    {
      "id": 129,
      "uuid": "8bb439ae-4331-4cdc-9d56-d01fd218a01d",
      "name": "Janet Crooks-Reynolds",
      "match_count": 26,
      "action": 11610,
      "profile_url": "https://picsum.photos/seed/2b5d1769-d798-4851-93c3-ee02b9c89da3/300/300",
      "role": "Wicketkeeper",
      "teamid": 5
    },
    {
      "id": 130,
      "uuid": "e876caac-69a6-4761-9378-18c887d3de77",
      "name": "Ira Kreiger",
      "match_count": 56,
      "action": 19137,
      "profile_url": "https://picsum.photos/seed/d8ca71f5-4e77-4f57-b7ff-7aa53582fe06/300/300",
      "role": "All-rounder",
      "teamid": 3
    },
    {
      "id": 131,
      "uuid": "2cd8863c-0a7f-46db-868f-5f43c07974f6",
      "name": "Lamar West",
      "match_count": 83,
      "action": 3075,
      "profile_url": "https://picsum.photos/seed/2343a61a-a406-4226-ae32-889b68a00b68/300/300",
      "role": "All-rounder",
      "teamid": 2
    },
    {
      "id": 132,
      "uuid": "0759dc68-99d9-4c92-bc5b-1edbf72e5149",
      "name": "Jamie Ankunding",
      "match_count": 8,
      "action": 6897,
      "profile_url": "https://picsum.photos/seed/e6a4fc0c-e97c-464f-aa09-158f7c803e5d/300/300",
      "role": "Bowler",
      "teamid": 5
    },
    {
      "id": 133,
      "uuid": "0ea033e6-8e73-458a-8bf5-34b25ebf8195",
      "name": "Angel Oberbrunner",
      "match_count": 53,
      "action": 21248,
      "profile_url": "https://picsum.photos/seed/7bdca5f3-3813-4c3f-af09-6a006a5886ce/300/300",
      "role": "Bowler",
      "teamid": 10
    },
    {
      "id": 134,
      "uuid": "37188312-5c97-4098-88ee-903c5b4d2a5d",
      "name": "Jay Friesen",
      "match_count": 14,
      "action": 15887,
      "profile_url": "https://picsum.photos/seed/f07e8b7f-b66d-4b44-9dbb-daab9d78298f/300/300",
      "role": "Bowler",
      "teamid": 1
    },
    {
      "id": 135,
      "uuid": "0295ad13-6a34-49e9-8c66-489f799b3a88",
      "name": "Erica Weissnat",
      "match_count": 18,
      "action": 23769,
      "profile_url": "https://picsum.photos/seed/2fa2bdab-60af-4eb5-8370-fbb59c146690/300/300",
      "role": "Wicketkeeper",
      "teamid": 3
    },
    {
      "id": 136,
      "uuid": "35161841-1cd5-4ca2-b955-35b977b32829",
      "name": "Lucia Mayert",
      "match_count": 30,
      "action": 21676,
      "profile_url": "https://picsum.photos/seed/54ff95a9-709a-4c79-8058-0f61db207916/300/300",
      "role": "Wicketkeeper",
      "teamid": 9
    },
    {
      "id": 137,
      "uuid": "84fcc57b-c06c-4eef-aab6-e826c269e056",
      "name": "Tyrone Bauch",
      "match_count": 36,
      "action": 16697,
      "profile_url": "https://picsum.photos/seed/b95d214f-ab7b-4f40-bc32-3c9a8b30a21d/300/300",
      "role": "All-rounder",
      "teamid": 8
    },
    {
      "id": 138,
      "uuid": "da32a6ae-1da8-4dd8-868d-4e0b1865232e",
      "name": "Lauren Pacocha",
      "match_count": 14,
      "action": 21767,
      "profile_url": "https://picsum.photos/seed/81f359b4-045e-4650-8d4a-28ba9a39ace8/300/300",
      "role": "Batsman",
      "teamid": 3
    },
    {
      "id": 139,
      "uuid": "708c7f4b-b997-4aa5-8137-d66c4315bf69",
      "name": "Carl Veum",
      "match_count": 45,
      "action": 14293,
      "profile_url": "https://picsum.photos/seed/fd8b5246-c1a4-4e59-9785-14c5b3e11e98/300/300",
      "role": "All-rounder",
      "teamid": 3
    },
    {
      "id": 140,
      "uuid": "b4a62921-74b2-4027-b78a-dbfd9bbcb718",
      "name": "Bryant Klocko",
      "match_count": 29,
      "action": 24026,
      "profile_url": "https://picsum.photos/seed/dc6bc88c-a43c-44e5-881b-91a35f2cf6b3/300/300",
      "role": "Bowler",
      "teamid": 6
    },
    {
      "id": 141,
      "uuid": "477a1108-05e6-47ac-aafa-b14afc0de678",
      "name": "Jeffrey Schaefer",
      "match_count": 56,
      "action": 15618,
      "profile_url": "https://picsum.photos/seed/7621532d-c310-43a1-ac83-4790940abece/300/300",
      "role": "Batsman",
      "teamid": 4
    },
    {
      "id": 142,
      "uuid": "dd4b8e67-03d3-4fa0-9b8a-0d7a061f8241",
      "name": "Matt Wisozk",
      "match_count": 31,
      "action": 24652,
      "profile_url": "https://picsum.photos/seed/43eb70e3-a15f-4609-bb23-6b7aefae1087/300/300",
      "role": "Batsman",
      "teamid": 8
    },
    {
      "id": 143,
      "uuid": "f3be1940-c76c-4fa9-83d6-a4198dc089d5",
      "name": "Hector Gerhold",
      "match_count": 29,
      "action": 16360,
      "profile_url": "https://picsum.photos/seed/295a67aa-ad4b-4072-9246-23e5b6124595/300/300",
      "role": "All-rounder",
      "teamid": 1
    },
    {
      "id": 144,
      "uuid": "643e2cf8-1415-4146-b87c-0d6f9e649245",
      "name": "Cameron Harber",
      "match_count": 19,
      "action": 21260,
      "profile_url": "https://picsum.photos/seed/167097d5-e347-4f86-bd9a-c15136fe151a/300/300",
      "role": "All-rounder",
      "teamid": 9
    },
    {
      "id": 145,
      "uuid": "b013081a-6af8-4840-a498-c2dfff50405c",
      "name": "Lionel Dibbert",
      "match_count": 49,
      "action": 8297,
      "profile_url": "https://picsum.photos/seed/093b6ac8-6e29-4f58-9e08-dd85c269bb8a/300/300",
      "role": "Bowler",
      "teamid": 9
    },
    {
      "id": 146,
      "uuid": "dc35fe75-0318-4678-b068-45810547d928",
      "name": "Roosevelt Dickinson",
      "match_count": 17,
      "action": 3920,
      "profile_url": "https://picsum.photos/seed/3e991496-699c-47de-8be0-1aee1089d92d/300/300",
      "role": "All-rounder",
      "teamid": 1
    },
    {
      "id": 147,
      "uuid": "d91e2424-e221-4355-9a03-4a66f22ffc23",
      "name": "Dr. Clifton Ernser",
      "match_count": 69,
      "action": 11586,
      "profile_url": "https://picsum.photos/seed/7ae55688-29c4-4940-932e-8bb2279b86a9/300/300",
      "role": "Bowler",
      "teamid": 3
    },
    {
      "id": 148,
      "uuid": "503c3315-5edb-42f8-b129-f7d3d36f51d7",
      "name": "Mr. Darrin Lowe",
      "match_count": 40,
      "action": 15910,
      "profile_url": "https://picsum.photos/seed/94fed681-dc67-41e2-ae55-a1fc88c8ca14/300/300",
      "role": "Wicketkeeper",
      "teamid": 3
    },
    {
      "id": 149,
      "uuid": "bca3b7c8-2749-486d-a09c-eb6e7fb0431c",
      "name": "Dr. William Hamill",
      "match_count": 3,
      "action": 7732,
      "profile_url": "https://picsum.photos/seed/acedc9ef-2e0c-451e-9be2-ee5c7283b94c/300/300",
      "role": "All-rounder",
      "teamid": 2
    },
    {
      "id": 150,
      "uuid": "de19ee3a-6c43-443a-aa4c-63680a5257b1",
      "name": "Kari Dibbert",
      "match_count": 36,
      "action": 6408,
      "profile_url": "https://picsum.photos/seed/88327617-ab19-4827-a812-382b4f08ead1/300/300",
      "role": "Bowler",
      "teamid": 4
    },
    {
      "id": 151,
      "uuid": "d84bea35-fa9a-4997-a832-cab0b7e27e54",
      "name": "Dennis Connelly",
      "match_count": 34,
      "action": 15093,
      "profile_url": "https://picsum.photos/seed/d76934ab-635c-46c7-b974-6f8bcddbc1c6/300/300",
      "role": "Wicketkeeper",
      "teamid": 9
    },
    {
      "id": 152,
      "uuid": "960cef4f-cf05-4712-8aea-a9f647558ece",
      "name": "Bridget Pollich",
      "match_count": 60,
      "action": 15448,
      "profile_url": "https://picsum.photos/seed/fff00af5-a8d3-4477-894a-1b224e5168a5/300/300",
      "role": "Bowler",
      "teamid": 5
    },
    {
      "id": 153,
      "uuid": "e7222b6c-0a8d-4787-a947-4089fcc031da",
      "name": "George Watsica",
      "match_count": 86,
      "action": 9519,
      "profile_url": "https://picsum.photos/seed/5b557e8d-c376-49c5-9b7b-851dd770ef13/300/300",
      "role": "Wicketkeeper",
      "teamid": 2
    },
    {
      "id": 154,
      "uuid": "c0d94496-1b6e-41c8-924e-1090b35e3eda",
      "name": "Kathleen Lakin",
      "match_count": 22,
      "action": 19509,
      "profile_url": "https://picsum.photos/seed/50002136-11fa-4905-a3bf-9818246f42df/300/300",
      "role": "Batsman",
      "teamid": 9
    },
    {
      "id": 155,
      "uuid": "e0b17925-b4e6-4d98-8ba5-7ce60a85b3cd",
      "name": "Marguerite Parisian",
      "match_count": 59,
      "action": 24188,
      "profile_url": "https://picsum.photos/seed/d02676d3-6128-42d0-82a2-d3fb9b996e68/300/300",
      "role": "Batsman",
      "teamid": 8
    },
    {
      "id": 156,
      "uuid": "2fb62bdd-038b-46f4-880a-b1bc0690f60c",
      "name": "Gerardo Wehner",
      "match_count": 21,
      "action": 24674,
      "profile_url": "https://picsum.photos/seed/d1c89a2f-9c75-4f70-bd40-fdeec765be23/300/300",
      "role": "Wicketkeeper",
      "teamid": 8
    },
    {
      "id": 157,
      "uuid": "fa0f2b99-0ca1-4018-80d5-99cc64f45327",
      "name": "Abel Metz",
      "match_count": 74,
      "action": 16750,
      "profile_url": "https://picsum.photos/seed/ae158a15-ef1d-445b-a775-20572c2b6c14/300/300",
      "role": "All-rounder",
      "teamid": 8
    },
    {
      "id": 158,
      "uuid": "d0fb825c-0286-48a3-a038-a9f7700ecba2",
      "name": "Eula Bradtke III",
      "match_count": 10,
      "action": 16643,
      "profile_url": "https://picsum.photos/seed/abbd6b78-146a-4075-9971-d4cc86f7ec66/300/300",
      "role": "Wicketkeeper",
      "teamid": 1
    },
    {
      "id": 159,
      "uuid": "b4fd304e-800e-4395-bb35-0f50eb029203",
      "name": "Sammy Kunze",
      "match_count": 53,
      "action": 8784,
      "profile_url": "https://picsum.photos/seed/3f64b14d-2fe5-48b8-972f-34fdd8940806/300/300",
      "role": "Batsman",
      "teamid": 8
    },
    {
      "id": 160,
      "uuid": "4c14bb16-1966-4c93-909e-4c829ed2c5e8",
      "name": "Pat Mayer",
      "match_count": 15,
      "action": 2324,
      "profile_url": "https://picsum.photos/seed/c7b4da7c-5a3b-4a44-8e74-42138a0da4b5/300/300",
      "role": "Batsman",
      "teamid": 10
    },
    {
      "id": 161,
      "uuid": "ff053e1e-dfd3-4e99-bb71-38253239c21d",
      "name": "Douglas Schuster",
      "match_count": 17,
      "action": 6546,
      "profile_url": "https://picsum.photos/seed/2ddcbe28-84d5-41b9-96ce-2b66d2c700a4/300/300",
      "role": "Batsman",
      "teamid": 7
    },
    {
      "id": 162,
      "uuid": "90adcb6d-2aa9-498c-ab49-9d62bda7f57b",
      "name": "Clifford Doyle",
      "match_count": 97,
      "action": 11047,
      "profile_url": "https://picsum.photos/seed/fd9ee878-b5d5-494b-909c-de81016a6e5c/300/300",
      "role": "Wicketkeeper",
      "teamid": 8
    },
    {
      "id": 163,
      "uuid": "c9c988f6-4788-4dd2-81d1-b054f4492009",
      "name": "Miranda Lebsack",
      "match_count": 97,
      "action": 5028,
      "profile_url": "https://picsum.photos/seed/f872d97d-698b-4f4e-b8c8-5ec11acc806a/300/300",
      "role": "Wicketkeeper",
      "teamid": 3
    },
    {
      "id": 164,
      "uuid": "5a60259f-c51d-4ddd-b99e-28a030f84c38",
      "name": "Erik Bogan",
      "match_count": 34,
      "action": 10293,
      "profile_url": "https://picsum.photos/seed/d8a6be89-566f-4b97-a472-55b1794b7f45/300/300",
      "role": "All-rounder",
      "teamid": 2
    },
    {
      "id": 165,
      "uuid": "8d54a52d-35e6-4a95-861e-17920be56879",
      "name": "Ray O'Conner",
      "match_count": 25,
      "action": 5173,
      "profile_url": "https://picsum.photos/seed/3b70020b-4cbf-47cd-8cf7-f34377ee77b9/300/300",
      "role": "Bowler",
      "teamid": 9
    },
    {
      "id": 166,
      "uuid": "a63cb53d-fccd-4f07-9b94-a857dfab1ab5",
      "name": "Guillermo Walsh",
      "match_count": 58,
      "action": 16621,
      "profile_url": "https://picsum.photos/seed/504ffb33-6f66-400c-92c8-82bd8c24a415/300/300",
      "role": "Bowler",
      "teamid": 6
    },
    {
      "id": 167,
      "uuid": "3a199f2e-01d1-4e2e-91b1-aa0fa64267f9",
      "name": "Clayton Beier",
      "match_count": 27,
      "action": 17679,
      "profile_url": "https://picsum.photos/seed/e0ab5f59-f799-41a7-807b-d1c00e81dfb3/300/300",
      "role": "Wicketkeeper",
      "teamid": 6
    },
    {
      "id": 168,
      "uuid": "a65e134e-4d5a-4ea6-9d25-4554acaace2d",
      "name": "Edmund Reilly",
      "match_count": 99,
      "action": 24398,
      "profile_url": "https://picsum.photos/seed/d3316701-54db-4b71-984a-c2c77af388c9/300/300",
      "role": "Batsman",
      "teamid": 7
    },
    {
      "id": 169,
      "uuid": "bbf66d73-07e8-4f93-9837-c748f1e031f9",
      "name": "Rosie Sanford",
      "match_count": 37,
      "action": 22250,
      "profile_url": "https://picsum.photos/seed/6dd44ee5-247f-47d2-aed9-d3d7ad24c949/300/300",
      "role": "Bowler",
      "teamid": 10
    },
    {
      "id": 170,
      "uuid": "e238e2e7-b892-4dee-bad1-a517052b1b2c",
      "name": "Francisco Goyette",
      "match_count": 75,
      "action": 18301,
      "profile_url": "https://picsum.photos/seed/6269f033-bc76-490c-9c37-b2fbd0945e5e/300/300",
      "role": "All-rounder",
      "teamid": 6
    },
    {
      "id": 171,
      "uuid": "cebea6e1-0e5e-45a6-93b0-161f49df24bc",
      "name": "Dr. James Reynolds",
      "match_count": 5,
      "action": 2299,
      "profile_url": "https://picsum.photos/seed/28e21e52-1559-4683-b125-b775795b7d65/300/300",
      "role": "Batsman",
      "teamid": 7
    },
    {
      "id": 172,
      "uuid": "03e9d1cd-4dc1-4851-ad0c-125ba02a85d8",
      "name": "Mr. Cedric Doyle",
      "match_count": 22,
      "action": 20959,
      "profile_url": "https://picsum.photos/seed/96a238cc-fea7-4381-856f-e54648486cb7/300/300",
      "role": "All-rounder",
      "teamid": 10
    },
    {
      "id": 173,
      "uuid": "fbcf7615-a649-403c-96c7-0f0f0b4dcac9",
      "name": "Marsha Donnelly MD",
      "match_count": 8,
      "action": 2237,
      "profile_url": "https://picsum.photos/seed/1f2d701f-3873-4d37-b062-cb0cff35b8cc/300/300",
      "role": "Wicketkeeper",
      "teamid": 10
    },
    {
      "id": 174,
      "uuid": "39fbdca0-d595-4426-927f-2045804044e7",
      "name": "Nicholas Ebert",
      "match_count": 39,
      "action": 11398,
      "profile_url": "https://picsum.photos/seed/e7ae1e1e-84ce-4cf0-8815-fa2913c63892/300/300",
      "role": "Bowler",
      "teamid": 6
    },
    {
      "id": 175,
      "uuid": "7f06894a-33af-4a91-81e7-d8a3291471d0",
      "name": "Juan Morar",
      "match_count": 51,
      "action": 12475,
      "profile_url": "https://picsum.photos/seed/e7ac14f5-47c4-4937-bd2d-fd01622f8229/300/300",
      "role": "All-rounder",
      "teamid": 10
    },
    {
      "id": 176,
      "uuid": "e1c8ef0b-e81e-4e48-bf26-64d57754e947",
      "name": "Aubrey Schowalter",
      "match_count": 13,
      "action": 17914,
      "profile_url": "https://picsum.photos/seed/4b416e31-6560-4323-a258-800e194a094d/300/300",
      "role": "Wicketkeeper",
      "teamid": 5
    },
    {
      "id": 177,
      "uuid": "47c101ef-108d-4bf7-a382-bf6b5191e0de",
      "name": "Julius Schmidt",
      "match_count": 81,
      "action": 23303,
      "profile_url": "https://picsum.photos/seed/429293f9-5296-44d8-b90d-c427d94d2e88/300/300",
      "role": "Wicketkeeper",
      "teamid": 2
    },
    {
      "id": 178,
      "uuid": "89272e2e-5583-4833-9f5a-41099a7fe339",
      "name": "Lynette D'Amore",
      "match_count": 99,
      "action": 19287,
      "profile_url": "https://picsum.photos/seed/b6f702ae-4355-493c-89f9-5987a93dd97b/300/300",
      "role": "Bowler",
      "teamid": 5
    },
    {
      "id": 179,
      "uuid": "cebd10f5-8030-4628-b98c-8041812a0626",
      "name": "Cathy Waelchi",
      "match_count": 67,
      "action": 23219,
      "profile_url": "https://picsum.photos/seed/34338b66-49b6-4248-82b1-1c11ef054685/300/300",
      "role": "Batsman",
      "teamid": 6
    },
    {
      "id": 180,
      "uuid": "7ffa3ac3-f139-454d-a7f1-f8b03fcbb467",
      "name": "Wade Fadel",
      "match_count": 31,
      "action": 4495,
      "profile_url": "https://picsum.photos/seed/415d6b06-a5f3-4acb-a523-04f1253ce17a/300/300",
      "role": "Batsman",
      "teamid": 9
    },
    {
      "id": 181,
      "uuid": "b2854847-dfd6-4023-8916-a95f04a04d78",
      "name": "Miss Chelsea Stark",
      "match_count": 12,
      "action": 10113,
      "profile_url": "https://picsum.photos/seed/cff4d876-2af4-497c-9703-ae54763e74ae/300/300",
      "role": "All-rounder",
      "teamid": 7
    },
    {
      "id": 182,
      "uuid": "f4808b86-8577-4ea2-9e91-0ea4fdbc56c1",
      "name": "Manuel Christiansen",
      "match_count": 7,
      "action": 24085,
      "profile_url": "https://picsum.photos/seed/9f281e15-93bc-4261-89f6-3c1eaf50bb7e/300/300",
      "role": "All-rounder",
      "teamid": 9
    },
    {
      "id": 183,
      "uuid": "791ecb9a-7b1d-4a32-889e-191925aaba71",
      "name": "Herbert Powlowski",
      "match_count": 90,
      "action": 14243,
      "profile_url": "https://picsum.photos/seed/f8866cb4-5e83-4206-9745-4e88571c35e2/300/300",
      "role": "Batsman",
      "teamid": 9
    },
    {
      "id": 184,
      "uuid": "936a1ed4-4b3d-4dc6-bcf3-82ea078fa8ee",
      "name": "Cora Ruecker",
      "match_count": 45,
      "action": 23912,
      "profile_url": "https://picsum.photos/seed/b6e52c17-6242-4c8f-9fe9-70e3322f20a4/300/300",
      "role": "Bowler",
      "teamid": 6
    },
    {
      "id": 185,
      "uuid": "526c8be3-dec6-4104-a88b-bc0e41ffc216",
      "name": "Mrs. Johnnie Crist",
      "match_count": 71,
      "action": 5919,
      "profile_url": "https://picsum.photos/seed/3a323328-5aba-489a-9edf-3d690702d43e/300/300",
      "role": "Batsman",
      "teamid": 2
    },
    {
      "id": 186,
      "uuid": "34f5e2f7-e3c6-44da-92d7-64c9aa06523f",
      "name": "Evelyn Beahan",
      "match_count": 24,
      "action": 11148,
      "profile_url": "https://picsum.photos/seed/a6ff9830-ea52-456f-8b2a-c8607007e58f/300/300",
      "role": "Wicketkeeper",
      "teamid": 6
    },
    {
      "id": 187,
      "uuid": "2626a4b9-416c-42f5-881d-7e3466a68a52",
      "name": "Susie Cole",
      "match_count": 19,
      "action": 4226,
      "profile_url": "https://picsum.photos/seed/2abc5721-e457-4688-bdd5-5d239584d905/300/300",
      "role": "Bowler",
      "teamid": 7
    },
    {
      "id": 188,
      "uuid": "5a5ec12b-8e99-4572-9ea9-c9982c5bdacd",
      "name": "Michelle Rice",
      "match_count": 39,
      "action": 23329,
      "profile_url": "https://picsum.photos/seed/b94a8511-b79a-47ae-bab4-7b7dae8ad6bc/300/300",
      "role": "Bowler",
      "teamid": 7
    },
    {
      "id": 189,
      "uuid": "c0f2f083-cacb-4384-881b-b35c42348765",
      "name": "Laverne Prosacco",
      "match_count": 68,
      "action": 9343,
      "profile_url": "https://picsum.photos/seed/2d116e71-ddab-4cd0-80d9-6df055c85fe5/300/300",
      "role": "All-rounder",
      "teamid": 2
    },
    {
      "id": 190,
      "uuid": "9a5d36a9-7c78-4765-ba0f-5439fac89200",
      "name": "Sheldon Hackett",
      "match_count": 69,
      "action": 15788,
      "profile_url": "https://picsum.photos/seed/bc798c3d-9c62-49f9-adc2-7057236526a0/300/300",
      "role": "Wicketkeeper",
      "teamid": 5
    },
    {
      "id": 191,
      "uuid": "ec98d65e-407c-43c2-853c-ad9232130165",
      "name": "Gayle Mraz-Bogan IV",
      "match_count": 60,
      "action": 10653,
      "profile_url": "https://picsum.photos/seed/d3f67180-1933-4453-b9ea-a5c005e00ff3/300/300",
      "role": "Wicketkeeper",
      "teamid": 5
    },
    {
      "id": 192,
      "uuid": "d9f29eae-2bc2-4f9e-9cfa-7d8caef2d0ee",
      "name": "Wendell Dach",
      "match_count": 11,
      "action": 1337,
      "profile_url": "https://picsum.photos/seed/d5d554cf-6bbe-4428-a350-6c89940d489f/300/300",
      "role": "Batsman",
      "teamid": 6
    },
    {
      "id": 193,
      "uuid": "c55afce4-bee0-4aa1-9776-01d2e1e7809f",
      "name": "Bridget Pollich",
      "match_count": 98,
      "action": 14336,
      "profile_url": "https://picsum.photos/seed/d1f6f7a2-16e3-4772-ae03-35a70fdd7dc4/300/300",
      "role": "Bowler",
      "teamid": 7
    },
    {
      "id": 194,
      "uuid": "75d9764f-0fce-4891-9575-4d8e65296b5e",
      "name": "Jesus Oberbrunner",
      "match_count": 52,
      "action": 12859,
      "profile_url": "https://picsum.photos/seed/b47a807a-fdce-4b79-aced-514b60be119f/300/300",
      "role": "All-rounder",
      "teamid": 4
    },
    {
      "id": 195,
      "uuid": "739e3a69-b813-4bde-b011-a42207bf7ecb",
      "name": "Lamar Lynch",
      "match_count": 63,
      "action": 7379,
      "profile_url": "https://picsum.photos/seed/b9658e63-a78d-4c77-b1db-3a5f4bf79d98/300/300",
      "role": "Wicketkeeper",
      "teamid": 4
    },
    {
      "id": 196,
      "uuid": "fb933b95-4925-42eb-9604-fd58a5687dd4",
      "name": "Ms. Brandy Muller",
      "match_count": 63,
      "action": 11895,
      "profile_url": "https://picsum.photos/seed/f4287725-7950-4cc9-a454-48ab9e3f9504/300/300",
      "role": "Bowler",
      "teamid": 4
    },
    {
      "id": 197,
      "uuid": "8b975867-3dcd-4c1a-a446-be0363b54b00",
      "name": "Ms. Amelia Lakin II",
      "match_count": 73,
      "action": 12055,
      "profile_url": "https://picsum.photos/seed/480517b0-c058-494e-859b-e6156095b59b/300/300",
      "role": "Bowler",
      "teamid": 4
    },
    {
      "id": 198,
      "uuid": "0f8b7376-051a-4b66-9ed2-8d6b9c5da2de",
      "name": "Dr. Wilma Runolfsson",
      "match_count": 45,
      "action": 10958,
      "profile_url": "https://picsum.photos/seed/a69a7e4e-206e-40da-a661-1ef39cf67524/300/300",
      "role": "Wicketkeeper",
      "teamid": 7
    },
    {
      "id": 199,
      "uuid": "adaeb890-ab7b-4efa-86ec-f5529cc655b3",
      "name": "John Reilly",
      "match_count": 35,
      "action": 15117,
      "profile_url": "https://picsum.photos/seed/3d419179-aa70-48cc-973a-2da7d7f1910f/300/300",
      "role": "All-rounder",
      "teamid": 4
    },
    {
      "id": 200,
      "uuid": "dd567f70-dacc-4791-aab0-00dff78c21df",
      "name": "Dr. George Batz",
      "match_count": 55,
      "action": 19467,
      "profile_url": "https://picsum.photos/seed/bce22b6c-11af-4a3e-9121-7c50b84196c1/300/300",
      "role": "Wicketkeeper",
      "teamid": 7
    }
  ]
  data.forEach(item => {
    connection.query('INSERT INTO players SET ?', item, (err, res) => {
      if (err) {
        console.log(err)
        throw err;
      }
  
      console.log('Inserted row:', res.insertId);
    });
  });
  connection.end();