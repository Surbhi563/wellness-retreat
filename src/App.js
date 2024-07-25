import React from 'react';
import './App.css';
import Header from './components/Header';
import DiscoverCard from './components/DiscoverCard';
import Filter from './components/Filter';
import RetreatList from './components/RetreatList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
      <DiscoverCard />
      <Filter />
      <RetreatList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
