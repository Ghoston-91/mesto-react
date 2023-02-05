function ImagePopup (props) {

  return (
    <div className={`modal modal_show-image ${props.card ? 'modal_active' : ''}`}>
      <div className="modal__content-image modal__container">
        <button 
          aria-label="modal-close" 
          type="button" 
          className="modal__close modal__close_image"
          onClick={props.Close}
        />
        <img 
          src={props.card ? props.card.link : '#'} 
          alt={props.card ? props.card.name : ''} 
          className="modal__image-full"
        />
        <h3 className="modal__text-full">{props.card ? props.card.name : '' }</h3>
      </div>
    </div>
  )
}

export default ImagePopup;