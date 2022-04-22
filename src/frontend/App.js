import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Transactions from './pages/transactions';
import Swaps from './pages/swaps';
import NFT from './pages/nft';


  function App() {
    return (
      //Route elements surrounded by fragment, components for each page passed as elements for routing.
      <>
      <Router>
        <Navbar />
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
