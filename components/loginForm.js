import React,{useState} from "react";
import styles from '../styles/Home.module.css'

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
                <label style={{color:'white', fontFamily:'Bahnschrift', fontSize:17, fontWeight:1}}>Email :
                    <br/>
                    <input style={{borderRadius:7, width:200, height:27, color:'black',backgroundColor:'#616161',border:'none'}}
                    type="email"
                    name="email"
                    placeholder=" email"
                    onChange={this.handleChange}/>
                </label>
                </div>

                <br/>

                <div className="forms-inputs mb-4">
                <label style={{color:'white', fontFamily:'Bahnschrift', fontSize:17, fontWeight:1}}>Password :
                    <br/>
                    <input style={{borderRadius:7, width:200, height:27, color:'black',backgroundColor:'#616161',border:'none'}}
                    type="password"
                    name="password"
                    placeholder=" password"
                    onChange={this.handleChange}/>
                </label>
                </div>

                <br/>
                <div className="col text-center">
                <button className="btn btn-success btn-circle btn-sm" style={{height:30, borderRadius:30, width:130,fontFamily:'Bahnschrift',fontSize:14}} type="submit">Submit</button>
                </div>
            </form>
        )
    
    }
}

export default LoginForm;