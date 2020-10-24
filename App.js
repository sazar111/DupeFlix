import React from 'react';
import './App.css';
import Row from "./Row.js"
import request from './requests.js';
import Banner from './Banner.js'
import Nav from './Nav.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
      <Row title="Trending Now" first='1' fetchUrl={request.fetchTrending}  />
      <Row isLargeRow="true" title="DUPEFLIX ORGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}  />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} /> 
  </div>
  );
}

export default App;
