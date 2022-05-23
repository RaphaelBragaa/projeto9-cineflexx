import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';


//import cartaz from "./assets/img/ferro.jpg"

export default function Home (){
const [Homes,setHomes] = useState([]) //Criação da Array vazia que posteriormente vai receber os dados da API

useEffect(() => {
    const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
    console.log(requisicao)
    requisicao.then((resposta) => {
        setHomes([...resposta.data])//Dados recebidos utilizando o Spread Operator
    })
},[])

console.log()

    return(
        <>
        <Header><h1>CINEFLEX</h1></Header> 
        <Selection>
            <h1>Selecione o filme</h1>
        </Selection>
        <Gallery>
           {Homes.map(Home => <Link to={`/sessoes/${Home.id}`}><Plate><img src={Home.posterURL}/></Plate></Link>)} 
        </Gallery>
        
         {/* <Link to="/sessoes/:idFilme">FILMES */}
        </>
    )
}

//STYLED COMPONENTS
const Header = styled.header`

@media (max-width: 767px) {
	
display:flex;
justify-content:center;
align-items:center;

width:100%;
min-height:45px;

/* position:fixed;
top:0;
left:0; */

font-size:34px;
color:#E8833A;
background-color: #C3CFD9;
}
`

const Selection = styled.div`

@media (max-width: 767px) {
    display:flex;
    justify-content:center;
    align-items:center;

    font-size:20px;
    min-height:80px;
    text-align: center;
}
`
const Gallery = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;

`
const Plate = styled.div`
@media (max-width: 767px){
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:15px;
    width:140px;
    height:200px;
    border-radius:3px;
    box-shadow: 0px 2px 4px 2px #0000001A;

   
img{
    position:absolute;
    width:129px;
    height:193px;
    object-fit:contain;
}

}
`