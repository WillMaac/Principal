import FotoPerfil from "../../assets/img/perfil.png";

export const Header = () => {
  return (
    <section className=" bg-[#04152C] flex   items-center justify-center xl:flex-row flex-col-reverse">

      <div className="text-center ml- px-20">
        <h1 className="text-[72px] font-extrabold text-center text-white items-center justify-center">
          Olá, Mundo, meu nome é:
        </h1>
        <h2 className="text-center text-3xl text-white mt-2 ">
          Anderson De Jesus
        </h2>
        <p className="text-white text-3xl mt-2 :text-1xl">Desenvolvedor Front-End</p>
        <button className="bg-white text-black  px-5 py-2 rounded-3xl font-bold mt-4">
          Contate-me
        </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={FotoPerfil} className="w-80 m-20 rounded-full mt-5 bg-green-400" />
        </div>
    </section>
  );
};
