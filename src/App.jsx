import { useState, useEffect } from 'react'
import { getPlayers, getPlayer, deletePlayer, createPlayer } from './api';
import { Player } from './components/player';
import { PlayerDetails } from './components/PlayerDetails';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    getPlayers().then((players) => {
      setPlayers(players);
    });
  }, [])
  function handlePlayerClick(playerId) {
    getPlayer(playerId).then(setPlayer);
  }

  function handlePlayerDelete(playerId) {
    deletePlayer(playerId).then(() => {
      getPlayers().then(players => {
        setPlayers(players)
      })
    });
  }

  function handleSubmit(evt) {
    evt.preventDefauld();
    const formData = new FormData(evt.target);
    const newPlayer = Object.fromEntries(formData.fromEntries());

    createPlayer(newPlayer).then(() => {
      getPlayers().then((players) => {
        setPlayers(players);
      });
    });
  }
  return (
    <>
      <div onClick={() => setPlayer({})}>
        <h1>Puppy bowl</h1>
        <PlayerDetails player={player} />
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type="text" name="name"/>
          <label htmlFor="breed">Breed</label>
          <input type="text" id="breed"></input>

          <button type="submit">ADD</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Breed</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => {
              return (
                <Player
                  key={player.id}
                  player={player}
                  onClick={handlePlayerClick}
                  onDelete={handlePlayerDelete}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default App;