import React, { Component } from "react";
import "../view.css";
import axios from "axios";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Event from "./events.component";
import Home from "./Home";
import EventsDetail from "./events-detail.component";
import EventsEdit from "./events-edit.component";
import EventsAdd from "./events-add.component";
import EventsSearch from "./events-search.component";
import EventShow from "./events-show.component";
export default class Main extends Component{
    render(){
        return(
            <div>
            <h3>Main Component</h3>
            <Router>
                <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">AdminPortal</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Events</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown01">

                        <NavLink className = "dropdown-item" to='/events-add'>Add Event</NavLink>
                        <NavLink className = "dropdown-item" to='/events'>View Events</NavLink>
                        <NavLink className = "dropdown-item" to='/events-search'>Search Events</NavLink>
            
                        </div>

                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/login'>Login</NavLink>
                    </li>
                    <li className="nav-item dropdown active">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Support</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown01">

                        <NavLink className = "dropdown-item" to='/support/Admin'>Admin Support</NavLink>
                        <NavLink className = "dropdown-item" to='/support/User'>User Support</NavLink>
            
                        </div>
                    </li>
                    </ul>
                    
                </div>
            </nav>
                </div>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/events' component={Event}></Route>
                    <Route path='/events-detail/:id' component={EventsDetail}></Route>
                    <Route path='/events-edit/:id' component={EventsEdit}></Route>
                    <Route path='/events-add' component={EventsAdd}></Route>
                    <Route path='/events-search' component={EventsSearch}></Route>
                    <Route path='/events-show/:searchby/:search' component={EventShow}></Route>
                </Switch>
            </Router>
        </div>
          
        )
    }
}