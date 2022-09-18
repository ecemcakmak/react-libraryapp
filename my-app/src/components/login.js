import React, { Component } from "react";
import '../../src/App';
import banner from '../../src/assets/images/library-banner.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Box} from './box';

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
            <Row className="loginRow">
                    <Col lg={5} className="login">                    
                        <form onSubmit={this.handleSubmit}>
                            <input name="username" id="username" type="text"/>
                            <input name="password" id="password" type="password"/>
                            <input type="submit" placeholder="Gönder"/>
                        </form>
                    </Col>
                    <Col lg={7} className="banner__col">
                            <img src={banner} alt='library' className='banner'/>
                    </Col>
            </Row>  
            
                                           
            </React.Fragment>
        )
    }
    
}

export default Login;