import React from 'react';
import './App.css';
import Daystatus from './Daystatus';

function App() {
  return (
    <div>
    <Daystatus daystatuspart1="Hot" daystatuspart2="Rush"/>
    <hr/>
    <Daystatus daystatuspart1="Cool" daystatuspart2="Awsome"/>
    </div>
  );
}

export default App;
