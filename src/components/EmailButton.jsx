const EmailButton = () => {
  const email = "joaquinandres1718@gmail.com";
  const subject = "Contacto desde tu Portfolio";
  const body = "Hola Joaquin, vi tu portfolio y quiero contactarte";

  return (
    <a
      href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
    >
      <button
        className="px-6 py-3 bg-neutral-900 text-white rounded-full transition-all duration-200 ease-out
            hover:-translate-y-0.5 hover:scale-[1.03]
            hover:shadow-lg
            active:translate-y-0 active:scale-95"
      >
        Email
      </button>
    </a>
  );
};

export default EmailButton;
