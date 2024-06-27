const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

function generateTeams(count) {
    const teams = [];

    for (let i = 0; i < count; i++) {
        const team = {
            id: i + 1,
            uuid: uuidv4(),
            name: `Team ${String.fromCharCode(65 + i)}`,
            no_players: 0
        };

        teams.push(team);
    }

    return teams;
}

function generatePlayers(count, teams) {
    const players = [];
    const teamPlayerCounts = new Array(teams.length).fill(0);

    for (let i = 0; i < count; i++) {
        let team;
        let teamIndex;

        // Ensure no team exceeds 20 players
        do {
            teamIndex = faker.number.int({ min: 0, max: teams.length - 1 });
            team = teams[teamIndex];
        } while (teamPlayerCounts[teamIndex] >= 20);

        teamPlayerCounts[teamIndex] += 1;

        const player = {
            id: i + 1,
            uuid: uuidv4(),
            name: faker.person.fullName(), 
            match_count: faker.number.int({ min: 1, max: 100 }),
            action: faker.number.int({ min: 1000, max: 25000 }),
            profile_url: `https://picsum.photos/seed/${uuidv4()}/300/300`, // Square image with 300x300 dimensions
            role: faker.helpers.arrayElement(['Batsman', 'Bowler', 'All-rounder', 'Wicketkeeper']),
            teamid: team.id
        };

        players.push(player);
    }

    // Update the no_players field for each team
    teams.forEach((team, index) => {
        team.no_players = teamPlayerCounts[index];
    });

    return players;
}

const teams = generateTeams(10);
const players = generatePlayers(200, teams);

// Combine the teams and players into one object
const data = {
    teams,
    players
};

// Write the data to a JSON file
fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');

console.log('Data has been written to data.json');
