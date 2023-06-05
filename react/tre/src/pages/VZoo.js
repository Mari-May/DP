import "../1.js"
import { Link, useLocation } from "react-router-dom";

const VZoo = () => {
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
                       <img src="images/vinn/rivnenskiy-zoopark-pratsyue-v-rezhimi-poperednoho-20220412_8871.jpg"/>
                       <img src="images/vinn/64.jpg"/>
                       <img src="images/vinn/64522802.jpg"/>
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Подільський зоопарк у Вінниці - це не просто місце, де можна подивитись на тварин та птахів різних видів, а й приємно провести час, адже тут на території є й дитячі ігрові майданчики, зелені куточки, тут сучасна та інфраструктура, з відтворенням фрагментів природного середовища, у якому мешкають звірі та птахи. А також всю територію прикрашають скульптурні зображення, які чудово вписуються у світлини відвідувачів. Зоопарк у Вінниці постійно поповнюється новими тваринами і птахами. Одних купують, інших вимінюють на приплід. Деяких диких тварин і птахів, які потрапили у біду, доставляють сюди небайдужі мешканці області. Отож, дивитись є на що! </p>
            
            <p>У Подільському зоопарку мешкає понад 220 тварин, всіх не перелічити.

        Ягуар Джекі і тигриця Ліза, ведмеді бурі та гімалайські, мавпи, дикобрази, вовки і лисиці, зубри, верблюди, зебра, антилопи, олені благородні і плямисті, угорська сіра корова, коні, косулі, поні, лами, муфлони, альпаки, камерунські кози, вівці, гривисті барани, кулани, борсуки, носухи, лемури, вепри, єноти, сурикати, мавпи мармазетки, а ще різновиди птахів: пелікани, орли, беркути, білоголові сипи, фазани, страуси, павичі, цесарки, рідкісні породи голубів, качки мандаринки, лебеді білі та чорні.</p>

        <p>Незабутню атмосферу після відвідин вінницького зоопарку створюють скульптури тварин, які розташовані по всій його території.</p>

        <p>«Подільський зоопарк» – це ідеальне місце для сімейного відпочинку, де гуляєш весь день…і хочеться ЩЕ!.</p>

       </a>
                                
</div>    


	 
<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.261198903109!2d28.473510715688988!3d49.27144767933014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d434e87ef3b6d%3A0xa28784fef825df2!2zUG9kaWzKuXPKuWt5eSBab29wYXJr!5e0!3m2!1sen!2sua!4v1680529455084!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default VZoo;