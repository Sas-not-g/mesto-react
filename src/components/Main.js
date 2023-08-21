import React from 'react';
import editIcon from '../images/edit-icon.png';
import api from '../utils/Api.js';
import Card from './Card.js';

export default function Main({ onEditAvatar, onAddPlace, onEditProfile, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userProfileData, initialCards]) => {
        setUserAvatar(userProfileData.avatar);
        setUserName(userProfileData.name);
        setUserDescription(userProfileData.about);
        setCards(
          initialCards.map(card => <Card key={card._id} onCardClick={onCardClick} card={card} />)
        );
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__icon" onClick={onEditAvatar}>
          <img className="profile__icon-image" src={userAvatar} alt="аватар" />
          <div className="profile__icon-overlay">
            <img clas="profile__hover-picture" src={editIcon} alt="Смена аватара" />
          </div>
        </div>
        <div className="profile__personal-data">
          <div className="profile__name-block">
            <h1 className="profile__username">{userName}</h1>
            <button
              aria-label="Редактировать профиль"
              className="profile__button profile__button_type_edit"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          aria-label="Добавить карточку"
          className="profile__button profile__button_type_add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="posts">
        <ul className="photo-grid">{cards}</ul>
      </section>
    </main>
  );
}
