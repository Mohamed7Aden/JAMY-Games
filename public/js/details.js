// Select the button Element 
// Add click eventlistener to the button
// In respone to a click our callback function it should identify which game, then gther the game data and post it in fetch call
// The POST route will match "/api/games/save"
const saveGame = document.querySelector('.favBtn')
async function favGames () {
    const response = await fetch ('/api/games/save', {
        method: 'POST',
        body: JSON.stringify({ game_id: document.location.pathname .split("/")[2]}),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to log in');
      }
}

saveGame.addEventListener('click', favGames);
