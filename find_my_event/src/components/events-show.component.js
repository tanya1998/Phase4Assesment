import React, { Component } from "react";
import "../view.css";
import axios from "axios";
import { NavLink , Link } from "react-router-dom";

export default class EventShow extends Component{
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }
    getEvents(){
        console.log(`http://localhost:4000/events?${this.props.match.params.searchby}=${this.props.match.params.search}`)
        axios.get(`http://localhost:4000/events?${this.props.match.params.searchby}=${this.props.match.params.search}`)
            .then(result =>{
                const eventsList = result.data;
                this.setState({events:eventsList })
                console.log(this.state.events)
            })
            .catch(error=> console.log("There is some error :",error))
    }
    componentDidMount(){
        this.getEvents();
    }
    render(){
        return(

            
            <div className="container cta-100 ">
               {
                   this.state.events.length<=0 ? (<h2>No events found !!!</h2 >): (<h5></h5>)
               }
    
            <div className="container">
                <div className="row blog">
                <div className="col-md-12">
                    <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
                    
                
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <div className="row">
                            {
                                this.state.events.map((listitem)=>{
                                    return(
                                        <div className="col-md-4" >
                                        <div className="item-box-blog">
                                            <div className="item-box-blog-image">
                                        
                                            <div className="item-box-blog-date bg-blue-ui white"> <span className="Date">{listitem.date}</span> </div>
                                        
            
                                            </div>
                                            <div className="item-box-blog-body">
                                            
                                            <div>
                                               
                                                <h6>Event Title</h6>
                                                    <h5 >{listitem.name}</h5>
                                               
                                            </div>

                                            <div style={{padding: 15 +'px'}}>
                                                <p>{listitem.description}</p>
                                            </div>
                                            <div className="mt"> <Link to={`/events-detail/${listitem.id}`} className="btn btn-success">More Details</Link> </div>
                                    
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }

                                )
                            }
                            
                            
                            
                        </div>
                    
                        </div>
                    
                    </div>
                    
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
          
        )
    }
}