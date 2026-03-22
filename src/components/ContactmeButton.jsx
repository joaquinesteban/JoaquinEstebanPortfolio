const ContactmeButton = () => {
  console.log("boton clickeado");

  const contactarWhatsapp = () => {
    const message = encodeURIComponent(
      "Hola Joaquín, vi tu portfolio y me interesa tu perfil como desarrollador Full Stack Jr. Me gustaría coordinar una conversación.",
    );
    window.open(`https://wa.me/5491137550272?text=${message}`, "_blank");
  };
  return <button onClick={contactarWhatsapp}>Contactar</button>;
};

export default ContactmeButton;
