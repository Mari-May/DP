import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Bak = () => {
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
             <img src="images/khmel/tild3937-6130-4266-a364-383865393834__bakota_4.jpg"/>
              <img src="images/khmel/bakota__1__tmb_1200x628xfill_1300x820.jpg"/>
                 <img src="images/khmel/Bakota-panorama-03-Int.jpg"/>
              
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Бакота – свідоцтво незламності національного духу! Він відроджується після кожної спроби знищення в новому прекрасному вигляді та з новою силою. Можна виключити село з облікових даних, стерти його з лиця землі, але воно продовжить жити та давати уроки історії новим поколінням.
        Цікаво, що про Бакоту літописи згадували ще до заснування величного і древнього Львова. Уперше ми дізнаємося про це місто як про столицю Дністровського Пониззя, яку захопив князь Доброслав Суддіч. Про це згадується в Іпатіївському літописі.</p>

        <p>У 1255 році Пониззя переходить у володіння Золотої Орди. Але, що важливо, навіть у цьому випадку залишається під управлінням своїх виборних отаманів. На цьому наголошує В. Білинський в історичному дослідженні «Україна-Русь».
        У XV столітті жителі Бакоти виганяють з міста польських і литовських феодалів і проголошують незалежність.</p>

        <p>Пережила Бакота багато і в ХХ столітті. Статус прикордонного з Румунією міста, коли без дозволу прикордонників не можна було й кроку ступити. Голодомор 1947, що забрав життя третини населення.
        Але найбільша трагедія трапилася в 1981 році. Місцевих жителів змусили власноруч зруйнувати свої садиби та переїхати на нові місця. Навіть кладовища перенесли бульдозерами. Людям дали 8 років, щоб покинути рідну землю. Гектари родючої землі, лісів, виноградників, садів затопили водою.</p>
       
    
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84400.8060118605!2d26.834437997265614!3d48.61893129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4733a890cdb47d99%3A0x72eb34982fc1c005!2sBakota.%20Zona%20Vidpochynku!5e0!3m2!1sen!2sua!4v1681464759527!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Bak;   