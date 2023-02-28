import React from 'react'
import './Card.css';

function Card({newsItem}) {
    const url=newsItem.url;
  return (
    <div className='card'>
        <img className='img' src={newsItem.urlToImage} alt={newsItem.title} />
        <h3 className='title'>{newsItem.title.slice(0,50)}...</h3>
        <p className='description'>{newsItem.description.slice(0,100)}...</p>
        <button className='btn' onClick={()=>{window.open(url)}}>Read More</button>
    </div>
  )
}

export default Card