import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Ostr = () => {
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
            <img src="images/khmel/ostrozkij-zamok-3.jpg"/>
            <img src="images/khmel/DHhHgEXXsAAJDQ0.jpg"/>
            <img src="images/khmel/659082-turistam-na-zamitku-chim-tsikaviy-zamok-knyaziv-ostrozkih-u-starokostyantinovi.jpeg"/>   
        </div>      
    </div>
             
<div class="inf">
                
        <a><p>Старокостянтинівський замок – це резиденція князів Острозьких. Він збудований на місці злиття двох річок та слугує окрасою міста Старокостянтинова. Замок є унікальним, бо зводили його в один час з містом і в стислі терміни. Робили це через відсутність оборонних споруд на вказаних землях. 1561 року князь Василь Костянтин Острозький купив частину села Колищенців та збудував тут місто і замок із укріпленням. Будівельні роботи тривали у 1560–1570 роках. В історичних документах згадано, що 1591 року у цьому замку служив сотником надвірної козацької сотні Северин Наливайко.</p>

        <p>Старокостянтинівський замок збудували на берегах річок Случ та Ікопоть, які забезпечували його неприступність. Зі сторони міста він був огороджений глибоким ровом із водою, насипним валом і мурами. Сьогодні цей мур зберігся фрагментарно. Замок займає досить велику площу, але на ній ніколи не зводили інших споруд. Головні замкові будівлі – це князівський палац, храм і башта для оборони. В'їзну браму збудували для оборонних потреб. На ній був встановлений підйомний міст. Князівський палац – це двоповерхова будівля. Стіни викладені з цегли. Церква Пресвятої Трійці добре збереглася. Всередині видно розписи, виконані в давнину. Оборонна вежа – двоярусна, зі стрільницями для зброї. Сьогодні вона у поганому стані. Сам палац пристосовують для потреб музею.</p>

        <p>За всі роки існування замку його жодного разу не завоювали татари. Проте 1648 року фортецю захопили війська Богдана Хмельницького. Після штурму місто було зруйноване. В кінці 17 століття замок реконструювали. Його передавали в оренду і використовували для потреб господарства.</p>

        <p>У 19 столітті замок в Старокостянтинові пристосували під урядові установи. 1929 року на його основі створили історичний заповідник, який проіснував до 1954 року. Відтоді замок віддали під господарські структури. У 2000-них роках пройшла поетапна реставрація споруди.</p>

       
    
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.4979510029316!2d27.225127915706413!3d49.75788957938585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472de0a2ebf1cc9f%3A0x1d9fb1d4c833ce40!2sStarokostiantyniv%20Castle!5e0!3m2!1sen!2sua!4v1681464122188!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export default Ostr;