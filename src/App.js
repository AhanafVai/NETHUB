import { Container } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BottomNav from "./Components/BottomNav/BottomNav";
import Header from "./Components/Header/Header";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";

function App() {
  return (
    <>
      <Header />
      <Helmet>
        <title>NETHUB</title>
        <meta
          name="description"
          content="Get info of all your favorite TV Series and Movies"
        />
        <meta
          name="keywords"
          content="Movies, Tv Series, Search Movies,Search Tv Series"
        />
      </Helmet>
      <Router>
        <div className="app">
          <Container>
            <Switch>
              <Route exact path="/" component={Trending} />
              <Route path="/movies" component={Movies} />

              <Route path="/series" component={Series} />
              <Route path="/search" component={Search} />
            </Switch>
          </Container>
        </div>
        <BottomNav />
      </Router>
    </>
  );
}

export default App;
