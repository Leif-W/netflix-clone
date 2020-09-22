import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>hey clever programmer </h1>
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      ></Row>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;
