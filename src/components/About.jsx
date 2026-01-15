const About = () => {
  return (
    <section className="py-24 px-10 text-center">
      <div className="flex items-center justify-center">
        <img
          className="w-20 h-20 p-2"
          src="https://res.cloudinary.com/daywjaepf/image/upload/v1768360169/mensaje_fgr0wj.svg"
          alt=""
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Sobre mi</h2>
      <p className="text-neutral-600 max-w-xl mx-auto">
        Me enfoco en escribir código legible y escalable. Me gusta entender el
        problema antes de escribir una línea de código y priorizo la experiencia
        del usuario.
      </p>
    </section>
  );
};

export default About;
