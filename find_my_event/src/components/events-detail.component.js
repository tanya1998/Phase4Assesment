import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../detail.css";
export default class EventsDetail extends Component{
    constructor(props){
        super(props);
        this.state ={
            event :{}
        };
    }
    deleteEvent(id){
        console.log(id);
        Axios.delete(`http://localhost:4000/events/${id}`)
        .then(result => {
            console.log("Event Delted with id:",id);
            this.props.history.push('/events');
        })
        .catch(error => console.log("There is some error :",error))
    }
    componentDidMount(){
        Axios.get(`http://localhost:4000/events/${this.props.match.params.id}`)
            .then(result => {this.setState({event : result.data}); console.log(result.data)})
            .catch(error => console.log("There is some error :",error))
        }
    render(){
        return(
            
            <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <br></br>
                        <br></br>
                        Details of Event
                    </h3>
                    <br />
                </div>
                <div className="panel-body">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Event Name</th>
                                <td>{this.state.event.name}</td>
                            </tr>
                            <tr>
                                <th>Event Date</th>
                                <td>{this.state.event.date}</td>
                            </tr>
                            <tr>
                                <th>Event Time</th>
                                <td>{this.state.event.time}</td>
                            </tr>
                            <tr>
                                <th>Event Venue</th>
                                <td>{this.state.event.venue}</td>
                            </tr>
                            <tr>
                                <th>Event Description</th>
                                <td>{this.state.event.description}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5 className="panel-title">
                        Details of Organiser
                    </h5>
                    <br />
                </div>
                <div className="panel-body">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Organiser Name</th>
                                <td>{this.state.event.organiserName}</td>
                            </tr>
                            <tr>
                                <th>Organiser Email</th>
                                <td>{this.state.event.organiserEmail}</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link className ="btn btn-info" to = '/events'>Back to List</Link>
                                    &nbsp;&nbsp;
                                    <Link className = "btn btn-secondary" to ={`/events-edit/${this.state.event.id}`}>Edit</Link>
                                    &nbsp;&nbsp;
                                    <button onClick={this.deleteEvent.bind(this,this.state.event.id)} className = "btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
            
        )
    }

}