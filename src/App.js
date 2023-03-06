import React from "react";
import './App.css';
import NavTabs from './components/Tab';
import Banner from './components/Banner';
import Album from './components/Album';
function App() {
    return (
      <div>
        <NavTabs />
        <Banner></Banner>
        <Album></Album>
      </div>
    );
  }
  
  export default App;
  