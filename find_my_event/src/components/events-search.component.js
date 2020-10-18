import React, { Component } from "react";
import Axios from "axios";
import { Link , NavLink } from "react-router-dom";
export default class EventsSearch extends Component{
    constructor(props){
        super(props);
        this.state ={
            searchby:null,
            search:null
        }
    }
    handleChange =(event)=>{
        event.preventDefault();
        const{name,value} = event.target;
        this.setState({ [name]: value }, () => {console.log(this.state)});
    }
       
    render(){
        return(
            
            <div className = "container" name="main">
                <br></br>
                <br></br>
                <br></br>
            <form >
                <div className="form-group">
                        <label >Search By...</label>
                        <select className="form-control" name="searchby"  onChange={this.handleChange} >
                            <option value ="name">Name</option>
                            <option value="date">Date</option>
                            <option value="venue">Venue</option>
                            <option value="organiserName">Organiser Name</option>
                        </select>
                        <br></br>
                        <br></br>
                    <input className="form-control mr-sm-2" name="search" type="text" placeholder="Search" onChange={this.handleChange} />
                </div>
            </form>
            &nbsp;&nbsp;
             <Link to={`/events-show/${this.state.searchby}/${this.state.search}`} className = "btn btn-success">Search</Link>
            </div>
        )
    }
}