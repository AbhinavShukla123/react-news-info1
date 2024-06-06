import React,{ useEffect, useState } from 'react'
import Newsitems from './newsitems.jsx';

const Newsboard = ({category}) => {
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apikey=4be6f866d57440e48359dc7c50a58333`;
    fetch(url).then(response=> response.json()).then(data=>setArticles(data.articles));
  },[category]);
  return (
    
    <div>
      <h1 className="text-center">Latest <span className="badge bg-danger">News</span></h1>
      {articles.map((news,index)=>{
        return <Newsitems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  );
}

export default Newsboard
