import { useState } from "react";

const CopyButtonCv = () => {
  const [copy, setCopy] = useState(false);

  const text = "joaquinesteban84@gmail.com";

  const handleCopy = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopy(true);
    setTimeout(() => setCopy(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1 bg-white rounded-full shadow-sm transition-all duration-200 ease-out
      hover:-translate-y-0.5 hover:scale-[1.03]
      hover:shadow-lg
      active:translate-y-0 active:scale-95"
    >
      {copy ? "Copied ✓" : "Copy"}
    </button>
    //mejorar el check de confirmacion de copiado
  );
};

export default CopyButtonCv;
