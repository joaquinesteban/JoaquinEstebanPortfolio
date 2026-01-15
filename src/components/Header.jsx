const Header = () => {
  const handleCopy = () => {
    navigator.clipboard?.writeText("joaquinesteban84@gmail.com");
  };

  return (
    <header className="px-10 pt-8">
      <nav className="flex justify-between items-center text-sm text-neutral-600">
        <div className="flex gap-3">
          <span className="font-medium p-2">joaquinandres1718@gmail.com</span>
          <button
            onClick={handleCopy}
            className="px-3 py-1 bg-white rounded-full shadow-sm transition-all duration-200 ease-out
            hover:-translate-y-0.5 hover:scale-[1.03]
            hover:shadow-lg
            active:translate-y-0 active:scale-95"
          >
            Copy
          </button>
          <button
            className="px-3 py-1 bg-white rounded-full shadow-sm transition-all duration-200 ease-out
            hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-lg active:translate-y-0 active:scale-95"
          >
            CV
          </button>
        </div>

        <div className="flex gap-4 ">
          <a href="https://www.linkedin.com/in/joaquin-esteban-23189920b/">
            LinkedIn <span>/</span>
          </a>
          <a href="https://github.com/joaquinesteban">
            GitHub <span>/</span>
          </a>
          <a href="#">Instagram</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
