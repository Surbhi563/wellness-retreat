import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import DiscoverCard from './components/DiscoverCard';
import Filter from './components/Filter';
import RetreatList from './components/RetreatList';
import Footer from './components/Footer';
import axios from 'axios';
import {URL} from './constants/baseUrl';

function App() {

  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [limit]=useState(5);
  const [filter, setFilter]=useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [retreats, setRetreats] = useState([]);
  const [selectedRange, setSelectedRange] = useState('');

  useEffect(() => {
    const fetchRetreats = async () => {
      const response = await fetch(URL);
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
    let url= URL;
    url+=`?filter=${filter}`;
    const response = await axios.get(url);
    let filtered=response.data;
    if(range){
    console.log("yes");
    console.log(start,end);
    filtered = response.data.filter(retreat => {
      const retreatDate = retreat.date; // Assuming `date` is in Unix timestamp format
      return retreatDate >= start && retreatDate <= end;
    });
  }
    setRetreats(filtered);
  } catch (error) {
    //
  }
}
  else if(range){
  console.log('hi');
  const { start, end } = getDateRange(range);
  let result=retreats;
  if(!filter){
    const output=await axios.get(URL);
    result=output.data;
  }
  const filtered = result.filter(retreat => {
    const retreatDate = retreat.date; // Assuming `date` is in Unix timestamp format
    return retreatDate >= start && retreatDate < end;
  });
  setRetreats(filtered);
}
else if(!filter && !range){
  try {
    const response = await axios.get(`${URL}?page=${page}&limit=5`);
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
      try{
      let url = URL;
      let urlPage = `${URL}?page=${page}&limit=${limit}`;

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
    }
    catch(err){
      setRetreats(null);
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
