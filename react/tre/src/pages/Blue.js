import "../1.js"
import { Link, useLocation } from "react-router-dom";


const Blue = () => {
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
                        
                       
                        
                        
              <img src="images/dnipro/maxresdefault-1024x576.jpg"/>
              <img src="images/dnipro/Blakytni-ozera.webp"/>
               <img src="images/dnipro/goluboe-ozero-elizavetinskij-kotlovan-v-p-elizavetovka-dnepropetrovskoj-oblasti.3_f.jpg"/>
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Блакитне озеро – краса Дніпропетровщини, яка розташована в селищі Єлизаветівка у Кам’янському. Якщо втомилися від міських буднів, завітайте до казкового озера. Тут ви зможете відкрити для себе нову Дніпропетровщину.</p>

        <p>Мальовничість блакитного озера не порівняти ні з чим. Дивовижні круті піщані схили. Величезні звивисті корені могутніх сосен, що оточили блакитне озеро. Яскраво блакитна вода. Усе це дозволяє насолодитися природою в усій її красі.</p>

        <p>Блакитне озеро, або як його офіційно називають Єлизаветівський котлован, утворилося на початку 70-х років під час будівництва житлових масивів у Кам’янському.</p>

        <p>Озеро з трьох сторін оточує прекрасний сосновий ліс, який віддзеркалюється у воді. Через це воно дістало назву блакитного.</p>

        <p>Якщо бути зовсім точним, озеро не завжди блакитне. Колір водойми обумовлений заломленням сонячних променів у глибинах. Він залежить від погоди, часу доби, сезону, особливостей зору. У палітрі озера виділяють сотні відтінків, від бірюзового до блакитнувато-палевого. Колір водойми мінливий, незмінна лише чистота водяного дзеркала.</p>

        <p>У блакитного озера є ще одна особливість: воно ніколи не замерзає, не хвилюється і приголомшує прозорістю. Видно все на сорок метрів в глибину.</p>

        <p>Існує легенда, що озеро сполучається з Чорним морем і зовсім не має дна. Науковці стверджують, що дно все ж є, однак досягнути його непідготовленій людині складно.</p>
                
       </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14288.047501516285!2d34.59391765662061!3d48.61711367530558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbd70af370a719%3A0x11d27f5fa64e5714!2sBlakytne%20Lake!5e0!3m2!1sen!2sua!4v1680718096660!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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


export default Blue;