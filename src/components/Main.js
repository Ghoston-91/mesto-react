import React, { useEffect, useState} from "react";
import apiConnect from "../utils/Api";
import Card from "./Card";

function Main(props){
  const { onEditAvatar, onEditProfile, onAddPlace } = props;
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([
        apiConnect.getUserInfo(),
        apiConnect.getCards(),
    ])
        .then(([profileInfo, cards]) => {
            setUserName(profileInfo.name);
            setUserDescription(profileInfo.about);
            setUserAvatar(profileInfo.avatar);
            setCards(cards);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);


  return (
    <>
      <section className="profile section">
        <div 
          onClick={onEditAvatar} 
          className="profile__avatar" 
          style={{backgroundImage: `url(${userAvatar})`}}
        />
        <div className="profile__info">
          <div className="profile__group-title">
            <h1 className="profile__name">{userName}</h1>
            <button 
              onClick={onEditProfile} 
              aria-label="profile-edit" 
              type="button" 
              className="profile__edit"
            />
          </div>
          <p className="profile__job">{userDescription}</p>
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
          {cards.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              card={card}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
export default Main;