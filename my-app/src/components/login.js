import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../src/App';
import Profile from '../pages/profile';
import banner from '../../src/assets/images/library-banner.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Login(){
    const navigate = useNavigate();
    const onClickHandler = useCallback(() => navigate('/profile', {replace: true}), [navigate]);
 
        return(
            <React.Fragment>      
            <Row className="loginRow">
                    <Col lg={5} className="login">                    
                        <form className="form" onSubmit={handleSubmit}>
                            <input name="username" id="username" type="text" className="input"/>
                            <input name="password" id="password" type="password" className="input"/>
                            <button onClick={onClickHandler} type="button" className="input__button">ecem</button>
                        </form>
                    </Col>
                    <Col lg={7} className="banner__col">
                            <img src={banner} alt='library' className='banner'/>

                    </Col>
            </Row>  
                 
            </React.Fragment>
        );
};

function handleSubmit(event){
    
    
}

export default Login;