### Project Documentation: Bitcoin Widget using Vite and React

This documentation provides a comprehensive overview of the Bitcoin widget project built using Vite and React. The project aims to provide a simple user interface to convert USD to Bitcoin (BTC) based on real-time BTC prices fetched from an external API.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Setup](#project-setup)
3. [Key Components ](#key-components)
4. [CSS Styling](#css-styling)
5. [API Integration](#api-integration)
6. [Error Handling](#error-handling)
7. [Conclusion](#conclusion)

---

## Project Overview

The Bitcoin widget is a web application that allows users to convert a specified amount of USD to its Bitcoin equivalent. The conversion rate is fetched in real-time from the CoinGecko API. This project is built with Vite and React for fast development and optimal performance.

### Features:
- **Real-time Bitcoin price fetching**: The app fetches the latest Bitcoin price from CoinGecko.
- **USD to BTC conversion**: Converts a user-specified USD amount to BTC based on the latest price.
- **Error handling**: Provides user feedback for invalid inputs.
- **Responsive Design**: The UI is responsive and adapts to different screen sizes.

## Project Setup

To run the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ToluwaNiMe/bitcoin-widget.git
    cd bitcoin-widget
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the project**:
    ```bash
    npm run dev
    ```

4. **Open in Browser**:
   Visit `http://localhost:3000` to view the app in your browser.

## Key Components

### 1. App Component (`App.jsx`)

The `App` component is the main component that handles:
- Fetching the Bitcoin price from the API.
- Converting USD to BTC.
- Displaying real-time data and conversion results.

### Key Logic and Functions:
- **`useState` Hooks**: Manage component state for USD amount, BTC amount, BTC price, last updated time, and error messages.
- **`useEffect` Hooks**: Perform side effects (fetching data and conversion logic) when component mounts or state changes.
- **`fetchBtcPrice`**: An asynchronous function to fetch the latest BTC price using Axios from CoinGecko API.
- **Input Validation**: Validates the user input to ensure it's a positive number and does not exceed a specified maximum.

## CSS Styling

### CSS File (`App.css`)

The CSS styles the main container, text, inputs, and error messages.


## API Integration

### CoinGecko API

- **Endpoint**: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
- **Purpose**: Fetches the latest Bitcoin price in USD.
- **Response Handling**: The price is extracted from the response data and stored in the `btcPrice` state variable.

## Error Handling

Error handling is implemented to manage both network/API errors and user input validation errors.

1. **API Errors**:
   - If the API call fails, an error message is logged to the console. This can be extended to display a user-friendly message in the UI.

2. **Input Validation**:
   - The input is validated to ensure that the amount entered is a positive number and does not exceed a set maximum.
   - Relevant error messages are displayed under the input field to guide the user.

## Conclusion

This Bitcoin widget project is a simple yet effective way to learn about React, state management, hooks, and API integration. It provides a real-world use case for converting currencies and demonstrates essential error handling practices. 

By following this documentation and examining the code, you should have a solid foundation for understanding the core concepts of building a React application with Vite and integrating third-party APIs.
