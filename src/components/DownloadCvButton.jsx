const DownloadCvButton = () => {
  return (
    <a href="/CV-joaquinEsteban-fullStack.pdf" download>
      <button
        className="px-3 py-2 bg-white rounded-full shadow-sm transition-all duration-200 ease-out
            hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-lg active:translate-y-0 active:scale-95"
      >
        CV
      </button>
    </a>
  );
};

export default DownloadCvButton;
