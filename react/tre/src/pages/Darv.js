import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Darv = () => {
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
              <img src="images/khar/IMG_6783_.jpg"/> 
              <img src="images/khar/IMG_6795.jpg"/> 
               <img src="images/khar/IMG_6767.jpg"/>  
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Вулиця Дарвіна, до 1920-х Садово-Куликівська — одна з вулиць у центрі Харкова. Розташована в історичному Нагірному районі та адміністративному Київському, на так званій Куликовій горі. Названа у радянські часи на честь засновника еволюціонізму британця Чарльза Дарвіна. Відрізняється великою кількістю пам'яток архітектури.</p>

        <p>Вулиця Дарвіна починається від вулиці Пушкінської поруч зі станцією метро Бекетова і далі йде в бік річки Харків. Протяжність вулиці становить близько 700 метрів, вулиця є відносно короткою, і проте, жвавою. Вулиця Дарвіна закінчується поворотом на вулицю Куликівську (кол. Мельникова).</p>

        <p>На початку другої половини 18 століття вся величезна ділянка Нагірного району від нинішніх Московського проспекту до вул. Гуданова і від Журавлівського схилу річки Харків до вул. Пушкінської належала полковнику Харківського козацького полку Куликовському. За його прізвища названа була Куликова гора, де і розташувалися вулиці Куликівська та Садово-Куликівська (Дарвіна).</p>

        <p>Цікаво, що колишня мільйонерка Куликовська проживала на Садово-Куликівській на своїй колишній землі в одній з кімнат свого колишнього будинку вже в СРСР до кінця 1920-х років, а її син гвардії полковник Кірасирського полку Микола Куликовський, що став 4 листопада 1916 чоловіком сестри Імператора Миколи Другого Ольги Олександрівни, в цей момент вже був в еміграції, в Данії, на батьківщині матері своєї дружини.</p>
                          
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.732871848813!2d36.242156515715024!3d49.99761747941545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0e944d8b8bb%3A0xa2c5a065708b8c7a!2sDarvina%20St%2C%20Kharkiv%2C%20Kharkivs&#39;ka%20oblast%2C%2061000!5e0!3m2!1sen!2sua!4v1681396341253!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Darv;   