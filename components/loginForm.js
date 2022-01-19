import React,{useState} from "react";

class LoginForm extends React.Component {
    
    state = {
        email: '',
        password: ''
    };

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Submit button clicked");
        console.log(this.state);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>

                <br/><br/>

                <div className="forms-inputs mb-4">
                <label>Email:
                    <br/>
                    <input 
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}/>
                </label>
                </div>

                <br/>

                <div className="forms-inputs mb-4">
                <label>Password:
                    <br/>
                    <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}/>
                </label>
                </div>

                <br/>
                <div className="col text-center">
                <button className="btn btn-success btn-sm" type="submit">Submit</button>
                </div>
            </form>
        )
    
    }
}

export default LoginForm;