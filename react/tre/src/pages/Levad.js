import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Levad = () => {
    
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
                        <img src="images/crimea/6155b45d3bfc32.67966302_photo_2021-09-30_15-14-42.jpg"/>
                        <img src="images/crimea/94f4bfab7fee3d1892c4e2d090d87f73.jpg"/>
                        <img src="images/crimea/5498947.jpg"/>
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Лівадійський палац був зведенийу I половині XIX ст. Першим власником був грек Ламброс Кацоніс, який назвав садибу на згадку про своє рідне місто Лівадію. У 1860-х Лівадійський палац купила імператриця Марія Олександрівна, після перебудови він став літньою резиденцією російський імператорів.</p>

        <p>Лівадійський палацовий комплекс складається з Великого палацу (Білий палац), Світського корпусу, палацу міністра двору барона Фредерікса, палацової церкви Воздвиження Чесного Хреста та італійського дворику.</p>

        <p>Великий палац — двоповерхова будівля, головна в комплексі, побудована в стилі італійського Відродження. Білосніжні фасади прикрашені художнім різьбленням, головний вхід — мармуровою аркадою. Перед входом велика площа, на якій красується мальовничий фонтан. Із заходу площа обмежена опорними стінами, що увінчані великими теракотовими вазами з декоративними рослинами.</p>

        <p>На дверях і мармурових диванах біля входу виконані різьблення за мотивами творів Рафаеля. Підлокотники диванів виконані у вигляді грифонів. Головний вхід охороняють мармурові леви, подібні до сфінксів. До одних зі сходів, які ведуть у внутрішнє приміщення, примикає альтанка з кучерявих троянд. А поруч, над невеликим кам’яним колодязем, наганяє страху скульптура химери.</p>

        <p>Італійський дворик створено в стилі Ренесансу.
        У центрі — мармуровий фонтан, від якого променями відходять 8 доріжок. Із чотирьох сторін він оточений аркадою напівциркульних арок, що спираються з внутрішньої сторони на колони, а із зовнішньої вростають у стіни Великого Палацу. Уздовж стін розміщенні мармурові лавки з підлокітниками у формі грифонів. Вхід до Італійського дворику прикрашають ковані ажурні ворота італійських майстрів 1750 р.</p>

        <p>До Великого Палацу з південно-західної сторони примикає Церква Воздвиження Чесного Хреста. Церкву створено у візантійському стилі, взірцем послугувала Церква Святого Луки X ст. у Греції. Над церквою — невеликий купол, увінчаний хрестом. Над входом — архангел Гавриїл. Східна стіна прорізана арочними вікнами. У оформленні церкви використано орнамент у стилі Закавказзя. Напроти церкви стоїть невелика башта-дзвіниця.</p>

        <p>Лівадійський палац оточений ландшафтним парком, який засаджено миртами, кедрами, магноліями, лавром, пініями, кримськими соснами, квітами різних видів і форм, а серед цих казкових заростей — фонтани і альтанки.</p></a>
                                
</div>    


	 
<div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.3164095781626!2d34.14134431552443!3d44.467686679101675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4094c87204aefc81%3A0x8f9dc462c215962d!2sLivadia%20Palace!5e0!3m2!1sen!2sua!4v1680464238365!5m2!1sen!2sua" width="100%" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export default Levad;