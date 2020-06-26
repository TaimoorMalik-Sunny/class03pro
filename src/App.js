import React from 'react';
import './App.css';
import Daystatus from './Daystatus';

function App() {
  return (
    <div>
    <Daystatus daystatuspart1="Hot3" daystatuspart2="Rush"/>
    <hr/>
    <Daystatus daystatuspart1="Cool3" daystatuspart2="Awsome"/>
    </div>
  );
}

export default App;
