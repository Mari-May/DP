import { Link, useLocation } from "react-router-dom";
import "../1.js"


const VPlanet = () => {
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
                        
                        <img src="images/vinn/cfericheskii_zal.jpg"/>
                        <img src="images/vinn/vizmit-na-sebe-iniciativu-goroskop-na-29-bereznya-dlya-vsikh-znakiv-zodiaku.jpg"/>
                        <img src="images/vinn/23.jpeg"/>
                        <img src="images/vinn/maxresdefault.jpg"/>       
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>В Україні всього 5 стаціонарних планетаріїв, і один із них — у Вінниці!</p>

        <p>Тут зорі стають ближчими, а безмежний Всесвіт відкриває для нас свої таємниці. Тут можна милуватися зоряним небом вдень та за будь-якої погоди.</p>

        <p>Доторкнутися до зір допоможе оптико-механічний пристрій «Планетарій». Неймовірне поєднання сферичного фільму й оптичних проекційних систем створює ефект занурення в космос.
Сеанси планетарію — це комплекс науково-популярних і розважально-пізнавальних програм з астрономії та природознавства, що зацікавлять як дітей, так і дорослих. Сферичні фільми демонструються й іноземними мовами (англійською, польською тощо).</p>

        <p>До 50 захопливих шоу, повнокупольна проекція 360°, сферичний купол-екран у 100 кв. м — усе для того, щоб ви могли побачити понад 5000 зірок неозброєним оком і насолодится такими дивовижними явищами, як: «зоряний дощ», затемнення, полярне сяйво, туманності, схід Сонця, блискавка тощо.</p>

        <p>Планетарій працює без вихідних з 10:00 до 17:00.
Програма проводиться за умови присутності більш ніж 10 осіб.
У вихідні та святкові дні пропонують програми для вільних відвідувачів (наявність групи не обов’язкова) відповідно до афіші.
Приймаються попередні замовлення від організованих груп на зручний для них час.</p>

       </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.0975452916314!2d28.451008415687802!3d49.23663977932632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5c836bf3fb69%3A0xd83f4c6fbc3291a4!2sVinnytsia%20Planetarium!5e0!3m2!1sen!2sua!4v1680473684078!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default VPlanet;
