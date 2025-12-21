import React from "react";

const Imagemodal = (selectedImage, setSelectedImage) => {
  return (
    <div className="modal" onClick={() => setSelectedImage(null)}>
      <span className="close">&times;</span>
      <img className="modal-content" src={selectedImage} alt="Expanded" />
    </div>
  );
};

export default Imagemodal;
