function Cards(props) {
  return (
    <>
      <div className="card">
        <img src={props.cardsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p>{props.desc}</p>
          <a
            href={props.imggoto}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LETS GOO
          </a>
        </div>
      </div>
    </>
  );
}

export default Cards;
