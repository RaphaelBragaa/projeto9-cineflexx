import styled from 'styled-components';

export default function Footer(props){
    return(
        <>
        <Footer>
        <Plate><img src={props.Cartaz}/></Plate>
        <h1>Homem de Ferro</h1>
        </Footer>
        </>
    )
}



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