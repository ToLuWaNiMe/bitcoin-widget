import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
   // State variables to manage input, output, and API data
  const [usdAmount, setUsdAmount] = useState(''); // User input in USD
  const [btcAmount, setBtcAmount] = useState('--'); // Converted BTC amount
  const [btcPrice, setBtcPrice] = useState('--');  // Latest BTC price in USD
  const [lastUpdated, setLastUpdated] = useState('--'); // Timestamp of last API update
  const [error, setError] = useState(''); //Error message to display to the user

  // Fetch Bitcoin price from Api on initial render
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

  // Convert USD to BTC whenever usdAmount or btcPrice changes
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
      const convertedBtc = (usdAmount / btcPrice).toFixed(8); //Calculate BTC with 8 decimal places
      setBtcAmount(convertedBtc);
      }
   } else {
      setBtcAmount('--');
    }
  }, [usdAmount, btcPrice]);

  // Handle input change for USD amount
  const handleInputChange = (e) => {
    setUsdAmount(e.target.value);
  }

  return (
    <div className="App">
      <h1>USD Bitcoin Converter</h1>
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
