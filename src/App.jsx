import './App.css'
import AccordionCard from './componentes/AccordionCard/AccordionCard'
import ProjetoCard from "./componentes/CardProjeto/CardProjeto"
import Contatos from './componentes/Com/Contatos'
import Contato from './componentes/Com/Contatos'
import { Header } from './componentes/Header/Header'
import { Inicio } from './componentes/Header2/Inicio'
import  NavBar  from './componentes/Navbar/Navbar'
import Projetos from './componentes/Projetos/Projetos'
import Skills from './componentes/Skills/Skills'
import Sobre from './componentes/Sobre/Sobre'
import Projeto111 from './assets/img/Teste.png'


function App() {
 return(
  <div>
    <NavBar/>
    <Inicio/>
    <Sobre/>
    <Skills/>
    <Projetos/>
    <Contatos/>
    
  </div>
 )
  
}

export default App
