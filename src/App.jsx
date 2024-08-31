import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [usdAmount, setUsdAmount] = useState('');
  const [btcAmount, setBtcAmount] = useState('--');
  const [btcPrice, setBtcPrice] = useState('--');
  const [lastUpdated, setLastUpdated] = useState('--');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBtcPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        );
        const price = response.data.bitcoin.usd;
        setBtcPrice(price);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (error) {
        console.error('Error fetching the Bitcoin price:', error);
      }
    };

    fetchBtcPrice();
  }, []);

  useEffect(() => {
    if (usdAmount && btcPrice !== '--') {
      if (usdAmount < 0) {
        setError('Please enter a positive number');
        setBtcAmount('--');
      } else if (usdAmount > 100000000) {
        setError('Amount cannot exceed $100,000,000');
        setBtcAmount('--');
      } else {
        setError('');
      const convertedBtc = (usdAmount / btcPrice).toFixed(8); // 8 decimal places
      setBtcAmount(convertedBtc);
      }
   } else {
      setBtcAmount('--');
    }
  }, [usdAmount, btcPrice]);

  const handleInputChange = (e) => {
    setUsdAmount(e.target.value);
  }

  return (
    <div className="App">
      <h1>Bitcoin to USD Converter</h1>
      <div className="price-info">
        <p>Current BTC Price: ${btcPrice}</p>
        <p>Last Updated: {lastUpdated}</p>
      </div>
      <div className="converter">
        <input
          type="number"
          placeholder="Enter USD"
          value={usdAmount}
          onChange={handleInputChange}
        />
        {error && <p className="error">{error}</p>}
        <p>Converted BTC: {btcAmount}</p>
      </div>
    </div>
  );
}

export default App;
