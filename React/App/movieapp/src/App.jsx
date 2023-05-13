import { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {fetchDataFromAPI} from './utils/api';

import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import NotFound from './pages/404/NotFound';

function App() {
  const dispatch = useDispatch();
  // const {url} = useSelector((state) => state.home);

  useEffect(()=>{
    fetchAPIConfig();
    genresCall();
  }, []);
  const fetchAPIConfig = () =>{
    // fetchDataFromAPI('/movie/popular')
  fetchDataFromAPI('/configuration')
    .then((res) =>{
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url));
    });   
  }

  const genresCall = async () =>{
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {}
    endPoints.forEach((url) =>{
      promises.push(fetchDataFromAPI(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] = item))
    });

    dispatch(getGenres(allGenres));
  }

  return (
    <BrowserRouter> 
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:mediaType/:id" element={<Details/>}/>
          <Route path="/search/:query" element={<SearchResult/>}/>
          <Route path="/explore/:mediaType" element={<Explore/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
  // return (
  //   <div className='App'>
  //     App
  //     {url?.total_pages}
  //   </div>
  // )
}

export default App
