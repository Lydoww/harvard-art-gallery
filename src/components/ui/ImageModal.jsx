import React from "react";

const ImageModal = ({ show, toggleModal, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Fond sombre semi-transparent */}
      <div className="absolute inset-0 bg-black/80" onClick={toggleModal}></div>

      {/* Contenu modal responsive */}
      <div
        className="relative z-50 bg-white rounded-lg shadow-lg max-w-full max-h-[90vh] overflow-auto p-4"
        style={{ width: "100%", maxWidth: "800px" }}
      >
        <div className="w-full h-full flex justify-center items-center">
          {React.Children.map(children, (child) => {
            // Si c’est une image, on applique des contraintes CSS spécifiques
            if (child.type === "img") {
              return React.cloneElement(child, {
                className:
                  (child.props.className || "") +
                  " max-w-full max-h-[80vh] object-contain",
              });
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
