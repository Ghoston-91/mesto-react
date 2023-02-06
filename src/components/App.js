import React, { useState, useEffect } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import PopupWithAddPlace from './PopupWithAddPlace'; 
import PopupWithEditAvatar from './PopupWithEditAvatar';
import PopupWithEditProfile from './PopupWithEditProfile';

import apiConnect from '../utils/Api';
import CurrentUserContext from '../context/CurrentUserContext'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = React.useState([]);

  const [currentUser, setCurrentUser] = useState({})

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
    setIsImagePopupOpen(false)
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true)
    setSelectedCard({
      name: card.name,
      link: card.link
    })
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser?._id);
    apiConnect.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    apiConnect.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter(item => item !== card))
      })
      .catch(err => console.log(err))
  }

  function handleUpdateUser(userData) {
    apiConnect.editUserInfo(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups()
      })
      .catch(err => console.log(err))
  }

  function handleUpdateAvatar({avatar}) {
    apiConnect.editAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }

  function handleAddPlaceSubmit(data) {
    apiConnect.createCard(data)
      .then((newCard) => {
        setCards([newCard,...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }

  
  useEffect(() => {
    Promise.all([
        apiConnect.getUserInfo(),
        apiConnect.getCards(),
    ])
        .then(([userData, cardData]) => {
            setCurrentUser(userData)
            setCards(cardData);
        })
        .catch((err) => {console.log(err);});
}, []);

 
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page' >
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />

        <Footer />

        <PopupWithEditAvatar
          isOpen={isEditAvatarPopupOpen}
          Close={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithEditProfile
          isOpen={isEditProfilePopupOpen}
          Close={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithAddPlace
          isOpen={isAddPlacePopupOpen}
          Close={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <ImagePopup
          card={selectedCard}
          Close={closeAllPopups}
          isOpen={isImagePopupOpen}
        />

        <PopupWithForm
          name="confirm-delete"
          title="Вы уверены?"
          buttonText="Да"
        />

        

      </div>
      </CurrentUserContext.Provider>

  );
}

export default App;