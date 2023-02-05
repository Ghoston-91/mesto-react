import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function PopupWithAddPlace(props) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  useEffect(() => {
    setLink('');
    setTitle('')
  }, [props.isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      title, link
    })
  }

  return (
    <PopupWithForm
        name="AddFoto"
        title="Новое место"
        buttonText="Создать"
        Close={props.Close}
        isOpen={props.isOpen}
        onSubmit={handleSubmit}

        >
        <input 
          type="text" 
          placeholder="Название" 
          name="foto" 
          className="modal__input modal__input_type_foto" 
          minLength="2"
          maxLength="30" 
          required=""
          value={title}
          onChange={handleChangeTitle}
          />
          <span className="error input-error-foto"/>
          <input 
            type="url" 
            placeholder="Ссылка на картинку" 
            name="src" 
            className="modal__input modal__input_type_src" 
            required=""
            value={link}
            onChange={handleChangeLink}
          />
          <span className="error input-error-src"></span>
      </PopupWithForm>
  )
}

export default PopupWithAddPlace