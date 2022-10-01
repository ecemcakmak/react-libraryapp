import styled from 'styled-components';
import profile from '../../src/assets/images/profile.png';

export default function Box(){
    return(
        <div className='box__profile'>
        <div className='box__profile__picture'>
        <img src={profile} alt='library' className='profile'/>
        </div>
         
            <form className="form">
                <input name="username" id="username" type="text" className="input"/>
                <input name="password" id="password" type="password" className="input"/>
            </form>
        </div>
    ) 
   
}