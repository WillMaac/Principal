import Perfil from "../../assets/img/perfil.png";

export const Inicio = () => {
  return (
    <section className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-22 h-[700px] xl:h-[500px] lg:h-[500px] bg-[#04152C] lx:px-30 md:h-[750px]" id="home">
      <div className="flex flex-col items-center lg:items-start text-white z-10">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4  bg-clip-text">
          Olá Mundo, meu nome é:
        </h1>
        <p className="text-3xl lg:text-5xl font-extrabold mb-4  bg-clip-text ">
          Anderson De Jesus
        </p>
        <p className="text-2xl inline-block lg:text-2xl mb-4 border-r-4 pr-2 border-[#04152C] whitespace-nowrap overflow-hidden animate-typing typing-effect text-white">
          Front-End Web Developer
        </p>
        <a
          href="mailto:Willsouzza.333@gmail.com"
          className="bg-white text-black font-semibold text-xl mt-8 px-6 py-3 rounded-full border-2 border-lime-400 transition-transform duration-300 hover:scale-110 w-[300px] min-w-[200px] h-[60px] flex items-center justify-center m-5"
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
      <div className="absolute top-[-128px] left-[10vw] w-[50vw] h-[50vw] min-w-[350px] min-h-[350px] bg-[#193764b3] rounded-full filter blur-[100px] z-0" />

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
          from { width: 0; }
          to { width: 24ch; }
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
        .typing-effect {
          display: inline-block;
          max-width: 24ch;
          animation: typing 4s steps(20) 100s infinite alternate, blink 0.7s step-end infinite;
        }
      `}</style>
    </section>
  );
};