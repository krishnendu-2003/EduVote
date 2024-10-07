import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import VotingForm from './components/VotingForm';
import MetaMaskLogin from './components/MetaMaskLogin';
import './App.css';

const App = () => {
  const [account, setAccount] = useState(null);

  const handleLogin = (account) => {
    setAccount(account);
  };

  return (
    
    <div className="app-container">
    <video autoPlay muted className="video-background">
    <source  src="/edit.mp4" type="video/mp4"/>
    </video>
      <header className="header">
        <MetaMaskLogin onLogin={handleLogin} />
        {account && <p>Connected: {account}</p>}
      </header>
      <main>
        <VotingForm account={account} />
      </main>
    </div>
  );
};

export default App;
