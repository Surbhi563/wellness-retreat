import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import DiscoverCard from './components/DiscoverCard';
import Filter from './components/Filter';
import RetreatList from './components/RetreatList';
import Footer from './components/Footer';

function App() {

  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [limit]=useState(5);
  const [filter, setFilter]=useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [retreats, setRetreats] = useState([]);

  useEffect(() => {
    const fetchRetreats = async () => {
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`;

      const response = await fetch(url);
      const data = await response.json();
      setTotalPages(Math.ceil(data.length/5))
    };
    fetchRetreats();
  }, []);
 
  useEffect(() => {
    const fetchRetreats = async () => {
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`;

      let urlPage = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=${limit}`;

      if (filter) {
        url += `?filter=${filter}`;
      }
      else if (search) {
        url += `?search=${search}`;
      }
      else{
        url=urlPage;
      }
      console.log(url,filter,search);
      const response = await fetch(url);
      const data = await response.json();
      if(data){
      setRetreats(data);
      }
    };
    fetchRetreats();
  }, [filter, search, page, limit]);

  


  return (
    <div className="container1">
      <Header />
      <div className='main-content'>
      <DiscoverCard />
      <Filter setFilter={setFilter} setSearch={setSearch} filter={filter}/>
      <RetreatList retreats={retreats} page={page} setPage={setPage} totalPages={totalPages}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
