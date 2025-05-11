import Card from "../Card/Card";


function Sobre() {
  return (
    <section className="bg-[#080F19]" id="sobre">
      <h2 className="text-center p-5 text-3xl text-white xl:py-10 lg:text-5xl">
        Sobre min
      </h2>
      <div className="max-w-[1220px]  mx-auto">
        <p className="  text-center text-[18px] xl:text-2xl  text-white  py-10  xl:text-justify lg:text-[30px] 2xl:text-3xl">
          Olá, sou Anderson De Jesus, desenvolvedor front-end apaixonado por
          transformar ideias em interfaces modernas, funcionais e centradas no
          usuário. Sou estudante de Análise e Desenvolvimento de Sistemas, e
          atualmente atuo como desenvolvedor front-end com foco em tecnologias
          como React e Next.js, frameworks que utilizo para criar experiências
          digitais rápidas, responsivas e intuitivas. Com um olhar sempre atento
          à evolução do mercado, venho expandindo meu conhecimento para o
          desenvolvimento mobile, explorando as tecnologias Kotlin e React
          Native, com o objetivo de construir aplicações completas e
          multiplataforma. Tenho experiência com ferramentas essenciais do
          ecossistema de desenvolvimento, como Figma para design de interfaces,
          Google Cloud para soluções escaláveis e Docker para ambientes de
          desenvolvimento mais eficientes. Ao longo da minha jornada, criei
          projetos pessoais e colaborei com clientes como freelancer, sempre com
          foco na entrega de valor e inovação. Este portfólio é o reflexo da
          minha trajetória, das minhas conquistas e do meu compromisso com a
          excelência técnica e criativa. Convido você a explorar os meus
          projetos e conhecer de perto o meu trabalho. Se procura um
          profissional proativo, resiliente e em constante evolução, estou
          pronto para contribuir com a sua equipa ou dar vida ao seu projeto.
        </p>
      </div>

      <div className="flex flex-col flex- justify-center items-center md:flex-wrap xl:flex-row xl:flex-nowrap"   id="informacoes">
        <Card
          titulo="Currículo"
          descricao="Apresento meus conhecimentos adquiridos, formações e experiências práticas."
          textoBotao="Baixar CV"
          onClick={() => alert("Baixando CV...")}
        />
        <Card
          titulo="Certificados"
          descricao="Certificados de plataformas como Alura, FIAP, Udemy, etc."
          textoBotao="Ver Certificados"
          onClick={() => alert("Abrindo certificados...")}
        />
        <Card
          titulo="Experiência"
          descricao="Experiência prática com empresas reais e soluções tecnológicas."
          textoBotao="Ver Experiência"
          onClick={() => alert("Mostrando experiência...")}
        />
      </div>
    </section>
  );
}

export default Sobre;