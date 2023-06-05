import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Opi = () => {
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
            
           <img src="images/pol/Opishnya(2).jpg"/>
           <img src="images/pol/Opishne-02.jpg"/> 
           <img src="images/pol/621af29360685f88fae4c26f96ed9d8c_L.jpg"/>
            </div>      
    </div>
             
<div class="inf">
        <a><p>Національний музей українського гончарства розташований в Опішні – невеликому селищі на мальовничій Полтавщині. Він з'явився тут зовсім не випадково – Опішня здавна славилася своїми керамічними виробами. Їх виготовляють ще з епохи неоліту. Також селище вважають центром української гончарної справи. До музею-заповідника входить багато підрозділів, кожен з яких займається вивченням феномену українського гончарства. Якщо прагнете дізнатись більше про ремесло – відвідайте</p>

        <p>Опішнянський Національний музей українського гончарства почав свою історію відносно недавно – у березні 1986 року. Три роки потому на його базі почали формувати державний музей-заповідник. У ньому взялися розвивати не тільки культурний, а й науковий напрямок, досліджувати українську гончарну справу. Як результат кропіткої праці – понад 55 000 зразків глиняних виробів із усіх куточків України. 2002 року музей отримав статус національного. Заклад є майданчиком для цікавих виставок та конференцій, тут щодня вирує мистецьке та наукове життя.

</p>
            
      
          
   

    </a>
                                
</div>    


<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20532.423320489663!2d34.59370904377504!3d49.96348868230059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d7fa8cd5616247%3A0x454b5b60e55a3912!2sOpishnya%2C%20Poltava%20Oblast%2C%2038164!5e0!3m2!1sen!2sua!4v1681138180505!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
  
   
    <div class="form-item__textarea">
            <grammarly-extension data-grammarly-shadow-root="true"  class="dnXmp"></grammarly-extension>
            <grammarly-extension data-grammarly-shadow-root="true"  class="dnXmp"></grammarly-extension>
            <textarea id="form-content" placeholder="Kоментувати..." spellcheck="false"></textarea>
           
    </div>
             <div class="button_comm" >
              <button type="comm">Надіслати</button>
             
             </div>
    
</div>
</div>
);
};
export default Opi;