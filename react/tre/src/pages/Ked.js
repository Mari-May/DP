import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Ked = () => {
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
            <img src="images/sum/full__DSC0895.jpg"/>
            <img src="images/sum/4ced842de5e6e066f97e8cf767011d90.jpg"/>
            <img src="images/sum/127fd7192931e1d04c319c6926ad33d1.jpg"/>            
        </div>      
    </div>
             
<div class="inf">
                
        <a><p>Могриця розкинулась на правому березі річки Псел. Завдяки особливому мікроклімату природа тут дивовижна: поблизу знаходиться заказник «Банний Яр» з рідкісними реліктовими рослинами, тож краєвиди влітку дійсно запаморочливі. </p>

        <p>А посеред зелених схилів мальовничої місцини розкинулись справжні «крижані» брили, щоправда, не зі снігу, а з крейди. Цей білосніжний шматочок Сумщини прекрасно видно навіть на космічних знімках. Земля крейдового періоду – так жартома називають місцеві мешканці білі скелі Могриці.  </p>

        <p>Двісті мільйонів років тому на цьому місці було море. Сьогодні туристи можуть знайти сліди цієї давньої водойми – залишки мушель та морських молюсків. Особливо багато скелетів стародавніх кальмарів-белемнітів чи як їх називають у народі «чортових пальчиків». Залишки молюсків, які повністю вимерли десятки мільйонів років тому, мають форму наконечника стріли, і їх широко застосовують у народній медицині. Перетерті у порошок белемніти додають у ванни або ж роблять теплі примочки – вони мають протизапальні та протиалергійні властивості, використовуються для укріплення кісток, лікування захворювань шкіри та нервової системи, а також у косметології. Тож для туриста це корисна знахідка.</p>

        <p>Саме із залишків дрібних частинок черепашок, морської води та водоростей і утворився крейдяний кар'єр. За радянських часів тут видобували крейду, а після розпаду СРСР кар'єр поступово занепав. Сьогодні про його першопочаткове призначення нагадують лише залишки сушильного цеху для крейди. </p>
    
         <p>Натомість з часом ця місцевість стала дуже популярною серед любителів зеленого туризму, які часто приїжджають з родинами на кілька днів: насолоджуються природою, купаються у прозорій річці та роблять неймовірні світлини на фоні крейдяних пагорбів, що нагадують засніжені гори.</p>
            
        <p>Крейдяні пагорби Могриці також дуже популярні серед митців – тут проводять етнофестивалі, фотопленери й різноманітні мистецькі проекти. Особливо популярний міжнародний ленд-арт фестиваль «Простір покордоння», куди вже 20 років поспіль з'їжджаються художники з різних куточків України та з-за кордону, аби створити унікальний арт-простір, який доповнюватиме красу крейдяних гір. За словами учасників фестивалю, ця місцевість ніби створена для творчого діалогу: містичні схили, ірреальні крейдяні кар'єри та безупинна звивиста річка.</p>

    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40144.78847005406!2d35.02155126489615!3d51.03371055974876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4128e1990fa0eba9%3A0x424892367417817!2z0JzQvtCz0YDQuNGG0Y8g0JrRgNC10LnQtNGP0L3QsCDQpdCw0YLQsA!5e0!3m2!1sen!2sua!4v1681327893208!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Ked;    