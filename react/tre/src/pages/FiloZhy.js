import { Link } from "react-router-dom";



const FiloZhy= () => {
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
            <img src="images/zhytom/32c5536cdcacf056.jpg"/>
            <img src="images/zhytom/2457.jpg"/> 
            <img src="images/zhytom/fil02.jpg"/>          
        </div>      
    </div>
             
<div class="inf">
                
        <a><p>Будівля філармонії зведена 1858 року і первісно була приміщенням театру та зведена за проектом відомого архітектора Івана Штромма. Стиль – необароко. За історичними джерелами, це найстаріший театр на території України. В цій будівлі виступало багато знаменитостей, величезна кількість ансамблів – це українська трупа М. Л. Кропивницького та М. П. Старицького, І. К. Карпенко-Карий, М. К. Садовський, М. К. Заньковецька, Михайло Щепкін, Айра Олдрідж, Леонід Собінов, Томмазо Сальвіні, Віра Комісаржевська, Іван Козловський, Д. Гнатюк, М. Кондратюк, О. Басистюк, П. Майборода, О. Білаш. Іван Тургенев тут слухав виступ французької співачки Поліни Віардо.</p>

        <p>Ось уже вісімдесят років зі сцени лунає найякісніша музика для найвибагливіших слухачів. Завдяки майстерності артистів Житомирська обласна філармонія ім. С. Ріхтера гідно представляє музичне мистецтво як в Україні, так і за її межами.</p>

        <p>В даний час, Житомирська обласна філармонія ім. С. Ріхтера працює у приміщенні після капітального ремонту. Має хорошу репетиційну базу, чудовий концертний зал на 420 місць, малу залу на 70 місць, потужний творчий потенціал. Колектив Житомирської філармонії спроможний організовувати концерт на будь-який смак, на найвищому рівні.</p>

        <p>При філармонії працюють Поліський академічний ансамбль пісні і танцю “Льонок” ім. Івана Сльоти, Академічна хорова капела «Орея», Вокально-інструментальний ансамбль «Древляни», Джазовий оркестр « Філ- Бенд», Тріо бандуристок «Радана», Тріо народних інструментів «Болеро», Фортепіанне тріо «Amabile».</p>

      
            
  
        </a>
                                
</div>    


	 
<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10205.03297192241!2d28.66450999638668!3d50.2497609548154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c651f5f0c3f73%3A0xf8f67dd4578d7ce6!2sFilarmoniya!5e0!3m2!1sen!2sua!4v1680797966538!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    
    export default FiloZhy;