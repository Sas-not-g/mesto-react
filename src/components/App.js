import '../index.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

  return (
    <div className="root">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-user"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <label className="popup__form-field">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className="popup__input popup__input_type_name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__form-input-error name-error"></span>
        </label>
        <label className="popup__form-field">
          <input
            type="text"
            name="about"
            placeholder="О себе"
            className="popup__input popup__input_type_job"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__form-input-error about-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="place-info"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <label className="popup__form-field">
          <input
            type="text"
            name="placeName"
            placeholder="Название"
            className="popup__input popup__input_type_place-name"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__form-input-error placeName-error"></span>
        </label>
        <label className="popup__form-field">
          <input
            type="url"
            name="placeLink"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_place-link"
            required
          />
          <span className="popup__form-input-error placeLink-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <label className="popup__form-field">
          <input
            type="url"
            name="avatarLink"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_avatar-link"
            required
          />
          <span className="popup__form-input-error avatarLink-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        name="delete-card"
        onClose={closeAllPopups}
        buttonText="Да"
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
