import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Borov= () => {
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
                <img src="images/kiro/5680.jpg"/>
                <img src="images/kiro/8827_800x600_img_2310.jpg"/> 
                <img src="images/kiro/8825_800x600_6693c031e4f064847fa85e7acd368127_600x1000.jpg"/>
  
            </div>      
    </div>
             
<div class="inf">
        <a><p>Кіровоградській області. На 109 гектарах серед степів розкинувся дендропарк «Веселі Боковеньки». Заснований він був в 1893 році любителем і знавцем паркової справи Миколою Давидовим. Дане місце прекрасно і романтично. Екскурсоводи розповідають, що на створення цього природного дива Миколи надихнуло нерозділеного почуття любові до сусідки Ганні.</p>

        <p>На території дендропарку росте 963 види чагарників і дерев. Серед цього розмаїття можна побачити цегляна, оцтове, тюльпанове, залізне дерево, кора якого тоне у воді, столітній дуб, рослини, привезені з Південної Америки, неймовірно красиву колекцію бузку та багато іншого. У парку є річка Боковеньки і три озера. Це прекрасне місце підходить для того, щоб насолодитися природою, відпочити від міської суєти, прогулятися пішки або на велосипеді, поплавати, влаштувати пікнік. У невеликих будиночках можна залишитися на ніч, в парку є спеціальні місця для розведення вогнища, зручні столики для обіду під відкритим небом.</p>

       
            
                
       
    </a>
                                
</div>    


	 
      <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10633.994490640422!2d32.8606859!3d48.2162725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40da9765ea756671%3A0xc25bbbfedbfe6f8b!2sArboretums%20Forest%20Centre%20Veseli%20Bokovenky!5e0!3m2!1sen!2sua!4v1681061189607!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Borov;   