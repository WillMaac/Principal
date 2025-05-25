import Perfil from "../../assets/img/perfil.png";

export const Inicio = () => {
  return (
    <section className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-22 h-[700px] xl:h-[500px] lg:h-[500px] bg-[#04152C] lx:px-30 md:h-[750px]" id="home">
      <div className="flex flex-col items-center lg:items-start text-white z-10">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4  bg-clip-text text-shadow-[1px_1px_2px_#0548ff] font-poppins">
          Olá Mundo, meu nome é:
        </h1>
        <p className="text-3xl lg:text-5xl font-extrabold mb-4  bg-clip-text text-shadow-[1px_1px_2px_#ffffff5] font-poppins">
          Anderson De Jesus
        </p>
        <p className="text-2xl inline-block lg:text-2xl mb-4 border-r-4 pr-2 border-[#04152C] whitespace-nowrap overflow-hidden animate-typing typing-effect text-white text-shadow-[1px_1px_2px_#000000f] font-poppins">
        Front-End Web Developer
        </p>
        <a
          href="https://www.linkedin.com/feed/" black
          target="_blank"
          className="bg-white text-black font-semibold text-xl mt-8 px-6 py-3 rounded-full border-2 border-none shadow-[1px_1px_2px_#0145ff] transition-transform duration-300 hover:scale-110 w-[300px] min-w-[200px] h-[60px] flex items-center justify-center m-5 font-poppins"
        >
          Contate-me
        </a>
      </div>
<div className="lg:ml-20">
      <img
        src={Perfil}
        alt="Foto de Perfil"
        className="w-[320px] rounded-full bg-green-700 animate-floating mt-8 lg"
      />
      </div>

      {/* Blurs */}
      

      {/* Animações Personalizadas */}
      <style jsx>{`
        @keyframes floating {
          0% { transform: translate(0, 0px); }
          50% { transform: translate(0, 10px); }
          100% { transform: translate(0, 0); }
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
       @keyframes typing {
  0% { width: 0; }
  
  100% { width: 22ch; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.typing-effect {
  display: inline-block;
  overflow: hidden; /* Mantém o efeito de digitação */
  white-space: nowrap; /* Evita quebra de linha */
  border-right: 1px solid black; /* Simula o cursor */
  width: 22ch; /* Mantém o tamanho correto */
  animation: typing 4s steps(22) infinite alternate, blink 0.7s step-end infinite;
}
        
      `}</style>
    </section>
  );
};