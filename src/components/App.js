import React, { useState } from 'react';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard({
      name: card.name,
      link: card.link,
    });
}

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}

      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        Close={closeAllPopups}
        >
        <input 
          type="text" 
          placeholder="Введите ваше имя" 
          name="name" 
          className="modal__input modal__input_type_name" 
          minLength={2} 
          maxLength={40} 
          required="" 
        />
        <span className="error input-error-name"/>
        <input 
          type="text" 
          placeholder="Введите вашу профессию" 
          name="job" 
          className="modal__input modal__input_type_job" 
          minLength={2} 
          maxLength={200} 
          required =""
        />
        <span className="error input-error-job"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name="AddFoto"
        title="Новое место"
        buttonText="Создать"
        Close={closeAllPopups}
        >
        <input 
          type="text" 
          placeholder="Название" 
          name="foto" 
          className="modal__input modal__input_type_foto" 
          minLength={2} 
          maxLength={30} 
          required=""
          />
          <span className="error input-error-foto"/>
          <input 
            type="url" 
            placeholder="Ссылка на картинку" 
            name="src" 
            className="modal__input modal__input_type_src" 
            required=""
          />
          <span className="error input-error-src"></span>
      </PopupWithForm>

      <PopupWithForm
        name="confirm-delete"
        title="Вы уверены?"
        buttonText="Да"
        Close={closeAllPopups}
      />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name="ChangeAvatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        Close={closeAllPopups}
        >
        <input 
          type="url" 
          placeholder="Ссылка на картинку" 
          name="src" 
          className="modal__input modal__input_marginBottom modal__input_type_src" 
          required=""
          />
          <span className="error input-error-src"></span>
      </PopupWithForm>

      <ImagePopup
        name="reveal-image"
        card={selectedCard}
        Close={closeAllPopups}
        isOpen={isImagePopupOpen}
      />
    </div>
  );
}

export default App;
