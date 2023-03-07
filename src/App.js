import React from "react";
import './App.css';
import NavTabs from './components/Tab';
import Banner from './components/Banner';
import Album from './components/Album';
import TimeTable from './components/TimeTable';

function App() {
    return (
      <div>
        <NavTabs/>
        <Banner></Banner>
        <Album></Album>
        <TimeTable class="Timetable"></TimeTable>
      </div>
    );
  }
  
  export default App;
  