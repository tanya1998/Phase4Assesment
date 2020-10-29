import React, { Component } from "react";
import "../view.css";
import axios from "axios";
import { NavLink , Link } from "react-router-dom";
import Axios from "axios";
export default class Testadd extends Component{
    constructor(props){
        super(props);
        this.state = {
            q:'',
            a:'',
            name:null,
            questions: [],
            answers:[]
        }
    }
    handleSubmit =(event) =>{
        const quiz ={
            questions:this.state.questions,
            answers:this.state.answers,
            name:this.state.name
        }
        Axios.post("http://localhost:4000/quiz", quiz)
        .then(result =>{
            console.log("Successfully Added the New Event")
            this.props.history.push('/');
        })
        .catch(error => console.log("There is some error :",error))
    }
      handleQues = i=> e => {
        e.preventDefault()
        this.state.questions[i] = e.target.value
        console.log(this.state.questions)
        // this.setState({
        //  q:e.target.value
        // })
        // console.log(this.state.q)
      }
      handleAns = i=> e =>{
        e.preventDefault()
        this.state.answers[i] = e.target.value
        // console.log(this.state.answers)
        // this.setState({
        //  a:e.target.value
        // })
        // console.log(this.state.a)

      }
      handleName = e=>{
        e.preventDefault()
        this.setState({
         name:e.target.value
        })
        console.log(this.state.name)
      }
      addQuestion = e => {
        e.preventDefault()
        console.log(this.state.questions)
        if(this.state.q==null || this.state.a==null)
            return
        this.setState({

          questions :this.state.questions.concat('') ,
          answers :this.state.answers.concat(''),
        })
        console.log(this.state.questions)
        console.log(this.state.answers)
      }
    render()
       {
           return(
            <div className="container">
            <br></br>
            <br></br>
            <br></br>
            
            <div className ="form-group">Please Enter Test Name
                    <input
                    type="text"
                    onChange={this.handleName}
                    className ={`form-control `}
                    name = {`name`}
                    />
            </div>
            {this.state.questions.map((listitem,index) => (
              <span key={index}>
                
                <div className ="form-group">Question 
                    <input
                    type="text"
                    onChange={this.handleQues(index)}
                    className ={`form-control `}
                    name = {`ques`}
                    />
                </div>
                <div className ="form-group">Answer
                    <input
                    type="text"
                    onChange={this.handleAns(index)}
                    name = {`ans`}
                    className ={`form-control `}
                    />
                </div>
              </span>
            ))}
        
            &nbsp;&nbsp;
            <button className="btn btn-info" onClick={this.addQuestion}>Add New Question</button>
            &nbsp;&nbsp;
            <button type ="submit" className="btn btn-secondary" onClick={this.handleSubmit}>Submit</button>
          </div>
           )
       }
    
}