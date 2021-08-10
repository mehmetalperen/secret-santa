import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import './App.css'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { AuthProvider } from './contexts/AuthContext';


export default function App() {

  return (
    

    <div>

        <Router>
          <AuthProvider>

            <div className="App" >
              <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/signup" exact component={SignupPage} />

                {/* <Route path="/moviedetail/:id" component={MovieDetailPage}/>
              <Route path="/likedmovies" component={LikedMoviesPage} /> */}
              </Switch>
            </div>
          </AuthProvider>

        </Router>

    </div>

  )
}
