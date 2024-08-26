import React, { useState } from 'react';
import { ethers } from 'ethers';

const MetaMaskLogin = ({ onLogin }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        onLogin(account);
        setErrorMessage('');
      } else {
        setErrorMessage('MetaMask is not installed. Please install it to use this app.');
      }
    } catch (error) {
      setErrorMessage('Failed to connect to MetaMask. Please try again.');
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect MetaMask</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default MetaMaskLogin;
