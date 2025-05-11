import React from "react";

// Definindo o componente Card com props
function Card({ titulo, descricao, textoBotao, onClick }) {
  return (
    <div className="flex flex-wrap gap-5 justify-center items-center py-10 md:flex-col md:items-center w-[450px] lg:items-center sm:items-center xl:items-center xl:p-5">
      <div
        className="
        flex flex-col items-center
        bg-white
        border-2 border-green-300
        rounded-xl 
        p-6 
        max-w-[290px]
        h-[360px]
        text-center
        shadow-md
        transition-transform duration-300 ease-in-out
        hover:scale-105
        md:max-w-[460px]
        md:h-[480px]
        md:p-[15px]
        xl:w-[380px]
        md:my-3 md:mx-auto
        xl:my-3 xl:mx-auto
        
      "
      >
        <h2 className="text-2xl mb-4">{titulo}</h2>

        <p className="text-gray-700 mb-6">{descricao}</p>

        <button
          className="
            bg-black
            text-white  
            py-2.5 px-6 
            rounded-md  
            cursor-pointer
            transition-colors duration-300 ease-in-out
            hover:bg-gray-800 
          "
          onClick={onClick}
        >
          {textoBotao}
        </button>
      </div>
    </div>
  );
}

export default Card;

// Exemplo de uso (opcional, apenas para demonstração)
// const App = () => {
//   return (
//     <Card
//       titulo="Título do Card"
//       descricao="Esta é a descrição do card, explicando seu conteúdo de forma breve."
//       textoBotao="Clique Aqui"
//       onClick={() => alert('Botão clicado!')}
//     />
//   );
// }
