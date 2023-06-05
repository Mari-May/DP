import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Pech = () => {
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
            <img src="images/chernig/6f0f6ee342efde4d.jpg"/>  
            <img src="images/chernig/antonievi3.jpg"/>
            <img src="images/chernig/antoniyevi-pecheri-infomiks3.jpg"/>
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>  Антонієві печери – підземний печерний комплекс на Болдиних горах у Чернігові. Пам’ятка історико-архітектурного заповідника «Чернігів стародавній». 1069 р. їх заснували відомий церковний діяч, «батько руського чернецтва» Антоній Печерський і чернігівський князь Святослав Ярославович.
    Створення печер дало початок існуванню Троїцького-Іллінського монастиря. Він розвивався до нападу монголо-татар на Чернігів 1239 р. Після цього перебував у занепаді до ХVІІ ст. 1649 р. чернігівський старший сотник Степан Подобайло та ієромонах Зосим Тишевич почали реконструкцію монастиря і печер. З перервами вона тривала до ХІХ ст.
    Довжина печер – 350 м, глибина – 12 м. Вони мають 4 поверхи під землею, але поки що досліджено і відкрито для відвідання тільки 2. У печерах є 3 підземні церкви.</p>

        <p>  Найцікавіша з підземних церков – церква Феодосія Тотемського висотою більше 8 м. Її вважають найвищим підземним храмом на українському Лівобережжі. У печерах збереглася давньоруська кістниця – єдине в Україні підземне поховання домонгольського періоду.</p>   
            
        <p> Будівництво апартаментів фельдмаршала почалося в 1872 році і тривало до 1878 року під керівництвом інженера-проектувальника Максима Мосціпанова. Однак ім'я автора проекту залишається невідомим. Існують кілька версій, за однією з яких архітектором будівлі був російський зодчий Василь Бажанов, за іншою - відомий російський архітектор Джакомо Кваренгі.</p>   
            
        <p> Заснування Антонієвих печер у Чернігові історики пов’язують із суперництвом двох братів – чернігівського князя Святослава Ярославовича і київського князя Ізяслава Ярославовича. Антоній Печерський, обурений несправедливим правління князя Ізяслава Ярославовича в Києві, вирушив до Чернігова та допоміг Святославу Ярославовичу створити печерний монастир у Чернігові.</p>
                 
        <p>Дослідники і туристи часто зустрічають в Антонієвих печерах привиди ченців. Їхня поява супроводжується запахом ладану та аміаку, звуками незрозумілого походження.</p>    
        
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19879.180725174927!2d31.28629711413178!3d51.47839405479738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d548c42a9cf4e3%3A0xc3822ca305d9a913!2sAntoniyevi%20Pechery!5e0!3m2!1sen!2sua!4v1681510990242!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Pech;  

