import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Filme from "./Filme/Filme";
import Sessao from "./Sessão/Sessao";


export default function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" except element={<Home />} />
		<Route path="/sessoes/:idFilme" element={<Filme />}/>
        <Route path="/assentos/:idSessao" element={<Sessao  />}/>
        </Routes>
        </BrowserRouter>
    )
}


