import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Lvivar = () => {
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
            
            <img src="images/lviv/3.jpg"/>
            <img src="images/lviv/lvivarnja-19.jpg"/>
            <img src="images/lviv/2.jpg"/> 
         
            
            </div>      
    </div>
             
<div class="inf">
        <a><p>“Львіварня” – інтерактивний музей пивоваріння та сучасний арт-центр, де відбуваються виставки, концерти та різноманітні культурні події. Завдяки інтерактивним експонатам музею кожен з  відвідувачів може відчути себе справжнім пивоваром, «доторкнутися» до історії пива та «зазирнути» в процес пивоваріння. Для всіх бажаючих є чудова нагода  продегустувати  пиво.</p>

        <p>Окрім того, що “Львіварня” діє як музей пивоваріння, це  місце є  сучасним арт-центром, де відбуваються виставки мистецтва, конференції ,концерти. Це своєрідна відкрита платформа для митців, мистецтва та суспільства. “Львіварня” запрошує всіх бажаючих дізнатись більше про історію пивоваріння у Львові та відчути справжній смак легендарного пива у місті Лева.</p>
                                
    </a>
                                
</div>    


<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.7278454129787!2d24.013446451273097!3d49.84757103840022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add9fe362a8ab%3A0x234e560980b647cb!2sMuzeyno-Kul%CA%B9turnyy%20Kompleks%20Pyvnoyi%20Istoriyi%20-%20L%CA%B9vivarnya!5e0!3m2!1sen!2sua!4v1681075763561!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export default Lvivar;