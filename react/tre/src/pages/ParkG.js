import "../1.js"
import { Link, useLocation } from "react-router-dom";

const ParkG = () => {
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
              <img src="images/khar/dsc-2393-1000x669-9eff.jpg"/> 
              <img src="images/khar/1612.jpg"/> 
              <img src="images/khar/f02e157d404b1e555949024ba829d1d7.jpg"/>  
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Центральний парк імені Максима Горького – один з найкращих парків розваг в Україні, гордість та любов харків’ян, чудове місце для сімейного відпочинку.</p>

        <p>Головний міський парк Харкова, який отримав ім’я Максима Горького вже після смерті письменника, закладено ще в 90-ті роки позаминулого століття на кошти мешканців міста та за їхньої активної участі. Тому не дивно, що парк завжди користувався особливою любов’ю харків’ян.</p>

        <p>До речі, у 2011-2012 роках тут була проведена масштабна реконструкція. Тепер у парку можна покататися на найвищому оглядовому колесі (його висота сягає 55 м), на оновленій канатній дорозі, помилуватися новими бронзовими скульптурами, яких тут близько 50-ти. На території парку є можливість узяти в аренду квадроцикли, велосипеди, скейти або роликові ковзани. Для малечі відкриті ігрові та спортивні майданчики, встановлені батути, є тут навіть мотузковий парк та будинок жахів.</p>

        <p>Для дітей у парку постійно організовують абсолютно безкоштовні заходи: квести, майстер-класи, дитяче караоке та ін. Окрім того, парк Горького – місце для проведення офіційних та неофіційних свят (від Дня міста до Екватора літа).</p>
            
        <p>Зустрічає та проводжає гостей красивий пам’ятник білочці – це символ парку. Треба сказати, що погодувати білочок з рук можна й в сусідньому лісопарку, де знаходиться Меморіал Слави. Добратися туди можна дитячою залізничною дорогою – це ще одна унікальна харківська розвага.</p> 
                          
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.7366890673325!2d36.244143876892416!3d50.016290318528654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1000e0da5b9%3A0x7bc3ddab9336dd55!2sMaxim%20Gorky%20Central%20Park%20for%20Culture%20and%20Recreation!5e0!3m2!1sen!2sua!4v1681388180871!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
  
   
    <div class="form-item__textarea">
            <grammarly-extension data-grammarly-shadow-root="true"  class="dnXmp"></grammarly-extension>
            <grammarly-extension data-grammarly-shadow-root="true" class="dnXmp"></grammarly-extension>
            <textarea id="form-content" placeholder="Kоментувати..." spellcheck="false"></textarea>
           
    </div>
             <div class="button_comm" >
              <button type="comm">Надіслати</button>
             
             </div>
    
</div>
</div>

);
};

export default ParkG;  