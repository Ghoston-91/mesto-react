import React from "react";

function Card (props) {
  const { name, link, likes} = props;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button 
        aria-label="card-delete" 
        type="button" 
        className="card__delete"/>
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
            className="card__like"
          />
      </div>
    </li>
  )
}
export default Card;