import "../1.js"
import { Link, useLocation } from "react-router-dom";

const LoveT = () => {
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
                    <img src="images/riv/shutterstock_160316708.jpg"/>   
                    <img src="images/riv/osenniy-tonnel.jpg"/>
                    <img src="images/riv/j7x2rs-f4howpjspkc6icea5i3jv7vzsrcz6h6m.jpg"/>    
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Тунель кохання – одне з найвідоміших місць України, яке вабить до себе туристів з усього світу. Складно знайти українця який не чув би про “Тунель кохання”,  або не бачив би його казкових зображень. Коли я вперше зустріла фото цього місця на тенетах інтернету, була певна що це фотошоп. “Настільки ідеальна картинка не може бути правдою” – подумала я і помилилася! Фото на заставці вже зроблене мною і я не використовувала жоден графічний редактор перш ніж виставити його тут! Тож це місце справді існує!</p>

        <p>Таємничий тунель серед лісу  набув популярності приблизно 10 років тому, після того, як випадкові туристи оприлюднили перші світлини в соціальних мережах. З того часу це місце стало одним з улюблених туристичних місць різноманітних автобусних турів Україною.</p>

        <p>То що ж це за тунель і як він утворився? Все банально просто, залізниця була побудована тут ще за часів СРСР для військових потреб й щоб приховати діяльність від допитливих очей, навколо колії щільно висадили дерева. Нині по колії ходить вантажний поїзд з деревообробного комбінату що знаходиться поблизу. Він зриває гілки та листя дерев, що ростуть довкола, таким чином утворюючи цей чарівний, казковий тунель.</p>

        <p>Український тунель “Кохання” можна побачити в рекламних роликах відомих брендів. У 2012 році японська компанія Fujifilm зняла 40-секундний ролик, герої якого раптово потрапляють в казковий тунель і швиденько зафільмовують красу що їх оточує, новенькою фірмовою камерою.</p>

        <p>Кілька років тому японський режисер Akioyshi  Imazeki, зняв в Клеванському тунелі повнометражний фільм. Місце для зйомок було знайдене випадково. У пошуках цікавого місця, помічники режисера наштовхнулись на світлини неймовірного місця. Спершу вирішили, що це фотошоп, та перевіривши інформацію було прийнято рішення знімати фільм саме тут. Головну роль в кіно, присвяченому випробуванням що постають на життєвому шляху  молодої пари, зіграла улюблениця японської публіки, 17-річна модель та актриса Miki Honoka. Прем’єра фільму відбулася у листопаді 2015 року на міжнародному кінофестивалі в Ханої. У такий спосіб, про красу української природи дізнався весь світ.</p>

        <p>Вважається, що якщо зав’язати стрічку на дереві обабіч тунелю, то зустрінеш своє кохання, або ж зміцниш те що вже маєш.</p>
                
       </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.3489739467905!2d26.041781015742238!3d50.75056257951783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f6794eb3359ad%3A0xd64867ba48ab1f13!2sTunnel%20of%20Love!5e0!3m2!1sen!2sua!4v1681304595744!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default LoveT;   