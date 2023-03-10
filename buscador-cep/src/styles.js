import styled from "styled-components"

export const Conteiner = styled.div`

background: #F7971E;  
background: -webkit-linear-gradient(to right, #FFD200, #F7971E);  
background: linear-gradient(to right, #FFD200, #F7971E); 
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

export const Title_One = styled.h1`

    font-size: 100px;
    text-align: center;
    animation: flipTitle 2s;
    
    @keyframes flipTitle {
        from {
            transform: rotateX(90deg) ;
        }
        to{
            transform: rotateX(0deg);
        }
    }

    @media all and (max-width: 414px){
        font-size: 75px;
    }

`

export const SingleInput = styled.div`

    background-color: rgb(0,0,0, 0.2);
    padding: 20px;
    margin: 35px 0;
    display: flex;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    width: 300px;


    input{
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 20px;
        width: 100%;
        margin-right: 8px;
        color: #000;

    }

   
    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
    }

    input::placeholder{
        color:#1c1c1c ;
    }


    
    

`

export const ButtonOne = styled.button`

background-color: transparent;
border: 0;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-size: 25px;
transition: transform 0.3s;


:hover{
    color:#FFD101;
    transition: 0.3s;
    transform: scale(1.2);
}
 

`


export const Main = styled.main`

display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0,0,0, 0.2);
flex-direction: column;
width: 330px;
border-radius: 20px;

 h2{
    margin: 20px 0;
    font-size: 30px;
 }

 p{
    margin-bottom: 20px ;
    font-size: 20px ;
    text-align: center;
 }


`



// 24:19

