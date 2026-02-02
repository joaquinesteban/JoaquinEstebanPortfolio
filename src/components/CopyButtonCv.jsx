const CopyButtonCv = () => {
  const handleCopy = () => {
    if (!navigator.clipboard) {
      navigator.clipboard.writeText("joaquinesteban84@gmail.com");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1 bg-white rounded-full shadow-sm transition-all duration-200 ease-out
      hover:-translate-y-0.5 hover:scale-[1.03]
      hover:shadow-lg
      active:translate-y-0 active:scale-95"
    >
      Copy
    </button>
  );
};

export default CopyButtonCv;
