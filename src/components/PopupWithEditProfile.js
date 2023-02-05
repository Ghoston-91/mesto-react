import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../context/CurrentUserContext";

function PopupWithEditProfile(props) {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [currentUser] = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '')
  }, [currentUser, props.isOpen])

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description
    })
  }

  return (
    <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        Close={props.Close}
        isOpen={props.isOpen}
        onSubmit={handleSubmit}
        >
        <input 
          type="text" 
          placeholder="Введите ваше имя" 
          name="name"
          className="modal__input modal__input_type_name" 
          minLength={2} 
          maxLength={40}
          required="" 
          value={name}
          onChange={handleNameChange}
        />
        <span className="error input-error-name"/>
        <input 
          type="text" 
          placeholder="Введите вашу профессию" 
          name="about" 
          className="modal__input modal__input_type_job" 
          minLength={2}
          maxLength={200} 
          required =""
          value={description}
          onChange={handleDescriptionChange}
          pattern="^[a-zA-Zа-яА-я-\s]+$"
        />
        <span className="error input-error-job"></span>
      </PopupWithForm>
  )

}
export default PopupWithEditProfile