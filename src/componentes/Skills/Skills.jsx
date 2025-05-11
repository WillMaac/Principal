import html5Image from "../../assets/img/html5.svg";
import Css3Image from "../../assets/img/css3.svg";
import SassImage from "../../assets/img/scss2.svg";
import JavascriptImage from "../../assets/img/Javascript.svg";
import ReactImage from "../../assets/img/react.svg";
import GitImage from "../../assets/img/git.svg";
import GitHubImage from "../../assets/img/github.svg";
import MongoDbImage from "../../assets/img/mongodb.svg";
import AccordionCard from "../AccordionCard/AccordionCard"


function Skills(){
  return (
    <section className="bg-[#04152C] p-[20px]">
      <h2 className="mb-6 m-2 text-3xl text-white">Hard-Skills</h2>
      <div>
        <div className="flex gap-5 items-center justify-center flex-wrap">
          <img src={html5Image} alt="HTML5" className="w-15"/>
          <img src={Css3Image} alt="Css3" className="w-15"/>
          <img src={SassImage} alt="Sass" className="w-15"/>
          <img
            src={JavascriptImage}
            alt="JavaScript" className="w-10"/>
          <img src={ReactImage} alt="ReactJs" className="w-15"/>
          <img src={MongoDbImage} alt="Mongodb" className="w-15"/>
          <img src={GitImage} alt="Git" className="w-15"/>
          <img src={GitHubImage} alt="GitHub" className="w-15"/>
        </div>
        <h2 className="m-8 text-3xl text-white">Soft-Skills</h2>

        <div>
      <AccordionCard
        titulo="Trabalho em Equipe"
        conteudo="Sei trabalhar em equipe e colaborar com colegas, ouvir opiniões diferentes e trabalhar em conjunto para atingir objetivos comuns."
      />
      <AccordionCard
        titulo="Comunicação Clara"
        conteudo=" Sei expressar minhas ideias de forma objetiva, tanto na fala quanto na escrita, facilitando o entendimento e evitando mal-entendidos."
      />
      <AccordionCard
        titulo="Pensamento Crítico"
        conteudo=" Sei analisar situações de forma lógica e racional, questionando suposições e avaliando alternativas."
      />
<AccordionCard
        titulo="Criativo"
        conteudo="Como desenvolvedor front-end, a criatividade é a base do meu trabalho desde transformar ideias abstratas em interfaces visuais cativantes, até encontrar soluções elegantes para desafios de usabilidade. Tenho um olhar atento para o design e uma mente focada em performance e acessibilidade, sempre buscando criar experiências digitais intuitivas e modernas."
      />



      <AccordionCard
        titulo="Gestão de Tempo e Prioridades"
        conteudo=" Aprendi a lidar com deadlines, prioridades de tarefas e manter o foco especialmente em ambientes remotos ou com várias entregas."
      />

<AccordionCard
        titulo="Flexibilidade e Adaptabilidade"
        conteudo="O mundo do Front-End muda rápido (novos frameworks, novas técnicas) é importante saber adaptar-se. E durante minha fase inicial eu consegui desenvolver essas habilidades"
      />

<AccordionCard
        titulo="Paciência e Resiliência"
        conteudo="Nem sempre as coisas funcionam de primeira (quem nunca ficou horas com um bug?), por isso é essencial manter a calma e persistir. Durante minha fase de aprendizagem e aplicação do meu conhecimento em projetos pessoais consegui desenvolver essas habilidades."
      />
    </div>
        <div>
      </div>
      </div>
    </section>
  );
};

export default Skills