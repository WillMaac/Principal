import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const ProjetoCard = ({ title, image, techs, codeLink, previewLink }) => {
  const techIcons = {
    html: <FaHtml5 className="text-orange-600" />,
    css: <FaCss3Alt className="text-blue-500" />,
    js: <FaJsSquare className="text-yellow-400" />,
  };

  return (

    <div className="bg-[#fff] border-2 border-none rounded-xl p-4   text-center w-[330px] h-auto overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 shadow-[5px_5px_5px_#33f303]">
      <h2 className="text-xl mb-4 font-poppins">{title}</h2>
      <div className="flex justify-center mb-4 ">
      <img
        src={image}
        alt={`Imagem do projeto ${title}`}
        className="p-1 max-w-[330px] h-[500px] rounded-2xl "

      />
      </div>
      <div className="flex  justify-center gap-4 mb-4 text-3xl text-gray-800">
        {techs.map((tech) => techIcons[tech])}
      </div>
      <div className="flex justify-center gap-20">
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-yellow-400 px-4 py-1 rounded-full font-medium hover:bg-yellow-500 cursor-pointer font-poppins">
            Código
          </button>
        </a>
        <a href={previewLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-yellow-400 px-4 py-1 rounded-full font-medium hover:bg-yellow-500 cursor-pointer font-poppins">
            Preview
          </button>
        </a>
      </div>
    </div>
    
  );
};

export default ProjetoCard;
