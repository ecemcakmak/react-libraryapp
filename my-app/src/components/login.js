import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../src/App';
import { useForm } from 'react-hook-form';
import Profile from '../pages/profile';
import banner from '../../src/assets/images/library-banner.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Login(){
    const navigate = useNavigate();
    
    const { register,
            handleSubmit,
            formState: { errors } 
        } = useForm({
            defaultValues:{
                username: "",
                password: ""
            }
        });

        const handleLogin = useCallback((form) => {
            fetch("http://127.0.0.1:4000/profiles")
            .then((res) => res.json())
            .then(res => {
                if(res.username == form.username && res.password == form.password){
                    alert("aferin lan düdük")
                    navigate('/profile', {replace: true})
                }
                else{
                    if(window.confirm("Zeka testi")){
                        if(window.confirm("Mal mısın?"))alert("Üzülme len")
                        else alert("İyi bari")
                    }
                    else alert("Yok ki neyi test edesin...")
                }
            })
        }, [navigate]);

        console.log(errors);
        return(
            <React.Fragment>      
            <Row className="loginRow">
                    <Col  className="login col-xxl-5">                    
                        <form className="form" onSubmit={handleSubmit((data) => handleLogin(data))}>
                            <input {...register("username", {required: 'Kullanıcı adı alanı boş bıraktınız.'})} type="text" className="input"/>
                            <p>{errors.username?.message}</p>
                            <input {...register("password", {required: 'Parola alanı boş bıraktınız.', minLength : {value:4, message: "Parolanız en az 4 haneli olmalı."} })} type="password" className="input"/>
                            <p>{errors.password?.message}</p>
                            <button type="submit" className="input__button">ecem</button>
                        </form>
                    </Col>
                    <Col className="banner__col col-xxl-7">
                            <img src={banner} alt='library' className='banner'/>
                    </Col>
            </Row>  
                 
            </React.Fragment>
        );
};

function handleSubmit(event){
    
    
}

export default Login;