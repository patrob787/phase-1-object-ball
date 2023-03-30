let gameObject = () => {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        }
    };
};
//console.log(gameObject());
let game = gameObject();

let homeTeamName = (obj) => {
    return obj['home']['teamName'];
};
homeTeamName(game);

//Points Scored Function
let numPointsScored = (player) => {
  let game = gameObject();
  
  for (let gameKey in game) {
    let team = game[gameKey];
    for (let teamKey in team) {
      let members = team.players;
      for (let memberKey in members) {
        if (memberKey === player) {
          return members[memberKey]['points'];
        };
      };
    };
  };
};
numPointsScored('Alan Anderson');

//Shoe Size Function
let shoeSize = (player) => {
    let game = gameObject();
    for (let gameKey in game) {
      let team = game[gameKey];
      for (let teamKey in team) {
        let members = team.players;
        for (let memberKey in members) {
          if (memberKey === player) {
            return members[memberKey]['shoe'];
          };
        };
      };
    };
  };
  shoeSize('Ben Gordon');

//Team Colors function
let teamColors = (name) => {
  let game = gameObject();
  for (let gameKey in game) {
    let team = game[gameKey];
    for (let teamKey in team) {
      if (team[teamKey] === name) {
          let colors = team['colors']
          return colors;
      };
    };
  };
};
teamColors('Brooklyn Nets');

//Player Number Function
let playerNumbers = (teamName) => {
    let newArray = [];
    let game = gameObject();
    for (let gameKey in game) {
        let team = game[gameKey];
        for (let teamKey in team) {
            if (team[teamKey] === teamName) {
                let players = team['players'];
                for (let playerKey in players) {
                    newArray.push(players[playerKey]['number']);
                }
            }
        }
    }
    return newArray;
};
playerNumbers('Charlotte Hornets');


//Player Stat Function
let playerStats = (playerName) => {
    let game = gameObject();
    for (let gameKey in game) {
      let team = game[gameKey];
      for (let teamKey in team) {
        if (typeof team[teamKey] === 'object') {
          let details = team[teamKey];
          for (let detailKey in details) {
            if (detailKey === playerName) {
                let statObj = details[detailKey];
              return statObj;
            };
          };
        };
      };
    };
  };
  playerStats('Mason Plumlee');

//Finds Rebounds for player with biggest shoe
let bigShoeRebounds = () => {
  let game = gameObject();
  shoeSizeArray = []
  
  for (let gameKey in game) {
    let team = game[gameKey];
    let players = team.players
    for (let playerKey in players) {
      shoeSizeArray.push(players[playerKey].shoe)
    }
  }

  let largestShoe = shoeSizeArray.reduce((a, c) => {
    if (a < c) {
      return c;
    } else {
      return a;
    }
  }, 0)

  for (let gameKey in game) {
    let team = game[gameKey];
    let players = team.players
    for (let playerKey in players) {
      if (players[playerKey].shoe === largestShoe) {
        return players[playerKey].rebounds
      }
    }
  } 
};
bigShoeRebounds();

let mostPointsScored = () => {
  let game = gameObject();
  let pointsArray = [];

  for (let gameKey in game) {
    let team = game[gameKey];
    let players = team.players
    for (let playerKey in players) {
      pointsArray.push(players[playerKey].points)
    }
  }

  let mostPoints = pointsArray.reduce((a, c) => {
    if (a < c) {
      return c;
    } else {
      return a;
    }
  }, 0)

  for (let gameKey in game) {
    let team = game[gameKey];
    let players = team.players
    for (let playerKey in players) {
      if (players[playerKey].points === mostPoints) {
        return playerKey
      }
    }
  }
}
mostPointsScored();

let winningTeam = () => {
  let game = gameObject();
  let homePointsArray = [];
  let awayPointsArray = [];

  let homePlayers = game.home.players;
  let awayPlayers = game.away.players;

  for (let nameKey in homePlayers) {
    homePointsArray.push(homePlayers[nameKey].points)
  }

  for (let nameKey in awayPlayers) {
    awayPointsArray.push(awayPlayers[nameKey].points)
  }

  let homePoints = homePointsArray.reduce((a, c) => {return a + c}, 0)
  let awayPoints = awayPointsArray.reduce((a, c) => {return a + c}, 0)

  if (homePoints > awayPoints) {
    return game.home.teamName
  } else {
    return game.away.teamName
  }
}
winningTeam();

let playerWithLongestName = () => {
  let game = gameObject();
  let nameArray = [];

  for (let gameKey in game) {
    let team = game[gameKey];
    let players = team.players;
    for (let name in players) {
      nameArray.push(name);
    }
  }

  let longestName = nameArray.reduce((a, c) => {
    if (a.length < c.length) {
      return c;
    } else {
      return a;
    }
  }, "")
  return longestName;
};
winningTeam();