const Footer = () => {
  return (
    <div className="flex justify-between px-10 pb-8">
      <span className="font-medium p-2">©2026 all rights reserved</span>

      <button
        className="px-6 py-3 bg-neutral-900 text-white rounded-full transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:scale-[1.03]
        hover:shadow-lg
        active:translate-y-0 active:scale-95"
      >
        <img
          className="w-6 h-6 text-amber-50 rotate-180"
          src="https://res.cloudinary.com/daywjaepf/image/upload/v1768361425/flecha_ippv0s.svg"
          alt="descarga"
        />
      </button>
    </div>
  );
};

export default Footer;
