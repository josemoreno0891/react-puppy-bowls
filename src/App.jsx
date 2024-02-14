import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import allplayers from './components/allplayers';
import singlePlayer from './components/singlePlayer';
import { getPlayers } from './api';

function App() {
  useEffect(() => {
    getPlayers().then((players) => console.log(players));
  }, [])
  async function getAllPlayers() {
    const players = await getPlayers();
    console.log(players);
  }
getAllPlayers();
  return (
    <>
      <div>
      Hi there!
      </div>
    </>
  )
}
export default App
