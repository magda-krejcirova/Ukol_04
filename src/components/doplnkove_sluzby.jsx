export const Doplnkove_sluzby = ( {parkovani, snidane, wellness, wifi }) => {
    
return (
  <div className="summary__services">
    <h3>Doplňkové služby</h3>
      <div className="summary__service">Parkování: {parkovani} Kč / noc</div>
      <div className="summary__service">Snídaně: {snidane} Kč / noc</div>
      <div className="summary__service">Wellness: {wellness}</div>
      <div className="summary__service">Wifi: {wifi} </div>
  </div>   
)}