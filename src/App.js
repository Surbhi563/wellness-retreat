import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import DiscoverCard from './components/DiscoverCard';
import Filter from './components/Filter';
import RetreatList from './components/RetreatList';
import Footer from './components/Footer';
import axios from 'axios';

function App() {

  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [limit]=useState(5);
  const [filter, setFilter]=useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [retreats, setRetreats] = useState([]);
  const [selectedRange, setSelectedRange] = useState('');

  useEffect(() => {
    const fetchRetreats = async () => {
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`;

      const response = await fetch(url);
      const data = await response.json();
      setTotalPages(Math.ceil(data.length/5))
    };
    fetchRetreats();
  }, []);
  useEffect(()=>{
    if(search || page){
      setFilter('');
      setSelectedRange('');
    }

  },[search,page])

 // Function to convert date range to Unix timestamps
 const getDateRange = (range) => {
  const [startYear, endYear] = range.split('-').map(Number);
  const startDate = new Date(startYear, 0, 1); 
  const endDate = new Date(endYear - 1, 11, 31); 
  return {
    start: Math.floor(startDate.getTime() / 1000), // Convert to Unix timestamp
    end: Math.floor(endDate.getTime() / 1000)
  };
};
// Function to fetch data from API and filter based on date range
const fetchDataAndFilter = async (range) => {

  if(filter){
  const { start, end } = getDateRange(range);

  try {
    let url='https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats';
    url+=`?filter=${filter}`;
    const response = await axios.get(url);
    let filtered=response.data;
    if(range){
    filtered = response.data.filter(retreat => {
      const retreatDate = retreat.date; // Assuming `date` is in Unix timestamp format
      return retreatDate >= start && retreatDate < end;
    });
  }
    setRetreats(filtered);
  } catch (error) {
    //
  }
}
else if(range && filter){
  const { start, end } = getDateRange(range);
  const filtered = retreats.filter(retreat => {
    const retreatDate = retreat.date; // Assuming `date` is in Unix timestamp format
    return retreatDate >= start && retreatDate < end;
  });
  setRetreats(filtered);
}
else if(!filter && !range){
  try {
    const response = await axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=5`);
    setRetreats(response.data);
  } catch (error) {
    //
  }

}
};
useEffect(()=>{
  if(filter || selectedRange){
    fetchDataAndFilter(selectedRange);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[filter,selectedRange])


// Handle changes in the date range selection
const handleRangeChange = (event) => {
  const range = event.target.value;
  setSelectedRange(range);
  fetchDataAndFilter(range);
};
  useEffect(() => {
    const fetchRetreats = async () => {
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`;

      let urlPage = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=${limit}`;

      if(search && filter){
        url += `?search=${search}&filter=${filter}`;
      }

      else if (search) {
        url += `?search=${search}`;
      }
      else{
        url=urlPage;
      }
      const response = await axios.get(url);
      const data = await response.data;
      if(data){
      setRetreats(data);
      }
     
    };
    fetchRetreats();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page, limit]);

  


  return (
    <div className="container1">
      <Header />
      <div className='main-content'>
      <DiscoverCard />
      <Filter setFilter={setFilter} setSearch={setSearch} filter={filter} setRetreats={setRetreats} handleRangeChange={handleRangeChange} selectedRange={selectedRange}/>
      <RetreatList retreats={retreats} page={page} setPage={setPage} totalPages={totalPages}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
