import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Plug = () => {
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
            <img src="images/od/30_big.jpg"/>
            <img src="images/od/o_1e98961qnt6312ac2rlm1f1lhh1k.jpg"/> 
            <img src="images/od/3240.jpg"/>
        </div>      
    </div>
             
<div class="inf">
        <a><p>Найбільше лиманне озеро на території України знаходиться в Одеській області біля міста Болград. Воно прісне, його довжина – 39 км, ширина – до 15 км, а найбільша глибина – 5,5 м. Площа Ялпуга приблизно рівна 149 км² і воно розташоване на території трьох районів, а саме: Ізмаїльського, Болградського та Ренійського.</p>

        <p>У південній частині озера є протока, яка веде до ще одного бессарабського озера – Кугурлуй. Підземне джерело озера Ялпуг знаходиться у Молдові в однойменному селі Ялпуг. Висота над рівнем моря складає всього 2,4 м. Ця водойма є єдиним джерелом, що постачає водою місто Болград.</p>
            
        <p>Якщо говорити про флору і фауну, то тут вона досить різноманітна. В озері водиться близько 41 виду риб, є раки.</p>
            
        <p>Саме по собі озеро дуже красиве, з його берегів відкриваються неймовірні краєвиди. Тут є старовинний дуб, який місцеве населення ретельно оберігає. Кажуть, що коли Олександр Пушкін подорожував Одеською областю, озеро справило на нього незабутнє враження, і він вирішив посадити на його березі дуб в пам'ять про себе. Так це чи ні, судити складно, але жителі підтримують таку легенду, а заодно і доглядають за дубом.</p>   
          
        <p>Так як на березі озера розташовується місто Болград, то і найближчі пам'ятки також знаходяться у ньому. Серед найбільш цікавих можна відзначити великий Спасо-Преображенський собор, заснований у 1820 році. Він зведений у центрі міста і виконаний у стилі класицизму.</p>  
            
            
        <p> Також недалеко знаходиться Свято-Миколаївський храм, побудований у 1881 році. Зараз він є пам’яткою національного значення.</p>
            
            
    </a>
                                
</div>    


<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298575.72314422316!2d28.60234391117369!3d45.54885706708802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b70dc5822397f5%3A0x978b34f50c6e84ee!2sYalpuh%20Lake!5e0!3m2!1sen!2sua!4v1681125426725!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Plug;   