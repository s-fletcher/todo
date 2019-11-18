import React from 'react';
import './App.scss';
import Header from '../../components/Header/Header';
import Add from '../../components/Add/Add';


function App() {
  return (
    <div className="app">
      <Header />
      <Add />
    </div>
  );
}

setInterval(App, 1000);


export default App;
