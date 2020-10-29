import React, { Component } from "react";
import "../view.css";
import axios from "axios";
import { NavLink , Link } from "react-router-dom";

export default class TestReView extends Component{
    constructor(props){
        super(props);
        this.state = {
            quizzes: []
        }
    }
    getQuiz(){
        axios.get(`http://localhost:4000/answer`)
            .then(result =>{
                const quizzesList = result.data;
                this.setState({quizzes:quizzesList })
                console.log(this.state.quizzes)
            })
            .catch(error=> console.log("There is some error :",error))
    }
    componentDidMount(){
        this.getQuiz();
    }
    render(){
        return(
            
            <div className="container cta-100 ">
                
            <div className="container">
                <div className="row blog">
                <div className="col-md-12">
                    <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
                    
                
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <div className="row">
                            
                            {
                                this.state.quizzes.map((listitem)=>{
                                    return(
                                        <div className="col-md-4" >
                                        <div className="item-box-blog">
                                            <div className="item-box-blog-image">
                                        
                                            <div className="item-box-blog-date bg-blue-ui white"> <span className="Date">{listitem.date}</span> </div>
                                        
            
                                            </div>
                                            <div className="item-box-blog-body">
                                            
                                            <div>
                                               
                                                <h6>Test Taker Name:-</h6>
                                                    <h5 >{listitem.name}</h5>
                                               
                                            </div>

                                            
                                            <div className="mt"> <Link to={`/test-result/${listitem.id}/${listitem.testId}`} className="btn btn-success">Result and Review</Link> </div>
                                    
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