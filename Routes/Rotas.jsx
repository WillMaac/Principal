import { Routes, Route } from "react-router-dom";
import "../pages/Header/Header"
import "../pages/About/About"
import "../pages/Projetos/Projetos"
import { Projetos } from "../pages/Projetos/Projetos";
import { Inicio } from "../src/componentes/Header2/Inicio";
import { Sobre } from "../src/componentes/Sobre/Sobre";

function Rotas () {
    return(
    <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
        <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
    )
}

export default Rotas;