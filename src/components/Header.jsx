import { useState } from "react";
import CopyButtonCv from "./CopyButtonMail";
import DownloadCvButton from "./DownloadCvButton";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header id="home" className="px-10 pt-8">
      <nav className="flex justify-between items-center text-sm text-neutral-600">
        <div className="flex gap-3">
          <span className="font-medium p-2">joaquinandres1718@gmail.com</span>
          <CopyButtonCv text={"joaquinesteban84@gmail.com"} />
          <DownloadCvButton />
        </div>

        <h1 className="md:hidden font-medium">Joaquin</h1>

        <div className="flex gap-4 ">
          <a href="https://www.linkedin.com/in/joaquin-esteban-23189920b/">
            LinkedIn <span>/</span>
          </a>
          <a href="https://github.com/joaquinesteban">
            GitHub <span>/</span>
          </a>
          <a href="#">Instagram</a>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-neutral-700 md:hidden">
          {/* EMAIL */}
          <span className="font-medium">joaquinandres1718@gmail.com</span>

          <CopyButtonCv text={"joaquinesteban84@gmail.com"} />
          <DownloadCvButton />

          {/* REDES */}
          <a
            href="https://www.linkedin.com/in/joaquin-esteban-23189920b/"
            onClick={() => setOpen(false)}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/joaquinesteban"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>

          <a href="#" onClick={() => setOpen(false)}>
            Instagram
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
