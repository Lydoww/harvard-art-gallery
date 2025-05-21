import React from "react";

const ImageModal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
  {/* Fond sombre semi-transparent */}
  <div
className="absolute inset-0 bg-black/80"
    onClick={onClose}
  ></div>

  {/* Contenu modal au-dessus */}
  <div className="relative z-50 bg-white rounded-lg shadow-lg max-w-3xl w-full p-4">
    {children}
  </div>
</div>

  );
};

export default ImageModal;
