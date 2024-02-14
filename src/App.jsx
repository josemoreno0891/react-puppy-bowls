
import {useState, useEffect} from 'react'
import './App.css';
import { getPlayers, getPlayer } from './api';

function App() {
  const [puppies, setPuppies] = useState([]);
  //const [players, setPlayers] = useState([]);
  const [player,setPlayer] = useState({});

  useEffect(() => {
    getPlayers().then((players) =>{
      setPuppies(players);
    });
  },[])
  function handlePlayerClick(playerId) {
    getPlayer(playerId).then(setPlayer);
  }
  return (
    <>
      <h1>Puppy bowl</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {puppies.map((puppy)=> {
            return (
              <tr key={puppy.id}>
                <td>{puppy.name}</td>
                <td>{puppy.breed}</td>
                <td>{puppy.status}</td>
                <td>
                  <button onClick={() => handlePlayerClick(player.id)}>View player detail</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <dialog open={player.id}>{player.name}</dialog>
    </>
  );
}
export default App;
