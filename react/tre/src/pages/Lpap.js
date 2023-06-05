import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Lpap = () => {
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
                        
                        <img src="images/zaporo/panskoe-ozero-2-5ed9664534a76.jpg"/>
                        <img src="images/zaporo/83640045.jpg"/>
                        <img src="images/zaporo/27228_800x600_1.jpg"/>
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Чимало є на Україні місць, оповитих таємницями і легендами. Одне з таких місць - Панське озеро. Воно привертає щорічно тисячі туристів з усього світу.</p>

        <p>Ніхто точно не знає, коли з`явилося це озеро. Але в усі часи йому приписували лікувальні властивості. Деякі історики стверджують, що в 19 столітті це була купальня німецького графа. Секрет озера в тому, що його живлять 25 підземних джерел. Температура води цілий рік залишається незмінною - 13 градусів. Місцеві жителі стверджують, що вода володіє силою виліковувати будь-яку хворобу. А козака вірили, що вода в озері здатна зміцнити і дух людини. Багато хто їде сюди, щоб на собі випробувати чудодійність Панського озера. Особливо приємно це робити в спекотний літній день.</p>

        <p>Ще Панське озеро приваблює любителів містичних загадок. Колись в озері втопилася селянська дівчина, що не переживши нерозділеного кохання. І тепер, як стверджують місцеві жителі, її привид можна побачити на берегах озера. </p>   
            
        <p>У 2002 році озеро було освячено, так його вода стала святою і тому цілющою. У зв'язку з цим, багато людей приїжджає, щоб зануритися тут на Водохреща. Доброю прикметою вважається переплисти озеро і доторкнутися до ікон Христа або Богородиці, які розташовані на протилежному березі. Так що вам варто побачити це озеро на власні очі.</p>            
   </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343780.4189796168!2d34.762442265624976!3d47.688604500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc57e705102b53%3A0x2c80ee9201bdf0fd!2sPans%CA%B9ke%20Lake!5e0!3m2!1sen!2sua!4v1680970386232!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Lpap;
