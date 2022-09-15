import React, { Component } from "react";

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch("http://localhost:3000/profile")
        .then(res => res.json())
        .then(json => {
            this.setState({
                username: json.username,
                password: json.password
            }, () => console.log(this.state));
        })
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.state.username == event.target[0].value && this.state.password == event.target[1].value){
            alert("Aferin lan düdük")
        }
        else{
            alert("bi boku beceremedin")
        }
    }

    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" id="username" type="text"/>
                    <input name="password" id="password" type="password"/>
                    <input type="submit" placeholder="Gönder"/>
                </form>
            </React.Fragment>
        )
    }
    
}

export default Login;