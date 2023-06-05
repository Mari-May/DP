import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Laz= () => {
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
                

               
            <img src="images/lug/photo_2021_01_11_15_42_49.jpg"/> 
              <img src="images/lug/Sever_hram.jpg"/>
            <img src="images/lug/800px-sobor_rozhdestva_hristova_severodoneck.jpg"/>
            </div>      
    </div>
             
<div class="inf">
        <a><p>Свято-Христо-Різдвяний собор в місті Сєвєродонецьк належить українській православній церкві Сєвєродонецької єпархії. Освячення місця під будівництво собору відбулося 19 червня 1994 року в день Святої Трійці. У 1996 році побудований перший корпус, відведений під господарське приміщення. У 1998 році було проведено перше богослужіння.</p>

        <p>У будівництві храму брали участь практично всі підприємства. Перші купола були встановлені 17 квітня 2000 року. На свято Пасхи в храмі пройшло богослужіння. У свято Святої Трійці собор відвідав архієпископ Луганський і Старобільський Іоаникій. 31 травня 2007 собор став кафедральним. Храм, побудований на честь Різдва Христового, нині відкритий для прихожан. Будівля храму по формі у вигляді хреста має безліч куполів. Вечірньої пори собор красиво підсвічується. Великі арочні ворота храму зустрічають відвідувачів, до головного входу ведуть сходи.</p>
          
    </a>
                                
</div>    


	 
      <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.6305815801165!2d38.5131258156773!3d48.941477679295765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412010851eb23f87%3A0x1e7e37185f7180b!2sSvyato-Khrysto-Rizdvyanyy%20Kafedral%CA%B9nyy%20Sobor%20Rptsvu!5e0!3m2!1sen!2sua!4v1682016245530!5m2!1sen!2sua" width="100%" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
  
   
    <div class="form-item__textarea">
            <grammarly-extension data-grammarly-shadow-root="true" class="dnXmp"></grammarly-extension>
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

export default Laz;   