import {useState, useEffect} from 'react'
import { getPlayers, getPlayer, deletePlayer } from './api';
import {Player} from './components/player';
import { PlayerDetails } from './components/PlayerDetails';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    getPlayers().then((players) =>{
      setPlayers(players);
    });
  },[])
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
  return (
    <>
      <h1>Puppy bowl</h1>
      <PlayerDetails player={player}/>
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
          {players.map((player)=> {
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
    </>
  );
}
export default App;