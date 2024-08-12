import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomUser from './Screens/RandomUser/RandomUser';
import RandomJokes from './Screens/RandomJokes/RandomJokes';
import CatsListing from './Screens/CatListing/CatListing';
import MainScreen from './Screens/MainScreen/MainScreen';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />}>
          <Route index element={<MainScreen />} />
          <Route path="random-user" element={<RandomUser />} />
          <Route path="random-jokes" element={<RandomJokes />} />
          <Route path="cats-listing" element={<CatsListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
