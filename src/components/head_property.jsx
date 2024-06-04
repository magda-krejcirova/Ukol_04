export const Head_property = ( {name, address, city, rating }) => {
  return (
    <div className="summary__head-property">
      <h3 className="summary__name">{name}</h3>
        <div className="summary__adress">{address}</div>
        <div className="summary__city">{city}</div>
        <div className="summary__rating">{rating}</div>
      </div>
    )
}
