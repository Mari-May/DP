import "../1.js"
import { Link, useLocation } from "react-router-dom";

const SumSh = () => {
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
                <img src="images/sum/dsc_4189.jpg"/>
                <img src="images/sum/shpilivka_5.1200x800.jpg"/>
                <img src="images/sum/shpilivka_6.1200x800.jpg"/>  
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Село Шпилівка Сумського району знаходиться за 15 кілометрів від обласного центру. Дістатися до  нього можна навіть велосипедом. Їдуть у цьому напрямку і автобуси, тож дорога не займе багато часу.</p>

        <p>Заснували цей населений пункт ще наприкінці 17 століття. Основна частина села розташована у яру за 1,5 кілометри від річки Псел. Над дорогою височіють лише нещодавно збудовані будинки. Оточене село сімома пагорбами, через них це місце у народі прозвали «сумською Швейцарією».</p>

        <p>Завдяки гарним краєвидам село не рідко стає місцем для весільних та тематичних фотосетів. Неподалік від Шпилівки археологи знайшли городище, поселення та курганний могильник сіверян 8-10 століття. За словами краєзнавців, місцеві часто викопують на своїх городах старий глиняний посуд.</p>

        <p>Гостей села зустрічає Шпилівська ікона Божої Матері. Вона зображена на табличці із назвою населеного пункту. Цей образ є списом з Кормунської ікони Божої Матері. За легендами, у 18 столітті вона була власністю родини із с. Романівка та зцелила їх сліпу від народження доньку. Саме їй уві сні явилася свята і попросила віднести образ до Шпилівського храму, де вона і зберігалася деякий час. Зараз ікона знаходиться у Спасо-Преображенському кафедральному соборі у Сумах. З 1995 року з нею влаштовують хрестні ходи.</p>
    
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20176.26780279783!2d34.67539388094104!3d50.79348818953222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4129ab9626faa33b%3A0x2fdbc8ee9dec242!2sShpylevskyy%20Kholm!5e0!3m2!1sen!2sua!4v1681309490565!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
  
   
    <div class="form-item__textarea">
            <grammarly-extension data-grammarly-shadow-root="true"  class="dnXmp"></grammarly-extension>
            <grammarly-extension data-grammarly-shadow-root="true" class="dnXmp"></grammarly-extension>
            <textarea id="form-content" placeholder="Kоментувати..." spellcheck="false" ></textarea>
           
    </div>
             <div class="button_comm" >
              <button type="comm">Надіслати</button>
             
             </div>
    
</div>
</div>
);
};
export default SumSh;