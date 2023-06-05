import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Naber = () => {
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
              <img src="images/khers/f2385c3f-4807-c53b-03aa-58809fddc446_obj_img_4_c.jpg"/> 
              <img src="images/khers/Q8MBf.jpg"/> 
               <img src="images/khers/6.jpg"/>  
            </div>      
    </div>
             
<div class="inf">
                
        <a>

        <p>Вздовж усієї набережної міста Нова Каховка розкинувся чудовий рукотворний парк культури і відпочинку. Ця пам’ятка садово-паркового мистецтва, заснована відомим польсько-українським садівником Степаном Фальдзинським. Парк — улюблене місце багатьох новокаховчан та гостей міста. Він зберігає освіжаючу прохолоду тисячі джерел, які є символом та брендом міста. В Парку є декілька чудових локацій відпочинку для дітей та дорослих. Містечко атракціонів — єдина атракція з каруселями на Херсонщині, де кожна дитина отримає унікальну можливість обрати атракціон на свій самк.</p>

        <p>Поруч знаходиться красивий міні-зоопарк "Казкова діброва", в якому зосереджені екзотичні звірі та платхи, яких можна погодувати. Окрім того міні-зоопарку є 150 дерев’яних скульптур казкових героїв, вироблених засновником зоопарку. Далі взвдовж Дніпра розкинувся Літній кінотеатр — унікальна споруда нашого міста, побудований у 1953 році в псевдо старовинному стилі. Це місце проведення багатьох культурно-масових заходів в літній період. Щовечора безліч жителів Нової Каховки милуються красою місцевого фонтану та кам’яними вишиванками Григорія Довженка, що прикрашають будівлю. По довжині всього берега вас супроводжуватиме звук кришталево чистих джерел, які облаштовані в невеликі озерця та купелі. По доріжці до пристані міста Нова Каховка ви зможете доторкнутися до знаменитих вікових платанів, які як старожили нашого міста оберігають його спокій. Новокаховська пристань — романтичне місце, адже саме тут знаходиться гарна локація для весільних фотосесій. На паркані пристані молоді пари символічно замикають замок вічної любові, віддаючи ключ на вічне "зберігання" блакитним водам Дніпра</p>
                          
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21864.211449768598!2d33.33835813955077!3d46.76437546990603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c3855e8d5d145b%3A0x99d8056369be7022!2sKazkova%20Dibrova!5e0!3m2!1sen!2sua!4v1681403218406!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export default Naber;   
