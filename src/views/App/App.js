import React from 'react';
import './App.scss';
import Header from '../../components/Header/Header';


function App() {
  return (
    <div className="app">
      <Header />
    </div>
  );
}

setInterval(App, 1000);


export default App;
