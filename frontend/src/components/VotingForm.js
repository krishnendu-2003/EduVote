import React, { useState } from 'react';
import VotingContractABI from '../abi/VotingContract.json';
import { ethers } from 'ethers';

const VotingForm = ({ account }) => {
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [message, setMessage] = useState('');

  const contractAddress = '0x20ae72ce6180c003816751878044041d8e7aa941';

  const vote = async () => {
    if (!account) {
      setMessage('Please connect your MetaMask wallet first.');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, VotingContractABI, signer);

      const tx = await contract.vote(selectedCandidate);
      await tx.wait();

      setMessage('Vote successfully submitted!');
    } catch (error) {
      console.error('Error voting:', error);
      setMessage('Failed to submit vote. Please try again.');
    }
  };

  return (
    <div className="voting-form-container">
      <h2>VOTE FOR YOUR FAVOURITE</h2>
      <h3>CONTENT CREATOR</h3>
      <select onChange={(e) => setSelectedCandidate(e.target.value)} value={selectedCandidate}>
        <option value="">Select a Candidate</option>
        <option value="Candidate 1">Andy</option>
        <option value="Candidate 2">Sandy</option>
        <option value="Candidate 3">Candy</option>
      </select>
      <br />
      <button onClick={vote} disabled={!selectedCandidate}>
        Vote
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VotingForm;
