import React from 'react'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import LeaderBoard from './components/LeaderBoard';

function App() {
  return (
    <>
      <Navbar />
      <LeaderBoard />
      <Home />
      <div className="flex justify-center my-2">
        <button className='text-[#3dc6c1] border-2 border-[#3dc6c1] font-light rounded-md p-2'>Add hodlinfo to home screen</button>
      </div>
    </>

  );
}

export default App;
