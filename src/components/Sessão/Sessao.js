    import React from "react";
    import { useParams } from 'react-router-dom';
    import { useState } from "react/cjs/react.production.min";
    import styled from 'styled-components';
    import cartaz from '../../assets/img/ferro.jpg';

    export default function Sessao(){
        
    

        const{idSessao} = useParams()
        console.log(idSessao)

        
        // const [selected, setSelected] = React.useState(`#7B8B99`)

        // function selection(){
        //     function clicado(evento){
        //     setSelected(`#1AAE9E`)
            
        // }
        // }  
        
        const Seat = styled.div`
        @media (max-width: 767px){
                display:flex;
                justify-content:center;
                align-items:center;
                width:30px;
                height:30px;
                border:1px solid #7B8B99;
                border-radius:17px;
                background-color:#C3CFD9;
        }
        `
        return(
            <>
            <Header><h1>CINEFLEX</h1></Header> 
            <Selection><h1>Selecione o(s) assento(s)</h1></Selection>
            <Seats>
                <Seat>
                    5
                </Seat>
                <Seat>
                </Seat>
                <Seat>
                </Seat>
                <Seat>
                </Seat>
                <Seat>
                </Seat>
                <Seat>
                </Seat>
                <Seat>
                </Seat>
                <Seat>
                </Seat>
                <Seat>
                </Seat>
                <Seat>
                </Seat>
            </Seats>
            <Infos>
                <Info1>
                    <div></div>
                    <h1>Selecionado</h1>
                </Info1>
                <Info2>
                    <div></div>
                    <h1>Disponível</h1>
                </Info2>
                <Info3>
                    <div></div>
                    <h1>Indisponível</h1>
                </Info3>
            </Infos>
            <Inputs>
            <h1>Nome do comprador:</h1>
            <input type="text" placeholder="Digite seu nome..."/>
            <h1>CPF do comprador:</h1>
            <input type="text" placeholder="Digite seu CPF..."/>
            </Inputs>
            <Button>Reservar assento(s)</Button>
            <Footer>
            <Plate><img src={cartaz}/></Plate>
            <h1>Quinta-feira - 15:00<br/>
                Homem de Ferro 
            </h1>
            </Footer>
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

    const Seats = styled.div`
    @media (max-width: 767px){
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        width:90%;
        height:220px;
        margin:auto;
    }
    `
    const Infos = styled.div`
    @media (max-width: 767px){
        display:flex;
        justify-content:space-around;
        align-items:center;

        width:90%;
        height:80px;
        margin:auto;
        
    }
    `
    const Info1 = styled.div`
    @media (max-width: 767px){
        width:70px;
        height:56px;
        text-align:center;

        div{
            margin:auto;
            width:35px;
            height:35px;
            border:1px solid #1AAE9E;
            border-radius:17px;
            background-color:#8DD7CF;
        }

        h1{
            margin-top:4px;
            font-size:12px;
            font-weight:500;
        }
    }
    `
    const Info2 = styled.div`
    @media (max-width: 767px){
        width:70px;
        height:56px;
        text-align:center;

        div{
            margin:auto;
            width:35px;
            height:35px;
            border:1px solid #7B8B99;
            border-radius:17px;
            background-color:#C3CFD9;
        }

        h1{
            margin-top:4px;
            font-size:12px;
            font-weight:500;
        }
    }
    `

    const Info3 = styled.div`
    @media (max-width: 767px){
        width:70px;
        height:56px;
        text-align:center;

        div{
            margin:auto;
            width:35px;
            height:35px;
            border:1px solid #F7C52B;
            border-radius:17px;
            background-color:#FBE192;
        }

        h1{
            margin-top:4px;
            font-size:12px;
            font-weight:500;
        }
    }
    `

    const Inputs = styled.div`
    @media (max-width: 767px){
        width:90%;
        height:160px;
        margin:auto;
        margin-top:10px;

        h1{
            font-size:20px;
            margin-bottom:6px;
        }
        input{
            width:100%;
            height:51px;
            margin-bottom:20px;
            border-radius:3px;
            border:1px solid #D4D4D4;
        &::placeholder{
            font-size:14px;
            left:15px;
        }
            
        }
    }
    `

    const Button = styled.div`
    @media (max-width: 767px){
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;

        width:225px;
        height:42px;

        background-color:#E8833A;

        margin:auto;
        margin-top:40px;
        border-radius:3px;

    }
    `

    // const Seat = styled.div`
    // @media (max-width: 767px){
    //         display:flex;
    //         justify-content:center;
    //         align-items:center;
    //         width:30px;
    //         height:30px;
    //         border:1px solid ${PM};
    //         border-radius:17px;
    //         background-color:#C3CFD9;
    // }
    // `

     