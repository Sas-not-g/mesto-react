export default function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <div className="popup__content">
          <button
            aria-label="Закрыть"
            className="popup__button popup__button_type_cancel"
            type="button"
            onClick={props.onClose}
          ></button>
          <h2 className={`popup__heading popup__heading_type_${props.name}`}>{props.title}</h2>
          <form className="popup__form" name={props.name} noValidate>
            {props.children}
            <button className="popup__button popup__button_type_submit" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
