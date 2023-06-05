import "../1.js"
import { Link, useLocation } from "react-router-dom";

const ElKar = () => {
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
                <img src="images/zaporo/31.png"/>
               <img src="images/zaporo/0Y7cxNWnIZ3vz3nvJc0LA.jpeg"/>
               <img src="images/zaporo/22.png"/>     
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Єлисеївський кар'єр знаходиться в селі Єлисеївка Запорізької області. Його площа становить близько 5 гектарів. Колись тут добували натуральний камінь – пегматит. Сьогодні кар'єр має статус унікального геологічного об'єкта.</p>

        <p>Єлисеївський кар'єр складається з кількох котлованів. Два з них наповнені водою і розділені між собою природним способом – скельною перемичкою. Решта котлованів сухі. В одному з них, найдальшому, є невеликий грот. Дивовижні озера з блакитною водою виникли в результаті затоплення кар'єру. </p>

        <p>Кар'єр у Єлисеївці розташований у затишному місці, захованому подалі від людського ока. Глибина озер – близько 20 метрів, а їхні береги – круті і неприступні, але разом з тим дуже красиві.</p>
            
         <p>У минулому в цьому кар'єрі видобували берил, танталіт, каситерит, лепідоліт та інші мінерали. Видобуток у кар'єрі проводився аж до 1972 року. У сухих котлованах і на узбережжі озер можна побачити таких представників місцевої флори як шавлія, волошка, чебрець.</p>
                
   </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8036.7619760925445!2d36.406228024464546!3d47.001807767543134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e7940b6225514d%3A0x308f7cd70d4f028a!2z0JXQu9C40YHQtdC10LLRgdC60LjQuSDQutCw0YDRjNC10YA!5e0!3m2!1sen!2sua!4v1680972376676!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default ElKar;   