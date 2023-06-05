import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Damb = () => {
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
                
                <img src="images/cher/istoriya-cherkaskoi-grebli-yakoi-vy-ne-znaly.12.jpeg"/>
              <img src="images/cher/oleksandr-kostyrko.12.jpeg"/>
                <img src="images/cher/foto-vlad-zharin.12.jpeg"/>
              
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Черкаська дамба має довжину 13,5 км, щодня через неї проїздить близько 13 тисяч автомобілів. Вона загинається красивою дугою через Дніпро, рятує всі прибережні міста від весняних паводків і є оселею для єдиного у країні поселення на мосту – Панського. Колись Дніпро в районі нашого міста був таким примхливим і стихійним, що без греблі переправа через річку біля Черкас була квестом. Будівництво дамби теж обросло легендами і міфами. І недарма, адже це найдовша гребля у нашій країні.</p>

        <p>Щоб перебратися через Дніпро, сьогодні достатньо сісти в автомобіль чи автобус. А раніше, у XX столітті, треба було дочекатися порома. Берег був мулистим і заболоченим, з великою кількістю озерець і боліт. Щовесни річка розливалася й заливала усю долину, формуючи те "черкаське море", яке ми бачимо нині. А іноді вода стояла аж під дніпровськими схилами, вкривала всю територію сучасної Митниці і хлюпотіла аж під сучасним Пагорбом Слави. Другий берег закінчувався аж біля золотоніського пагорба, підвищення при в’їзді у місто.</p>   
            
        <p>Черкасці щоліта знаходили на старому місці новий маловідомий берег, із переміщеними пляжами та островами. Поромна переправа через річку була лише в районах сіл Сокирне та Змагайлівка. Останню створив настоятель Мотронинського монастиря (тоді чоловічого) Мельхіседек Значко-Яворський у XVIII столітті. Зараз це місце – район у східній частині міста. </p>   
            
        <p>Селяни переправлялися в Черкаси на ринок через річку в районах поромних переправ. Бідні жителі містечка Драбів стали жертвою історичної гри слів – вони були від переправи найдалі, тому мали першими сісти на пором, щоб устигнути дістатися дому. Всі це розуміли і навіть пропускали їх. І коли хтось намагався потрапити на переправу повз чергу, люди запитували "Ти дурний чи з Драбова?", маючи на увазі – ти просто егоїст, чи тобі справді дуже потрібно?</p>
               
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8719.878193868111!2d32.01518346301411!3d49.476283868292995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14d88b9db82c7%3A0x9a2a557b394618fd!2z0KfQtdGA0LrQsNGB0YzQutCwINC00LDQvNCx0LA!5e0!3m2!1sen!2sua!4v1681485062445!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export default Damb;