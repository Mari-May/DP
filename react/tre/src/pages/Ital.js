import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Ital = () => {
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
            <img src="images/lviv/666044e8be5deefbd1835eb220b5eb82a5ed6dac_1672164210.jpeg"/>
            <img src="images/lviv/d64f8116ed91d012b4fbafc5541b75d9973eb3e9_1672166025.jpg"/> 
            <img src="images/lviv/italijskyj-dvoryk-4.jpg"/>
            </div>      
    </div>
             
<div class="inf">
        <a><p>Італійський дворик – це унікальний пам’ятник архітектури Відродження і одне з найромантичніших місць Львова. Знаходиться він на площі Ринок, 6. Його ще називають Венеціанським двориком, або Палацом Корнякта, адже звів цю будівлю Констянтин Корнякт – грецький купець і один з найвпливовіших львів’ян того часу.</p>

        <p>Служив Італійський дворик місцем відпочинку. Завдяки своїй особливій будові сюди не потрапляє зовнішній шум пл. Ринок та сусідніх вулиць. Тому тут завжди тихо і спокійно. У XVII ст. в Італійському дворику ставили п’єси Шекспіра. Ці традиції намагаються наслідувати і сьогодні, організовуючи різноманітні джазові та класичні концерти, а також проводячи показ фільмів.</p>
            
        <p>В теплу пору року в Італійському дворику облаштовують затишну кав’ярня, та висаджують яскраві квіти, які так гарно прикрашають архітектуру дворика. На другому поверсі часто експонують фотовиставки.</p>
            
        <p>Італійський дворик облюбували як туристи, так і закохані пари, а весільні фотосесії тут звичне явище. Має дворик і свої особливі історичні пам’ятки – це Лоренцовичівський лев, який стояв колись біля входу в ратушу, та стовп ганьби – місце покарання порушників тогочасних законів. Ресторан працює лише в теплу пору року. Решта – як кафе.</p>
                                
    </a>
                                
</div>    


	 
      <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.0075808624706!2d24.030838515709448!3d49.84231507939613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6cfe330bab%3A0x73a56de803231767!2sItalian%20Courtyard!5e0!3m2!1sen!2sua!4v1681070916528!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Ital;              