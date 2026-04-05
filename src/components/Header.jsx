import CopyButtonCv from "./CopyButtonMail";
import DownloadCvButton from "./DownloadCvButton";

const Header = () => {
  return (
    <header id="home" className="px-10 pt-8">
      <nav className="flex justify-between items-center text-sm text-neutral-600">
        <div className="flex gap-3">
          <span className="font-medium p-2">joaquinandres1718@gmail.com</span>
          <CopyButtonCv text={"joaquinesteban84@gmail.com"} />
          <DownloadCvButton />
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
