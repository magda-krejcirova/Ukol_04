export const Detail_rezervace = ( {cislo, pobyt_od, pobyt_do, hoste_dosp, hoste_deti, typ_stravovani, cena_pobyt, check_in_day, check_in_time, check_out_day, check_out_time }) => {
  return (
    <div className="summary__detail">
      <h3>Detail rezervace</h3>
        <div className="summary__number">Číslo: {cislo}</div>
        <div className="summary__dates">Pobyt: {pobyt_od} - {pobyt_do}</div>
        <div className="summary__guests">Hosté: {hoste_dosp} dospělí, {hoste_deti} dítě</div>
        <div className="summary__services">Stravovávní: {typ_stravovani}</div>
        <div className="summary__room-total">{cena_pobyt} Kč</div>
        <div className="summary__check-in">Check-in: {check_in_day} do {check_in_time}</div>
        <div className="summary__check-out">Check-out: {check_out_day} do {check_out_time}</div>
    </div>
  )
}