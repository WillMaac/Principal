import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

function Contato() {
  return (
    <div className="bg-amber-800">
      <h2 className="text-center text-3xl p-4">Contatos</h2>
      <h1 className="text-2xl m-4">Gostou do meu trabalho?</h1>
      <p className="text-xl m-4">
        Entre em contato ou acompanhe as minhas redes sociais!
      </p>

      <div className="flex flex-col justify-center items-center gap-4">
        <a href="https://www.linkedin.com/in/anderson-de-jesus-480b2a309/" className="flex justify-center items-center">
          <div className="flex text-center items-center justify-center bg-blue-950 rounded-[5px] w-[360px]">
            <FaLinkedin className="w-10 h-10 text-center"/>
            <span className="text-3xl ml-3">Linkedin</span>
          </div>
          <span className="text-blue-950">↗</span>
        </a>
        <a href="https://www.instagram.com/annderson15/" className="flex justify-center items-center">
          <div className="flex text-center items-center justify-center bg-blue-950 rounded-[5px] w-[360px]">
            <FaInstagram className="w-10 h-10 text-center"/>
            <span className="text-3xl ml-3">Instagram</span>
          </div>
          <span>↗</span>
        </a>
        <a href="https://github.com/WillMaac" className="flex justify-center items-center">
          <div className="flex text-center items-center justify-center bg-blue-950 rounded-[5px] w-[360px]">
            <FaGithub className="w-10 h-10 text-center"/>
            <span className="text-3xl ml-3">GitHub</span>
          </div>
          <span>↗</span>
        </a>
        <p className="flex justify-center items-center">
          <div className="flex text-center items-center justify-center bg-blue-950 rounded-[5px] w-[360px]">
            <FaEnvelope className="w-10 h-10 text-center"/>
            <span className="text-2xl text-center mr-4">Andersonwj9@gmail.com</span>
          </div>
          <span className="">↗</span>
        </p>
      </div>
      <div className="mt-4">
            <p className="text-center text-2xl">&copy;2025 Anderson De Jesus. Todos os direitos reservados.</p>
        </div>
    </div>
  );
};

export default Contato;