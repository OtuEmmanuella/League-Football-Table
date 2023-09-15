// Function to update the team statistics in the table
function updateTeamStats(
  teamId,
  matchesPlayed,
  wins,
  draws,
  losses,
  goals,
  points
) {
  document.getElementById(`matches-played${teamId}`).textContent =
    matchesPlayed;
  document.getElementById(`wins${teamId}`).textContent = wins;
  document.getElementById(`draws${teamId}`).textContent = draws;
  document.getElementById(`losses${teamId}`).textContent = losses;
  document.getElementById(`goals${teamId}`).textContent = goals;
  document.getElementById(`points${teamId}`).textContent = points;
}

function update() {
  updateTeamStats(1, 1, 1, 0, 0, 2, 3);

  updateTeamStats(2, 1, 1, 0, 0, 2, 3);

  updateTeamStats(3, 1, 1, 0, 0, 1, 3);

  updateTeamStats(4, 1, 0, 0, 1, -1, 0);

  updateTeamStats(5, 0, 0, 0, 0, 0, 0);

  updateTeamStats(6, 2, 0, 0, 2, -4, 0);
}

update();
updateTeamStats(index + 1);
