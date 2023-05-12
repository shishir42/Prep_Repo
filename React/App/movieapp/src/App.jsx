import { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {fetchDataFromAPI} from './utils/api';

import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import NotFound from './pages/404/NotFound';

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);

  useEffect(()=>{
    apiTesting();
  }, []);
  const apiTesting = () =>{
    fetchDataFromAPI('/movie/popular')
    .then((res) =>{
      console.log('response****', res);
      dispatch(getApiConfiguration(res));
    });  
  }

  return (
    <BrowserRouter> 
      {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:mediaType/:id" element={<Details/>}/>
          <Route path="/search/:" element={<SearchResult/>}/>
          <Route path="/explore/:mediaType" element={<Explore/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      {/* <Footer/> */}
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
