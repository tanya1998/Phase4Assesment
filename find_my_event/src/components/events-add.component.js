import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const emailRegex = RegExp( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid = formErrors => {
    let valid = true;
    Object.values(formErrors).forEach(value =>{
      value.length >0 && (valid = false)
    });
    return valid;
  }
export default class EventsAdd extends Component{
    constructor(props){
        super(props);
        this.state ={
            event: {},
            name:null,
            date: null,
            time: null,
            venue: null,
            description: null,
            organiser_name: null,
            organiser_email: null,
            formErrors :{
                name:"",
                date: "",
                time: "",
                venue: "",
                description: "",
                organiser_name: "",
                organiser_email: "",
            }
        };
        
    }
    handleSubmit =(event) =>{
        event.preventDefault();
        if(formValid(this.state.formErrors)){
            console.log('Form is Valid .');
            const event_new= {
                id:this.props.match.params.id,
                name:this.state.name,
                date: this.state.date,
                time: this.state.time,
                venue: this.state.venue,
                description: this.state.description,
                organiserName: this.state.organiser_name,
                organiserEmail: this.state.organiser_email,
                }
           
            Axios.post("http://localhost:4000/events", event_new)
            .then(result =>{
                console.log("Successfully Added the New Event")
                this.props.history.push('/events');
            })
            .catch(error => console.log("There is some error :",error))
        }
        else{
            console.error('Form Invalid .');
            
        }
        
    }
    handleChange =(event)=>{
        event.preventDefault();
        const{name,value} = event.target;
        let formErrors = this.state.formErrors;
        switch(name){
            case "name":
                formErrors.name = value.length < 3 && value.length > 0 ? "Minimum 3 chars are required" : "";
                console.log("Name changed")
                break;
            case "description":
                formErrors.description = value.length <=0 ? "Cannot be left Empty" : "";
                console.log("content changed")
                break;
            case "date":
                formErrors.date = value==null ? "Cannot be left Empty" : "";
                console.log("date changed")
                break;
            case "time":
                formErrors.time = value==null ? "Cannot be left Empty" : "";
                console.log("time changed")
                break;
            case "venue":
                formErrors.venue = value.length <=0 ? "Cannot be left Empty" : "";
                console.log("venue changed")
                break;
            case "organiser_name":
                formErrors.organiser_name = value.length <=0 ? "Cannot be left Empty" : "";
                console.log("organiser_name changed")
                break;
            case "organiser_email":
                formErrors.organiser_email = emailRegex.test(value) && value.length >3 && value.length > 0 ? "" : "Invalid Email Address" ;
                console.log("organiser_email changed")
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => {console.log(this.state)});
    }
    render(){
        const { formErrors } = this.state;
        return(
            <div className="container">
                <form onSubmit = {this.handleSubmit}>
                    <div className ="form-group">
                        <br></br>
                        <br></br>
                        <label>Event Name</label>
                        <input type ="text" className ={`form-control ${formErrors.name.length > 0 ? 'is-invalid':null}`} name="name" onChange={this.handleChange} />
                        {formErrors.name.length > 0  && 
                        <span>
                            {formErrors.name}
                        </span>
                        }
                    </div>
                    <div className ="form-group">
                        <label>Event description</label>
                        <input type ="text" className ={`form-control ${formErrors.description.length > 0 ? 'is-invalid':null}`} name="description" onChange={this.handleChange} />
                        {formErrors.description.length > 0  && 
                        <span>
                            {formErrors.description}
                        </span>
                        }
                    </div>
                    <div className ="form-group">
                        <label>Event Date</label>
                        <input type ="date" className ={`form-control ${formErrors.date.length > 0 ? 'is-invalid':null}`} name="date"  onChange={this.handleChange} />
                        {formErrors.date.length > 0  && 
                        <span>
                            {formErrors.date}
                        </span>
                        }
                    </div>
                    <div className ="form-group">
                        <label>Event Time</label>
                        <input type ="time" className ={`form-control ${formErrors.time.length > 0 ? 'is-invalid':null}`} name="time" onChange={this.handleChange} />
                        {formErrors.time.length > 0  && 
                        <span>
                            {formErrors.time}
                        </span>
                        }
                    </div>
                    <div className ="form-group">
                        <label>Event Venue</label>
                        <input type ="text" className ={`form-control ${formErrors.venue.length > 0 ? 'is-invalid':null}`} name="venue"  onChange={this.handleChange} />
                        {formErrors.venue.length > 0  && 
                        <span>
                            {formErrors.venue}
                        </span>
                        }
                    </div>
                    <div className ="form-group">
                        <label>Organiser Name</label>
                        <input type ="text" className ={`form-control ${formErrors.organiser_name.length > 0 ? 'is-invalid':null}`} name="organiser_name"  onChange={this.handleChange} />
                        {formErrors.organiser_name.length > 0  && 
                        <span>
                            {formErrors.organiser_name}
                        </span>
                        }
                    </div>
                    <div className ="form-group">
                        <label>Organiser Email</label>
                        <input type ="text" className ={`form-control ${formErrors.organiser_email.length > 0 ? 'is-invalid':null}`} name="organiser_email" onChange={this.handleChange} />
                        {formErrors.organiser_email.length > 0  && 
                        <span>
                            {formErrors.organiser_email}
                        </span>
                        }
                    </div>
                    <Link className ="btn btn-info" to = '/events'>Back to List</Link>
                     &nbsp;&nbsp;
                    <button type ="submit" className="btn btn-secondary">Add</button>
                </form>
            </div>
        )
    }

}