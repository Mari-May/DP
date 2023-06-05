import "../1.js"
import { Link, useLocation } from "react-router-dom";

const PodV = () => {
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
            
           <img src="images/pol/702_1_2.jpg"/>
            <img src="images/pol/3684.jpg"/> 
            <img src="images/pol/thzvxaofljznkbyr-scaled.jpg"/>
            </div>      
    </div>
             
<div class="inf">
        <a><p>Полтавську фортецю, яка відіграла значну роль у Північній війні 1700-1721 років, було споруджено у 1608 році козаками Миргородського полку під керівництвом польського гетьмана Станіслава Жолкевського на тому місці, де стояла давньоруська Лтава.</p>

        <p>Пізніше, після укладення Переяславської угоди, у 1656 році фортецю ремонтували під керівництвом полтавського полковника Мартина Пушкаря. Але влітку того ж року Полтава була зруйнована військами повсталого гетьмана Івана Виговського. Стратегічне розташування Полтави зумовлювало необхідність її термінового відновлення. Тому фортецю було оперативно відбудовано.</p>
            
        <p>У 2009 році за участю архітектора К. Трегубова на історичному місці здійснено натурну реконструкцію фрагменту Полтавської фортеці XVIII сторіччя – дерев’яної Подільської вежі.</p>   
          
   

    </a>
                                
</div>    


<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.834195100476!2d34.566782215932804!3d49.58201647936503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f62608aee95%3A0x9e473e7680bf85ce!2sPodil%20Watchtower!5e0!3m2!1sen!2sua!4v1681137506315!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default PodV;  