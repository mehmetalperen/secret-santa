import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import './App.css'


export default function App() {
  return (

    <div>
      <Router>
        <div className="App" >
          <Switch>
            <Route path="/" exact component={Homepage} />
            {/* <Route path="/moviedetail/:id" component={MovieDetailPage}/>
          <Route path="/likedmovies" component={LikedMoviesPage} /> */}
          </Switch>
        </div>
      </Router>
    </div>

  )
}
