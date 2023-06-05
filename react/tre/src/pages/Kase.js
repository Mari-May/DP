import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Kase = () => {
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
                        
                        <img src="images/afCarpat/1571233728.jpg"/>
                        <img src="images/afCarpat/d7714c_15543d07f1fb4d36833a4ebb76adc651_mv2.png"/>
                        <img src="images/afCarpat/4-2.jpg"/>
                   
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Перший український Музей історії та культури виноробства на Західній Україні — Музей винороба Чиза. </p>
            
            <p>Чиз – реальна історична фігура, міщанин, який жив поблизу міста Берегова (сучасне Закарпаття) у XIII столітті. У спадок отримав землі, які його батькові Чепану подарував за військові подвиги угорський король Бейло IV. Саме цей король запросив на ці землі вінцелів (виноградарів і виноробів) з Італії і Німеччини, щоби відродити справу після навали Золотої Орди.</p>

            <p> Чиз виростив виноградники і створював гарне вино, запам’ятався як добра людина і працьовитий господар. Згодом ця місцевість отримала назву від його імені – урочище Чизай, що означає «маєток Чиза».  Завітавши до музею, можна не тільки дізнатись щось нове про виноробство, алей ознайомитись з унікальною колекцією експонатів, серед яких трьохсотрічний прес для вина.</p>

        <p>Музей винороба Чизай входить до виноробного комплексу Шато Чизай, яке заснували лише в 1995 р. Та це не стало завадою для засновників відновити у своєму виробництві вин найцінніші традиції закарпатського виноробства. У створюваних винах гармонійно поєднані європейські та місцеві секрети виноробства. Тому смак місцевого вина вражає своїм насиченим та унікальним смаком. Кожен відвідувач комплексу має можливість, як ознайомитись з історією та секретами виноробства, так і покуштувати вино та придбати щось із місцевої крамниці.</p>

    </a>
                                
</div>    


	 
<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.0159170582792!2d22.638866015652045!3d48.22556807923046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47385bed6a8efe4d%3A0x66aaa4372e7a3a3!2sWinemaker%20Chiz%20Museum!5e0!3m2!1sen!2sua!4v1680810009077!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Kase;   