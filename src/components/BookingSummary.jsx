import "./BookingSummary.css"
import { Detail_rezervace } from "./detail_rezervace";
import { Doplnkove_sluzby } from "./doplnkove_sluzby";
import { Head_property } from "./head_property";
import { Photo } from "./photo";
import { Room_definition } from "./room";
import { Storno_podminky } from "./storno_podminky";

// const response = await fetch(url)
// const data = await response.json()

// const { name, address, city, rating, room, rezervace, parkovani, snidane, wellness, wifi, storno_do14dnu, storno_nedorazi  } = data
// const { room_name, room_type, room_price } = room
// const { cislo, pobyt_do, pobyt_od, hoste_dosp, hoste_deti, typ_stravovani, cena_pobyt, check_in_day, check_in_time, check_out_day, check_out_time} = rezervace
// pak by se muselo cele telo komponenty BookingSummary prepsat na tento tvar
// name={name}, address={address}, city ...
// room_name={room_name}, room_type={room_type}
//

export const BookingSummary = () => {
    return (
      <div className="summary">
        <h2>Booking Summary</h2>
        <div className="summary__head">
        
        <Photo photo_src = "photo-1582719478250.jpg" />

        <Head_property name = "Hotel Lefsní Zátiší"
                       address = "Malohradské skály 347/21"
                       city = "Malohradská ves"
                       rating = {4.65} />

        <Room_definition room_name = "Pokoj 2"
                         room_type = "Dvoulůžkový s dětskou přistýlkou"
                         room_price = {1800} />
        </div>
       <Detail_rezervace cislo = "459787-745" 
                         pobyt_od = "13.6.2023" pobyt_do = "17.6.2023" 
                         hoste_dosp={2} hoste_deti={1} 
                         typ_stravovani="žádné" 
                         cena_pobyt={7200} 
                         check_in_day="13.6.2023" check_in_time="18:00" 
                         check_out_day="17.6.2023" check_out_time="10:00"/>

       <Doplnkove_sluzby parkovani = {200} snidane = {150} wellness = "Zdarma" wifi = "Zdarma na všech pokojích"/>

       <Storno_podminky do_14dnu = "Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám účtována žádná částka."
                        nedorazi = "Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám účtována částka za první noc pobytu." />
      </div>
    );
  }; 