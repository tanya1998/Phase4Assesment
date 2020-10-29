import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../detail.css";
export default class TestTake extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:null,
            test:null,
            questions :[],
            answers:[],
        };
    }
    handleSubmit =(event) =>{
        const quiz ={
            answers:this.state.answers,
            name:this.state.name,
            testId:this.props.match.params.id
        }
        Axios.post("http://localhost:4000/answer", quiz)
        .then(result =>{
            console.log("Successfully Added the Answer Of participant")
            this.props.history.push('/quiz-review');
        })
        .catch(error => console.log("There is some error :",error))
    }
    handleName = e=>{
        e.preventDefault()
        this.setState({
         name:e.target.value
        })
        console.log(this.state.name)
    }

    handleAns = i=>e=>{
        e.preventDefault()
        this.state.answers[i] = e.target.value;
        console.log(this.state.answers)
    }
    componentDidMount(){
        Axios.get(`http://localhost:4000/quiz/${this.props.match.params.id}`)
            .then(result => {this.setState({questions : result.data.questions,test:result.data.name}); console.log(result.data.questions);})
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
                        All the Best!<br></br><br></br>
                        Test Name :- {this.state.test}
                        <br></br><br></br>
                        Please Enter Your Name:-
                        <input
                        type="text"
                        onChange={this.handleName}
                        className ={`form-control `}
                        name = {`name`}
                        />
                    </h3>
                    <br></br>
                    <br></br>
                    <div>
                    {this.state.questions.map((listitem)=>{
                        this.state.answers.concat('')
                    })}
                    {this.state.questions.map((listitem,index)=>{
                        return(
                            <div>
                                
                                Question {index+1} : {listitem}
                                <br></br>
                                Please Type Correct answer in box below.
                                <div className ="form-group">
                                    <input
                                    type="text"
                                    onChange={this.handleAns(index)}
                                    name = {`ans`}
                                    className ={`form-control `}
                                />
                                </div>
                            </div>

                        )
                    }
                    )}
                    <button className="btn btn-success"  onClick={this.handleSubmit}>Submit</button>
                    </div>
                    
                </div>
            </div>
            </div>            
        )
    }

}