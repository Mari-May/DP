import "../1.js"
import { Link, useLocation } from "react-router-dom";

const TKob = () => {
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
              <img src="images/cherniv/14194038545_468322a65c_o.jpg"/> 
              <img src="images/cherniv/B0kXR.jpg"/>
              <img src="images/cherniv/l-ugu9e0l5A.jpg"/>
        </div>      
    </div>
             
<div class="inf">
                
        <a><p>    Посеред затишної площі, прикрашеної квітниками, кованими лавками та ліхтарями стоїть споруда, якою вже понад століття пишаються містяни – театр імені Ольги Кобилянської. Тут ви відпочинете від міського руху, насолодитесь архітектурою, а якщо є бажання, зануритесь у культурне життя міста.
</p>

        <p> На початку XX ст. інтелігенція Чернівців, бажаючи позбутись статусу провінції, вимагає збудувати у місті театр. Його звели у 1905 р. за проектом австрійських архітекторів Ф. Фельнера та Г. Гельмера. Для того, щоб споруда гармонійно влилась в архітектурний ансамбль міста, разом з театром зводять цілу площу на місці колишнього лісу.</p>   
            
        <p>У 1980 р. театр імені Ольги Кобилянської у Чернівцях повністю відреставрували й після цього надали йому статус пам’ятки архітектури національного значення.</p>   
            
         <p> У стінах чернівецького театру виступали:</p>   
<ol>
<li>Італійський оперний співак Е. Карузо.</li>
<li>Найвидатніша співачка свого часу, українка С. Крушельницька.</li>
<li>Радянська оперна співачка М. Бієшу.</li>
<li>Німецький актор А. Моіссі.</li>
</ol>
            
        <p>Як виглядає музично-драматичний театр у Чернівцях
    Завітавши на Театральну площу, ви побачите споруду оливкового кольору, побудовану у стилі бароко. Фасад театру прикрашають скульптури, що відтворюють сюжети грецької міфології.
    Перед будівлею встановили пам’ятник українській письменниці Ользі Кобилянській, на честь якої й назвали міський театр.
    На бокових фасадах ви знайдете бюсти відомих митців-класиків. Влаштуйте собі міні-квест і спробуйте відшукати на фасаді театру бюст:</p>
            
  <ul>
<li>Й. Ґете. </li>
<li>Ф. Шиллера. </li>
<li>Л. Бетховена. </li>
<li>Ф. Шуберта.</li>
<li>В. Моцарта.</li>
<li>Й. Гайдна. </li>
<li>Т. Шевченка. </li>
<li>О. Пушкіна.</li>
</ul>
         
        <p>Атмосфера чернівецького театру
    Зайшовши у парадний вхід, ви потрапите до овального вестибюля з білосніжними мармуровими сходами, що ведуть до глядацької зали.
    У розкішному залі складається враження, ніби ви потрапили в інший вимір. Розкішні оксамитові крісла, позолочена ліпнина, орнаментальний розпис, старовинні люстри. Усе створює святкову атмосферу і переносить у світ мистецтва. Хочеться хоч ненадовго забути про буденну рутину і зануритись у світ героїв на сцені.</p>
            
        <p>Цікавий факт:
У німецькому місті Фюрт розташований близнюк театру у Чернівцях. Річ у тому, що поки чернівецька адміністрація шукала кошти на будівництво, підприємливі проектанти продали креслення ще раз.</p>
        
       
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.5753020429092!2d25.928616476820565!3d48.29178587126104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473408993e4a6903%3A0xad14b004cbe5e31f!2sChernivtsi%20Academic%20Regional%20Ukrainian%20Music%20and%20Drama%20Theater%20named%20after%20Olga%20Kobylianska!5e0!3m2!1sen!2sua!4v1681500480355!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default TKob;  
