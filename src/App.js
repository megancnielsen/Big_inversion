import React from 'react';
import './App.css';
import PersonCard from './PersonCard/person_card2';

function App() {
  return (
    <div className="App">
      <PersonCard first_name="Meg" last_name="Nielsen" age={1} hair_color="BLK"/>
      <PersonCard first_name="Zach" last_name="arr.length" age={1} hair_color="BLK"/>
      <PersonCard first_name="Roza" last_name="arr.length" age={1} hair_color="BLD"/>
      <PersonCard first_name="Kevin" last_name="arr.length" age={1} hair_color="BRN"/>
      {/* <Person first_name="Meg" last_name="Nielsen" age={1} hair_color="hairColor"/> */}
    </div>
  );
}

export default App;