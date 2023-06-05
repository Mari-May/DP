import "../1.js"
import { Link, useLocation } from "react-router-dom";

const PlPot= () => {
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
                    <img src="images/fr/74_big.jpg"/>
                    <img src="images/fr/ff7_102418105_122873732773701_4500567983443881222_n.jpg"/>
                    <img src="images/fr/32_big.jpg"/>
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>З корисних копалин в околицях Лиману в основному можна знайти пісок. Але пісок відмінний - почали розробляти його в 1943 році і продовжують донині. На місці майбутніх блакитних озер пісок почали добувати в 1951 році. З видобутого тут піску на Краснолиманському заводі силікатної цегли робили силікатну цеглу.</p>

        <p>Зараз активний видобуток піску йде на озерах приблизно в 3,5 км на південний схід від Лиману біля траси Лиман-Сіверськ. На Блакитних озерах біля Щурово пісок не видобувають.</p>

        <p>Власне блакитних озер в зазначеному місці два, абсолютно неоригінально названі Першим і Другим. Ще більш неоригінально Перше з'явилося на місці старішого видобутку, Друге - молодшого. Між озерами є асфальтована дорога, тому всі блага цивілізації приліпилися до цього міжозерного простору. Там на широких зручних пляжах є і шезлонги з парасольками, і ресторан з гучною назвою "Рів'єра", і всілякі гірки-батути-банани, і ларьки з водою і морозивом - стратегічно важливі для дикого відпочинку. Жити можна також в найближчих селах - Зеленому Клині та Щурово. Там є і бази відпочинку, і приватні будинки під оренду.</p>

        <p>Зовнішня сторона обох озер - сосновий ліс, пісок, круті спуски до води і намети. У сезон люди приїжджають сюди на тижні і місяці, облаштовують цілі наметові табори з умивальниками на дереві і туалетами з клейонки. До речі дуже зручно і гігієнічно - чотири сосни в формі квадрата обмотані чорним поліетиленом і викопана яма, яку потім засипають. Багато хто їздить в одне й те ж місце роками. Зустрічаються виїзні дитячі табори, пластунівські та благодійні виїзди.</p>
    
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps?q=48.9911443, 37.7344322&z=13&t=m&output=embed" width="100%" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default PlPot;   
