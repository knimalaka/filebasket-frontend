import React,{useState} from "react";

class LoginForm extends React.Component {
    
    state = {
        name: '',
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
                <lable>Name:
                    <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange}/>

                </lable>

                <div><lable>Email:
                    <input 
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}/>
                </lable></div>

                <div><lable>Password:
                    <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}/>
                </lable></div>

                <input type="submit"/>

            </form>
        )
    
    }
}

export default LoginForm;