import React, {useEffect, useRef, useState,} from 'react'
import './Title.Cards.css'
import cards_data from '../../assets/cards/cards_data'
import { Link } from 'react-router-dom';




const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();


  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTgzZWJmMjQ3Yzk1ZmEyODM1YjMyYjc1Y2Y3YzgxNCIsIm5iZiI6MTc2NzUxNTQwOC4wLCJzdWIiOiI2OTVhMjUwZjJlZThiZjlmMTY0YWQ3MGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WVVV4h17DbAE_klBDpEwqvIcH0nYk2KbNOHfJ40IgGc'
  }
};



  const handlewheel = (event)=>{

  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;

}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
  
  cardsRef.current.addEventListener('wheel', handlewheel);
},[])
 
  return (
    <div className='title-cards'>

      <h2>{title?title:"Lorem, ipsum dolor."}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>

    </div>
  )
}

export default TitleCards