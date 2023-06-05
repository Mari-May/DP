import "../1.js"
import { Link, useLocation } from "react-router-dom";

const BluV = () => {
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
                <img src="images/lug/4493553.jpg"/>
                <img src="images/lug/54919221.jpg"/> 
                <img src="images/lug/26893828.jpg"/>
            </div>      
    </div>
             
<div class="inf">
        <a><p>Є на Луганщині й одна з найкрасивіших водойм в Україні. Саме вона якнайкраще асоціюється з цією областю – бірюзова краса посеред індустріального краю. Озеро на Волнухінському кар’єрі, що у Лутугінському районі, утворилося випадково. За розповідями місцевих жителів, одного дня понад 10 років тому робітники, приїхавши на роботу, побачили затоплену виробку дикого каменю. Подейкують, що на дні так і залишилась деяка їхня техніка. А глибина озера є вельми пристойною – щонайменше 20 метрів, хоча, як дехто переконує, у деяких місцях вона становить і до 40 метрів. Зараз це місце стало улюбленим серед жителів Луганщини, особливо після початку війни, хоча дістатися туди непросто, оскільки кар’єр продовжує працювати.</p>
                    
    </a>
                                
</div>    


	 
      <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d736958.2824613681!2d38.02813082163311!3d48.20759640419879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e02ae69ec1f107%3A0x9d319ac97a7a9038!2sVolnukhyne%2C%20Luhansk%20Oblast%2C%2092031!5e0!3m2!1sen!2sua!4v1681064944049!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default BluV;   