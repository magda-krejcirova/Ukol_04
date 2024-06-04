export const Room_definition = ({room_name, room_type, room_price}) => {
  return (
    <div className="summary__head-room">
      <h3 className="summary__name">{room_name}</h3>
        <div className="summary__room-type">{room_type}</div>
          <div className="summary__room-price">{room_price} Kč / noc</div>
    </div>
  )
}