const Contact = () => {
  return (
    <section className="py-24 px-10 text-center bg-neutral-100">
      <div className="flex items-center justify-center">
        <img
          className="w-20 h-20 p-2 "
          src="https://res.cloudinary.com/daywjaepf/image/upload/v1768205856/apreton-de-manos_l2h87w.png"
          alt="saludo de manos"
        />
      </div>

      <h2 className="text-3xl font-semibold mb-6">
        Contame sobre tu próximo proyecto
      </h2>

      <div className="flex justify-center gap-4">
        <button
          className="px-6 py-3 bg-neutral-900 text-white rounded-full transition-all duration-200 ease-out
            hover:-translate-y-0.5 hover:scale-[1.03]
            hover:shadow-lg
            active:translate-y-0 active:scale-95"
        >
          Email
        </button>
        <button
          className="px-6 py-3 rounded-full border bg-white text-black transition-all duration-300 ease-out
        hover:bg-[#25D366] hover:text-white hover:border-transparent hover:scale-[1.03] hover:shadow-lg active:scale-95"
        >
          WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Contact;
