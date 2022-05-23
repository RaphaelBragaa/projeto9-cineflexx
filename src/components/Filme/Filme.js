import React from "react";
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import cartaz from '../../assets/img/ferro.jpg';

export default function Filme(){
    const { idFilme } = useParams();

    const [Filmes, setFilmes] = useState({}) //Criação da Array vazia que posteriormente vai receber os dados da API
    
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        console.log(requisicao)
        requisicao.then((resposta) => {
            setFilmes({...resposta.data})//Dados recebidos utilizando o Spread Operator
        })
    },[])

	console.log(Filmes + "ESSE AQI")
    return(
        <>
        {/* <Link to="/assentos/:idSessao">Sessoes</Link> */}
        <Header><h1>CINEFLEX</h1></Header> 
        <Selection><h1>Selecione o horário</h1></Selection>
        <Date>
            <h1>Quinta-feira - 24/06/2021</h1>
            <Container>
            <Button>45</Button>
            <Button>19:00</Button>
            </Container>
            </Date>
        <Link to="/assentos/:idSessao">
        <Footer>
        <Plate><img src={cartaz}/></Plate>
        <h1>Homem de Ferro</h1>
        </Footer>
        </Link>
        </>
    )
}

{/* <Date>
            <h1>Quinta-feira - 24/06/2021</h1>
            <Container>
            <Button>15:00</Button>
            <Button>19:00</Button>
            </Container>
            </Date> */}

            {/* // {Filmes.map(Filme => <Date>
            //     <h1>${Filme.days.weekday} - ${Filme.days.date}</h1>
            //     <Container>
            //     <Button>${Filme.days.showtimes[0].name}</Button>
            //     <Button>${Filme.days.showtimes[1].name}</Button>
            //     </Container>
            // </Date>)} */}


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
const Date = styled.div`
@media (max-width: 767px){
    margin-left:20px;
    margin-bottom:30px;

h1{
    font-weight:400;
}

}
`
const Button = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    
    margin-top:15px;
    margin-right:15px;
    
    height:43px;
    width:83px;
    
    border-radius:3px;
    background-color:#E8833A;

`

const Container = styled.div`
display:flex;
`

const Footer = styled.footer`
@media (max-width: 767px) {
    display:flex;
    align-items:center;
    position:fixed;
    width:100%;
    bottom:0;
    margin:auto;
    height:120px;
    background-color:#DFE6ED;
    border-top: 1px solid #9EADBA;

    h1{
        margin-left:20px;
        font-size:26px;
        font-family: 'Roboto', sans-serif;
    }
}
`
const Plate = styled.div`
@media (max-width: 767px){
    position:relative;
    display:flex;
    margin-left:10px;
    justify-content:center;
    align-items:center;
    width:64px;
    height:89px;
    border-radius:3px;
    background-color:#FFFFFF;
    box-shadow: 0px 2px 4px 2px #0000001A;

   
img{
    position:absolute;
    width:48px;
    height:72px;
    object-fit:contain;
}

}
`