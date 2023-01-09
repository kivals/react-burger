import React from 'react';
import AppHeader from "../Header/AppHeader/AppHeader";
import AppMain from "../Main/AppMain";
import appStyles from './App.module.css';


function App() {
  return (
    <div className={`${appStyles.app}`}>
        <AppHeader />
        <AppMain />
    </div>
  );
}

export default App;
