import '../index.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  function handleEditAvatarClick() {
    toggleEditAvatarPopup(true);
  }

  function handleEditProfileClick() {
    toggleEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    toggleAddPlacePopup(true);
  }

  function handleCardImageClick(card) {
    toggleImagePopup(true);
    handleCardClick(card);
  }

  function closeAllPopups() {
    toggleAddPlacePopup(false);
    toggleEditAvatarPopup(false);
    toggleEditProfilePopup(false);
    toggleImagePopup(false);
  }

  const [isEditProfilePopupOpen, toggleEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, toggleAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, toggleEditAvatarPopup] = React.useState(false);
  const [isImagePopupOpen, toggleImagePopup] = React.useState(false);

  const [selectedCard, handleCardClick] = React.useState();

  return (
    <body className="root">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardImageClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-user"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
      <PopupWithForm title="Вы уверены?" name="delete-card" onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      <template className="cardTemplate">
        <li className="photo-grid__element">
          <button aria-label="Удалить" className="photo-grid__delete-button" type="button"></button>
          <img className="photo-grid__picture" src="%" alt="%" />
          <div className="photo-grid__description-bar">
            <h2 className="photo-grid__description"></h2>
            <div className="photo-grid__like-container">
              <button className="photo-grid__like-button" type="button"></button>
              <p className="photo-grid__like-counter">1</p>
            </div>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
