import React from 'react';
import './App.css';
import Movie from './moive';

const movies = [
  {
    title : "Ironman 1",
    poster : "https://w.namu.la/s/ecf49c85072af0b4ad9a4304c8bf1774121fdbaa16b51b308e52c56115f83d6843b4e3f31cab881c42cdce8270b91739d796e894b1e215b686759998a17dad771416a55788a324270d9d4581fdc428514eb1a77d3d424dcc700b5300d0ee6e28"
  },
  {
    title : "Ironman 2",
    poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/4/4d/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8_2.jpg/250px-%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8_2.jpg"
  },
  {
    title : "Ironman 3",
    poster :"https://upload.wikimedia.org/wikipedia/ko/thumb/3/33/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8_3.jpg/250px-%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8_3.jpg"
  }
]

function App() {
  return (
    <div className="App">
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
      })}
    </div>
  )
}

export default App;
