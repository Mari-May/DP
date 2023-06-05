import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Shabo = () => {
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
            
            <img src="images/od/2.jpg"/>
            <img src="images/od/1798489865_1.jpg"/> 
            <img src="images/od/d7714c_5cccc09262714f5fa178fb5b8d33238b_mv2.jpg"/>
            </div>      
    </div>
             
<div class="inf">
        <a><p>Сімейна справа родини Іукурідзе –  SHABO, заснована на винних традиціях, яким понад 200 років.

1200 га виноградників і сучасний технологічний комплекс  розташовані на півдні України в селі Шабо на виноробній широті 46,6°. Саме унікальний терруар цього регіону надихнув засновників компанії SHABO на мрію – створити Великі Вина України.</p>

        <p>Регіон Шабо - один з найдавніших українських теруарів, історія якого налічує понад 2 тисячі років. Розташування між Дністровським лиманом та Чорним морем, ідеальні ґрунти та клімат - унікальність та потенціал цього регіону оцінили швейцарці ще у 1822 році. Вони заснували тут виноробне поселення та започаткували епоху виноградарства найвищого рівня, європейської культури та традицій створення якісних вин. </p>
            
        <p>Для  компанії SHABO є фундаментальним відродження та збереження традицій історичного надбання, розкриття унікальності вин цього теруару та використання найліпших світових технологій створення продуктів.</p>
            
        <p>До складу підприємства входять «Винний дім SHABO», «Дім ігристих вин SHABO», а також «Коньячний дім SHABO». Створюючи винні шедеври, компанія багато років співпрацює з відомим світовим експертом Stéphane Derenoncourt із Франції.</p>   
                  
    </a>
                                
</div>    


<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.3836256033965!2d30.37144021558035!3d46.14310652911482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7e9da40ab9153%3A0x52de63482e5a225f!2sWine%20Culture%20Center%20Shabo!5e0!3m2!1sen!2sua!4v1681127497505!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Shabo;   