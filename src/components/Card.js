import React, { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";

function Card (props) {

  const { name, link, likes } = props;
  const currentUser = useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => 
      i._id === currentUser._id);
  
  const cardLikeActiveBtn = (
    `card__like ${isLiked && 'card__like_active'}`
  )
  
  function handleLike() {
    props.onCardLike(props.card);
  }

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleCardDelete(){
    props.onCardDelete(props.card)
  }

  return (
    <li className="card">
      {isOwn && <button 
        aria-label="card-delete" 
        type="button" 
        onClick={handleCardDelete}
        className="card__delete"/>}
      
      <img
        src={link} 
        alt={name} 
        className="card__img"
        onClick={handleClick}
      />
      <div className="card__down">
          <h2 className="card__title">{name}</h2>
          <p className="card__like-count">{likes}</p>
          <button 
            aria-label="card-like" 
            type="button" 
            className={cardLikeActiveBtn}
            onClick={handleLike}
          />
      </div>
    </li>
  )
}
export default Card;