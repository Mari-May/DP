import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Most = () => {
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
            <img src="images/kyiv/Mikhail-P-e1665579031486-1200x600.jpg"/>
            <img src="images/kyiv/bfJmv.jpg"/>
            <img src="images/kyiv/51f65ded88164909a465f03698f69c40_1200x794.jpeg"/>
            </div>      
        </div>
             
<div class="inf">
                
        <a><p>Цей міст через Володимирський узвіз — наймолодший київський міст 216 метрів завдовжки, що з’єднує Хрещатий парк і Володимирську гірку. Його було відкрито до Дня Києва в травні 2019 року чинним головою міста Віталієм Кличком. Тому міст часто називають «мостом Кличка». Використані під час будівництва матеріали — на 90 % вітчизняного походження. Зокрема, метал вироблений на славнозвісному маріупольському заводі «Азовсталь».</p>

        <p>На мосту облаштовані оглядові майданчики зі скляними вставками в підлозі, з яких відкривається захоплююча панорама Дніпра та Лівого берега. Він є одним із кращих місць для зустрічі світанків у столиці. 10 жовтня 2022 року міст зазнав ракетної атаки з боку російських агресорів. Кияни вважають символічним те, що київський міст, на відміну від Керченського, попри ушкодження вистояв.</p>

       
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.1195912699814!2d30.52533981744385!3d50.45527060000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfdd0b7fc9cf%3A0x8457c78d7a457c8a!2sPedestrian-cycling%20bridge!5e0!3m2!1sen!2sua!4v1681039202088!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export default Most;   