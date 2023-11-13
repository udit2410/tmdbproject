import React from 'react'
import "./MovieCard.css"
import { API_IMG } from './utils/utils';

const movieCard = ({poster_path,title,release_date,vote_average}) => {

 
    

  return (
    <div className='card'>

        <div className='hero'>
            <img className='poster' src={API_IMG + poster_path} alt='img' />
            <h2 className='title'>{title}</h2>
            <p className='relDate'>Release date:{release_date}</p>
          <div className='voteAvg'>
             <p >Avg.Rating:{vote_average}</p>
          </div> 
        </div>
       
    </div>
  )
}

export default movieCard