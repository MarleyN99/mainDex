import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Transactions from './pages/transactions';
import Swaps from './pages/swaps';
import NFT from './pages/nft';


  function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/transactions' component={Transactions} />
          <Route path='/swaps' component={Swaps} />
          <Route path='/nft' component={NFT} />
        </Routes>
      </Router>
    );
  
}

export default App;
