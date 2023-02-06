import React, { useContext} from "react";
import Card from "./Card";
import CurrentUserContext from '../context/CurrentUserContext.js'

function Main(props){

  const {onEditAvatar, onEditProfile, onAddPlace} = props;
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <section className="profile section">
        <div 
          onClick={onEditAvatar} 
          className="profile__avatar" 
          style={{backgroundImage: `url(${currentUser?.avatar})`}}
        />
        <div className="profile__info">
          <div className="profile__group-title">
            <h1 className="profile__name">{currentUser?.name}</h1>
            <button 
              onClick={onEditProfile} 
              aria-label="profile-edit" 
              type="button" 
              className="profile__edit"
            />
          </div>
          <p className="profile__job">{currentUser?.about}</p>
        </div>
        <button 
          onClick={onAddPlace} 
          aria-label="add-foto" 
          type="button" 
          className="add-foto" 
        />
      </section>
      
      <section className="cards section">
        <ul className="cards__list">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
export default Main;