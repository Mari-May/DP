import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Jos = () => {
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
                <img src="images/cher/JcxrY.jpg"/>
                <img src="images/cher/dsc_0031.jpg"/>
                <img src="images/cher/o_1e7pgiarrgp61eq19gq7ujlap5p.jpg"/>
              
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Василіянський монастир святого Йосафата — монастир ченців-василіян у Володимирі. Монастир отців Василіян був відомий у Володимирі ще в 1784 році після того, як було ліквідовано орден Єзуїтів. Костел і монастир, що належали отцям єзуїтам (на даний час костел і монастир належать ПЦУ) було передано отцям василіянам, які виконували душпастирську й освітню працю в місті до 1840 року. Опісля, внаслідок насильного псевдо возз'єднання Унійної Церкви з Православною (Московської юрисдикції), власність отців Василіян було передано православній конфесії.</p>

        <p>1 жовтня 1992 року Глава УГКЦ Кардинал Мирослав-Іван Любачівський дав згоду і благословення на заснування та побудову монастиря і церкви святого священномученика Йосафата на місці, де колись стояла церква св. Параскевії (в якій св. Йосафат прийняв Таїнство Хрещення). Однак на заваді реалізації цього плану стали численні політичні та бюрократичні перипетії. З подібних причин не вдалось також повернути колишній василіянський монастир побудований єзуїтами, який сьогодні належить ПЦУ. Тож за подальшим клопотанням вищих настоятелів василіянського чину і за сприяння чисельної родини Мельників, дім котрих в підпіллю служив монастирем, церквою і семінарією, вдалося отримати колишню лютеранську кірху (побудовану в кінці ХІХ ст.) та помешкання в якому проживав лютеранський пастор. Саме тому на даний час ця Кірха та дім пастора являються церквою і монастирем св. Йосафата. 23 вересня 1996 року кир Любомир Гузар дав своє благословення на існування у Володимирі монастиря Чину Св. Василія Великого.</p>       
    
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1564.2420771746215!2d30.225281114489032!3d48.74883298786844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d20da4dd77404b%3A0x22fba35311d3a6aa!2sDungeons%20Basilian%20monastery!5e0!3m2!1sen!2sua!4v1681477064447!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export default Jos;