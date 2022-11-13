//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {
  const header = 'Team                           | MP |  W |  D |  L |  P';
  if(input === '') return header;
  const matches = input.split('\n');
  const teams = {};
  for (const match of matches) {
    const matchArr = match.split(';')
    const team1 = matchArr[0];
    const team2 = matchArr[1];
    const result = matchArr[2];

    if(!teams.hasOwnProperty(team1)) {
      teams[team1] = { name: team1, mp: 0, w: 0, d: 0, l: 0, p: 0}
    }

    if(!teams.hasOwnProperty(team2)) {
      teams[team2] = { name: team2, mp: 0, w: 0, d: 0, l: 0, p: 0}
    }
    
    teams[team1].mp++;
    teams[team2].mp++;

    if(result === 'win') {
      teams[team1].w++;
      teams[team1].p += 3;
      teams[team2].l++;
    } else if(result === 'loss') {
      teams[team1].l++;
      teams[team2].w++;
      teams[team2].p += 3;
    } else {
      teams[team1].d++;
      teams[team1].p++;
      teams[team2].d++;
      teams[team2].p++;
    }
  }
  const teamsArr = Object.values(teams);
  teamsArr.sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
  teamsArr.sort((a,b) => b.p - a.p);
  let lines = [header];
   
  for(const team of teamsArr) {
    lines.push(
      team.name.padEnd(31, ' ') +
      `|${team.mp.toString().padStart(3, ' ')} ` +
      `|${team.w.toString().padStart(3, ' ')} ` +
      `|${team.d.toString().padStart(3, ' ')} ` +
      `|${team.l.toString().padStart(3, ' ')} ` +
      `|${team.p.toString().padStart(3, ' ')}`
    )
  } 
  return lines.join('\n');
};