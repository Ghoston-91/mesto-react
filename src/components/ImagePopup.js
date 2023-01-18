import React from "react";

function ImagePopup (props) {
  const { name, isOpen, Close, card } = props;

  return (
    <div className={`modal modal_type_${name} ${isOpen ? 'modal_active' : ''}`}>
    <div className="modal__content-image modal__container">
      <button 
        aria-label="modal-close" 
        type="button" 
        className="modal__close modal__close_image"
         onClick={Close}
      />
      <img 
        src={card.link} 
        alt={card.name} 
        className="modal__image-full"
      />
      <h3 className="modal__text-full">{card.name}</h3>
    </div>
  </div>
  )
}

export default ImagePopup;