import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Transactions from './pages/transactions';
import Swaps from './pages/swaps';
import NFT from './pages/nft';
import { useState } from 'react'
import { ethers } from "ethers"

  function App() {
    //Hooks declaring and providing setter for loading vairable and wallet account, 
    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState(null)
    //Metamask wallet login and connect
    const web3Handler = async () => {
      //memamask function to request eth account from window, requires JSON RPC method, reurns promise
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      //Use set fucntion from hook to assign account value from metamask.
      if(accounts.length)
        {
            setAccount(accounts[0]);

            //getAllTransactions();
        } else {
            console.log('no accounts found')
        }
      //get metamask provider
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      //get metamask signer
      const signer = provider.getSigner()
      //Detect event of network being changed and reload page, 1 is mainnet, 5 is Goerli 
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload();
      //If accout is changed, recursive call this function
      window.ethereum.on('accountsChanged', async function (accounts) {
          setAccount(accounts[0])
          await web3Handler()
        })
      })
    }


    return (
      //Route elements surrounded by fragment, components for each page passed as elements for routing.
      <>
      <Router>
        <Navbar web3Handler={web3Handler} account={account}/>
        <Routes>
          <Route path='/' exact element = { <Home/> } />
          <Route path='/transactions' element = { <Transactions/> } />         
          <Route path='/swaps' element = { <Swaps/> } />
          <Route path='/nft' element = { <NFT/> } />
        </Routes>
      </Router>
      </>
    );
  
}

export default App;
