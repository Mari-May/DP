import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Mon = () => {
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
                         <img src="images/dnipro/013ost_1.jpg"/>
                        <img src="images/dnipro/33.jpg"/>
                        <img src="images/dnipro/monastirskii-ostriv3.jpg"/>
               
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Одне із загадкових місць, овіяне багатьма легендами — Монастирський острів Дніпра є візітівкою міста Дніпро, через який проходить один з найдавніших залізничних мостів України. Назва острову походить від візантійського монастиря, що нібито існував тут до ІХ століття. Проте до нині не знайдено жодних фактів, які б це підтвердили. Лише архітектор Гільом Левансер де Боплан пише у своїх нотатках про подорож Україною у 1635. В записах він згадує, що раніше тут був монастир, а нині його вже не існує.</p>

        <p>Сама назва острову змінювалась неодноразово, що пов’язано  з тим, як часто змінювались його власники. Кожен з них на честь себе перейменовував острів. Тому він в історії фігурує також під назвою Бураковьский, Богомоловський і навіть Комсомольський.</p>

        <p>На початку ХХ ст. Монастирський острів починає зазнавати змін. На його березі побудували гарний яхт-клуб, а у 1956 році установили один з найбільших пам’ятників Т. Г. Шевченку.</p>

        <p>Існує легенда, що коли на острові був монастир, то саме він став місцем захисту княгині Ольги від непогоди, що настигла її у 957 р. Саме тоді княгиня поверталась до Царгороду.</p>

        <p>Острів вважають дивним та сильним енергетичним місцем. Ніби на ньому є декілька входів у паралельні світи. Тому сюди часто приїжджають екстрасенси.</p>

        <p>На острові облаштовано парк розваг з величезним оглядовим колесом.</p>

        <p>Острів вважають улюбленим місцем закоханих.</p>
                
       </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10583.263898893474!2d35.07092889125637!3d48.46006031800588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2cca77629b7%3A0x471fcfef41a333b1!2sMonastyrs%CA%B9kyy%20Ostriv!5e0!3m2!1sen!2sua!4v1680704057170!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Mon;
