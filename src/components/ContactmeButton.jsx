const ContactmeButton = ({ name = "name", className = " " }) => {
  const contactarWhatsapp = () => {
    console.log("boton clickeado");
    const message = encodeURIComponent(
      "Hola Joaquín, vi tu portfolio y me interesa tu perfil como desarrollador. ¿Coordinamos una conversación?.",
    );
    window.open(`https://wa.me/5491137550272?text=${message}`, "_blank");
  };
  return (
    <button className={className} onClick={contactarWhatsapp}>
      {name}
    </button>
  );
};

export default ContactmeButton;
