import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaArrowRight } from "react-icons/fa";

 function Contatos() {
  return (
    <section className="w-full bg-[#0d1324] text-white py-12 px-4" id="contatos">
      <div className="max-w-xl mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-4">Contatos</h2>
        <h3 className="text-2xl font-bold mb-2 ">Gostou do meu trabalho?</h3>
        <p className="text-gray-300 mb-8">Entre em contato ou acompanhe as minhas redes sociais!</p>

        <div className="space-y-4">
          <ContactItem
            icon={<FaLinkedin />}
            text="Linkedin"
            link="https://www.linkedin.com/in/anderson-de-jesus-480b2a309/"
          />
          <ContactItem
            icon={<FaInstagram />}
            text="Instagram"
            link="https://www.instagram.com/seu-perfil"
          />
          <ContactItem
            icon={<FaGithub />}
            text="GitHub"
            link="https://github.com/WillMaac"
          />
          <ContactItem
            icon={<FaEnvelope />}
            text="Andersonwj9@gmail.com"
          />
        </div>

        <p className="text-sm text-white mt-10">
          ©2025 Anderson De Jesus. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}

function ContactItem({ icon, text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between bg-[#1b2235] hover:bg-[#232b42] px-6 py-3 rounded-lg transition duration-200 shadow-[5px_5px_5px_#ffffff]"
    >
      <div className="flex items-center space-x-3 text-white">
        <span className="text-xl">{icon}</span>
        <span>{text}</span>
      </div>
      <FaArrowRight className="text-white" />
    </a>
  );
}

export default Contatos;