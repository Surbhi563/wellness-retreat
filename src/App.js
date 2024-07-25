import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import DiscoverCard from './components/DiscoverCard';
import Filter from './components/Filter';
import RetreatList from './components/RetreatList';
import Footer from './components/Footer';
import axios from 'axios';

function App() {

  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const handleSearchChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleDateFilterChange = () => {
    setDateFilter(!dateFilter);
  };
  const [retreats, setRetreats] = useState([]);

  useEffect(() => {
    const fetchRetreats = async () => {
      const response = await axios.get(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`
      );
      console.log(response);
      setRetreats(response.data);
    };

    fetchRetreats();
  }, []);
  const handleTypeFilterChange = () => {
    // For simplicity, toggle between 'Yoga' and '' (no filter)
    setTypeFilter((prev) => (prev === 'Yoga' ? '' : 'Yoga'));
  };

  const filteredRetreats = retreats
  .filter((retreat) => {
    return (
      retreat.title.toLowerCase().includes(search.toLowerCase()) &&
      (!dateFilter || new Date(retreat.date) >= new Date()) &&
      (!typeFilter || retreat.type === typeFilter)
    );
  })

  return (
    <div className="container1">
      <Header />
      <div className='main-content'>
      <DiscoverCard />
      <Filter onDateFilterChange={handleDateFilterChange}
          onTypeFilterChange={handleTypeFilterChange}
          onSearchChange={handleSearchChange}/>
      <RetreatList retreats={filteredRetreats} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
