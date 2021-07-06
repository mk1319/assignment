import './App.css';
import React from 'react';
import JsonFile from './moviedata.json'



const Rating=({rate})=>{
  return [...Array(5).keys()].map((e,index)=>
    { return e<rate?<li style={{color:'yellow'}} key={index}>&#9733;</li>:<li key={index} style={{color:'gray'}}>&#9733;</li>
    })
}


const Card=({data})=>{
  return(
    <div className="moviecard">
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
        <h1>{data.original_title}</h1>
        <ul className="rate">
        <Rating rate={data.vote_average>0?data.vote_average/2:data.vote_average}/>
        </ul>
        <p className="description">{data.overview}</p>
        <p>release_date: {data.release_date}</p>
    </div>
  )
}










function App() {



  return (
    <div className="App">
      <div className="movielist">
      {
        Array.isArray(JsonFile)&&JsonFile.map((e,index)=><Card data={e} key={index}/>)
      }
      </div>
    </div>
  );
}

export default App;
