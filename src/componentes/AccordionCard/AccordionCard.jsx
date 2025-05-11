import { useState } from "react";

function AccordionCard({ titulo, conteudo }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="max-w-md mx-auto my-4 overflow-hidden rounded-md border border-green-300 bg-cyan-950  shadow-[5px_5px_5px_#ffffff]">
      <button
        className="flex w-full items-center justify-between p-4 text-left font-semibold text-white text-xl bg-[#1b2235] transition-all duration-300 ease-in-out shadow-sm focus:outline-none focus:ring-2 cursor-pointer hover:bg-[#131724]"
        onClick={toggleAccordion}
      >
        <span>{titulo}</span>
        <span className="text-xl">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-justify text-sm text-black">
          <p className="mt-5 text-xl">{conteudo}</p>
        </div>
      )}
    </div>
  );
}

  export default AccordionCard;