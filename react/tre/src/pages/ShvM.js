import "../1.js"
import { Link, useLocation } from "react-router-dom";

const ShvM = () => {
    return(
            <div class="header3">
            <div class="slide-first"></div>
            <div class="slide-second"></div>
            <div className="container">
            <div className="header-line">
              <div className="header-logo">
                <Link to="/"> <img src="images/logo-50.png"/></Link>
              </div>
              <div className="nav">
                <div>
                <Link to="/" className='nav-item'>ГОЛОВНА</Link>
                <Link to="/City"className="nav-item" >
                  МІСТА
                </Link>
                </div>
              </div>
            </div>

            <div id ="slider">
          <div id = "polosa">
            <img src="images/mik/migiya9.jpg"/> 
            <img src="images/mik/migia.jpg"/>
            <img src="images/mik/dsc_4189.jpg"/>
        </div>      
    </div>
             
<div class="inf">
        <a><p>Унікальний куточок дикої природи з екзотичною назвою Мигія розташувався на березі Південного Бугу неподалік Первомайська, у Миколаївській області. Мигію часто називають маленькою Швейцарією, її історія сягає в глибину століть, а становлення – на славну козацьку епоху.</p>

        <p>Це – дивовижне місце для туризму, прекрасна можливість оточити себе красою швейцарських гір на український манер, у степовій частині нашої країни, що само по собі – унікальне природне явище.
Мигія - «маленька Швейцарія» і козацька паланка у серці України</p>
            
           <p>Мигія – це невелике селище поблизу Первомайська. Асоціації зі Швейцарією місцевість заслужила завдяки клімату і рельєфам – серед безкраїх степів це справжній гірничо-скелястий острів.</p>
            
            <p>Територія була заселена ще у VI тисячолітті до нашої ери, пережила скіфський період і черняхівську культуру. Всі ці епохи наклали свій історичний і культурний відбиток на Мигію. Вважається, що про селище писав Геродот, а греки називали місцевість емігією, що у перекладі означало «моя земля». Назва селища оповита таємничістю.</p>
            
            <p>За однією із версій ім'я відносно молоде, має молдавське походження, його пов'язують з річкою – Південний Буг. Мигією називалась порожиста ділянка Бугу, ця назва закріпилася за селищем на початку ХVIII століття. Козаки заснували тут зимівники та назвали Мигією найближчі десять островів-порогів.</p>
            
            <p>Назву також пов'язують з красивою легендою і поселенням козаків – бугогардівською паланкою. На протилежній стороні Бугу стояли турки. Вночі козаки палили вогнища і з боку турків було видно миготіння вогнів – звідси і пішла назва селища.Легендарну особистість козака Мамая пов'язують з цією землею – в його честь названий один з островів місцевості.</p>
                                
    </a>
                                
</div>    


<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21341.203784175956!2d30.91084271780079!3d48.039777122850985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ce4a04d5b0e609%3A0x373ac691846a46f5!2sMyhiya%2C%20Mykolaiv%20Oblast%2C%2055223!5e0!3m2!1sen!2sua!4v1681078052725!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
  
   
    <div class="form-item__textarea">
            <grammarly-extension data-grammarly-shadow-root="true"  class="dnXmp"></grammarly-extension>
            <grammarly-extension data-grammarly-shadow-root="true"  class="dnXmp"></grammarly-extension>
            <textarea id="form-content" placeholder="Kоментувати..." spellcheck="false" ></textarea>
           
    </div>
             <div class="button_comm" >
              <button type="comm">Надіслати</button>
             
             </div>
    
</div>
</div>

);
};

export default ShvM;   
