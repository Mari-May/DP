import "../1.js"
import { Link, useLocation } from "react-router-dom";

const DnSkam = () => {
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
              <img src="images/dnipro/2383.jpg"/>
              <img src="images/dnipro/YUKNd.jpg"/>
              <img src="images/dnipro/2.jpg"/>
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Скелі Орлине гніздо - пам'ятка природного походження висотою близько 30 метрів. Також є геологічною пам'яткою природи загальнодержавного значення. Площа - 62 га. Вік верхньої вікової межі порід визначено в 2050 мільйонів років.</p>

        <p>Являє собою групу скель на схилі долини річки Інгулець. До території пам'ятки відносяться природні оголення правого і лівого берегів річки разом з штучними оголеннями порід в затоплених дореволюційних залізорудних кар'єрах і в прорізі шосейної дороги, що з'єднує старий центр міста з селищем колишнього рудника імені МОДРа, являють собою унікальний геологічний розріз залізорудних порід. Найбільша - скеля Орлине Гніздо в селищі Нижня Антонівка, довжиною 25 метрів і висотою до 28 метрів. Пам'ятка складається з двох масивів: Велика Орлінка (Орлине гніздо) і Мала Орлінка. Остання особливо цікава розташованими тут печерами і гротами, в яких добували руду стародавні скіфи і слов'яни-уличі. За легендою, в XVI-XVII ст. козаки ховали тут свою скарбницю.</p>

        <p>Свою назву скелі отримали за свою вражаючу висоту, тільки орли можуть створювати гнізда на такій висоті від землі. На території Великої Орлінкі ще з початку 50-60-х років 20 століття скелі стали місцем альпінізму. У 70-х тут стали проводити повноцінні міжнародні змагання професійного рівня. Кількість виступів, їх розташування, інтервал і висота скель роблять ці місця найбільш привабливими для продуктивних тренувань.</p>

        <p>Від місцевих жителів можна почути незвичайну назву «Скелі МОДРа». МОДР - це назва селища, який розшифровується як Міжнародна Організація Допомоги борцям Революції. Селище знаходиться в декількох кілометрах від Кривого Рогу, розділений він протікає річкою Інгулець. Саме ця річка робить пейзаж Орлиного гнізда особливо чарівним. Її води протікають між високих стрімких скель, які, як стіни, створюють живий тунель.</p>

        

      </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.5343901579513!2d33.305654515640356!3d47.88734127920429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dad8ea95b94983%3A0x274a306cffa266e3!2sRock%20Eagle&#39;s%20Nest!5e0!3m2!1sen!2sua!4v1680722122401!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default DnSkam;