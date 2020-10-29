import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../detail.css";
export default class TestResult extends Component{
    constructor(props){
        super(props);
        this.state ={
            questions :[],
            correct:[],
            takers:[],
            test:null,
            color:'green'
        };
    }

    componentDidMount(){
        Axios.get(`http://localhost:4000/quiz/${this.props.match.params.testid}`)
            .then(result => {this.setState({questions : result.data.questions,test:result.data.name,correct:result.data.answers}); console.log(result.data);})
            .catch(error => console.log("There is some error :",error))
        Axios.get(`http://localhost:4000/answer/${this.props.match.params.id}`)
        .then(result => {this.setState({takers : result.data.answers}); console.log(result.data);})
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
                        Your Quiz has been evaluated! Happy Learning :D
                    </h3>
                    <br></br>
                    <br></br>
                    <h5>Quiz Title :- {this.state.test}</h5>
                    <br></br>
                    <div>
                    {this.state.questions.map((listitem,index)=>{
                        if(this.state.correct[index]==this.state.takers[index])
                        {
                            this.state.color='green'
                        }
                        else{
                            this.state.color='red'
                        }
                        return(
                            <div style={{color:this.state.color}}>
                                
                                Question {index+1} : {listitem}
                                <br></br>
                                Correct answer:- {this.state.correct[index]}
                                <br></br>
                                Your Answer:- {this.state.takers[index]}
                                <br></br>
                                <br></br>
                            </div>

                        )
                    }
                    )}
                    <Link className="btn btn-info"  to='/quiz-review'>Go Back</Link>
                    </div>
                    
                </div>
            </div>
            </div>            
        )
    }

}