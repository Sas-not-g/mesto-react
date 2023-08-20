function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="photo-grid__element">
      <button aria-label="Удалить" className="photo-grid__delete-button" type="button"></button>
      <img
        className="photo-grid__picture"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="photo-grid__description-bar">
        <h2 className="photo-grid__description">{props.card.name}</h2>
        <div className="photo-grid__like-container">
          <button className="photo-grid__like-button" type="button"></button>
          <p className="photo-grid__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
