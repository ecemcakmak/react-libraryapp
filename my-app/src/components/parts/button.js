import styled from 'styled-components';

export const ButtonEcem = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid blue;
border-color:pink;
border-radius:0.5rem;
color:yellow;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:red;
    color:blue;
}
:focus{
    outline:none;
}
`; 