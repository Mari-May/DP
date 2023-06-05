import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Bst = () => {
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
            
               <img src="images/riv/istockphoto-1148751328-612x612.jpg"/>
            <img src="images/riv/1.jpg"/>   
            <img src="images/riv/d62471d03f99d874d69ff5c009e2e07f.jpeg"/>
           
                      
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Цією пам’яткою природа довела свою неперевершеність майстра-архітектора. Вона запропонувала нам унікальну споруду із базальтових стовпів-багатогранників, що вишикувані стрункими рядами і вражають своєю монументальністю та стрункістю геометричних фігур.</p>

        <p>А щоб глядач не втомився від одноманітності форм, йому представлена неперевершена скульптура базальтового віяла. І все це – в обрамленні філософського спокою кришталевої води. Хочете пересвідчитись, що таке є насправді і помилуватись чудом? Завітайте на Івано-Долинське родовище базальтів, що в селі Базальтове Костопільського району Рівненської області. Базальтові стовпи – різновид базальтів, що має в поперечному перерізі – форму від чотирьохгранних до семигранних. Товщина стовпів коливається в межах від 0,6 до 1,2м. Переважають із товщиною 0,8-1,0м. Висота – від 3-х до 30м. Мають властивість давати прямий рівний розкіл.</p>

        <p>Базальтові стовпи – різновид базальтів, що має в поперечному перерізі – форму від чотирьохгранних до семигранних. Товщина стовпів коливається в межах від 0,6 до 1,2м. Переважають із товщиною 0,8-1,0м. Висота – від 3-х до 30м. Мають властивість давати прямий рівний розкіл.</p>

        <p>Заказник є комплексним: стратиграфічний, петрографічний, мінералогічний, палеовулканічний, розташований на західному схилі Українського кристалічного щита. Загальна протяжність відслонень базальтів у межах заказнику 180—230м. Також на території заказнику є мінерали: адуляр, хлорит, яніт, кварц, халцедон, кальцит, барит, гематит, пірит, марказит, псиломелан, борніт, азурит, мідь самородна.</p>
            
       </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.057800130355!2d26.232137515748533!3d50.922647779543276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f5019a5e8d88b%3A0x469f947353fdf809!2sBasalt%20Columns!5e0!3m2!1sen!2sua!4v1681306317731!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Bst;   