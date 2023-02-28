import React, {useEffect, useState} from 'react'
import Card from './Card';
import './NewsApp.css';
import SearchBar from './SearchBar';

function NewsApp() {
    const [searchValue, setSearchValue]= useState('cricket');

  const apiKey='61dfdc15714e4e97a45f1cbe24b475c2';
  const apiUrl=`https://newsapi.org/v2/everything?language=en&q=${searchValue}&from=2023-02-10&sortBy=publishedAt&apiKey=${apiKey}`;
  const [newsList, setNewsList]=useState([]);

 useEffect(()=>{
    fetchData();
 },[searchValue]);
 
  async function fetchData(){
    const response = await fetch(apiUrl);
    const jsonData= await response.json();
    setNewsList(jsonData.articles);
  }

  function searchParam(event){
    setSearchValue(event);
  }

  return (
    <>  
        <SearchBar onChange={searchParam}/>
        <div className='newsApp'>
        {newsList.map((news,i)=>{
            return <Card key={i} newsItem={news}/>
        })}
        </div>
    </>
  )
}

export default NewsApp;