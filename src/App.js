import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import './App.css'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { AuthProvider } from './contexts/AuthContext';
import FurtherActionPage from './pages/FurtherActionPage';
import CreateEventPage from './pages/CreateEventPage';
import JoinEventPage from './pages/JoinEventPage';


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

                {/* <Route path="/moviedetail/:id" component={MovieDetailPage}/> */}
              <Route path="/further_action_page" component={FurtherActionPage} />
              <Route path="/create_event_page" component={CreateEventPage} />
              <Route path="/join_event_page" component={JoinEventPage} />


              </Switch>
            </div>
          </AuthProvider>

        </Router>

    </div>

  )
}
