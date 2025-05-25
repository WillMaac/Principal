import Projeto1 from "../../assets/img/p1.png";
import Projeto2 from "../../assets/img/Teste.png";
import Html from "../../assets/img/html5.svg";
import Css from "../../assets/img/css3.svg";
import JavaScript from "../../assets/img/Javascript.svg";
import ProjetoCard from "../CardProjeto/CardProjeto";


 function Projetos () {
  return (
    <section className="flex justify-center items-center flex-col bg-[#080F19]" id="projetos">
      <h1 className="text-3xl m-4 text-white lg:text-4xl font-roboto">Projetos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center m-5">
      <ProjetoCard
  title="Landing Page"
  image={Projeto1}
  techs={["html", "css", "js"]}
  codeLink="https://github.com/WillMaac/Projeto-Spider-man-multiverses"
  previewLink="https://willmaac.github.io/Projeto-Spider-man-multiverses/"
/>

<ProjetoCard
  title="Landing Page"
  image={Projeto1}
  techs={["html", "css", "js"]}
  codeLink="https://github.com/seu-repo"
  previewLink="https://preview-site.com"
/>

<ProjetoCard
  title="Landing Page"
  image={Projeto1}
  techs={["html", "css", "js"]}
  codeLink="https://github.com/seu-repo"
  previewLink="https://preview-site.com"
/>

<ProjetoCard
  title="Landing Page"
  image={Projeto1}
  techs={["html", "css", "js"]}
  codeLink="https://github.com/seu-repo"
  previewLink="https://preview-site.com"
/>

<ProjetoCard
  title="Landing Page"
  image={Projeto1}
  techs={["html", "css", "js"]}
  codeLink="https://github.com/seu-repo"
  previewLink="https://preview-site.com"
/>

<ProjetoCard
  title="Landing Page"
  image={Projeto1}
  techs={["html", "css", "js"]}
  codeLink="https://github.com/seu-repo"
  previewLink="https://preview-site.com"
/>
</div>
    </section>
  );
};

export default Projetos;