 import {useEffect, useState} from 'react'
import './App.css';
import MovieCard from './MovieCard';
import { Link, createBrowserRouter } from 'react-router-dom';

function App() {

  const API_URL ="https://api.themoviedb.org/3/movie/popular?api_key=0efe61d76fd1c61bbe15c64d6202649f"
  const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=0efe61d76fd1c61bbe15c64d6202649f&query="


  const [movies, setMovies]= useState([])
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results)
    } )
  },[])



    console.log(movies)
   
    
    const handleSubmit = (e) =>{
      e.preventDefault();

      fetch(API_SEARCH+searchTerm)
        .then((res) => res.json())
        .then(data => {
        setMovies(data.results)
        console.log(data.results);
      })
      
    }

      console.log(searchTerm)
  return (
    <div className="App">
      
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input className='input' onChange={(e) => setSearchTerm(e.target.value)} />
          <button type='submit' className='submit' >Submit</button>
        </form>
      </div>

      <div className='appContainer'>
        {
          movies.map(el => (
           <Link to={"/movie?v="+el.id} key={el.id}> <MovieCard  {...el}  /></Link>
        ))}
       </div> 
       
       </div>
    
  );
}

export default App;
