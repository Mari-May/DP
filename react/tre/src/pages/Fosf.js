import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Fosf = () => {
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
            <img src="images/riv/bili-hori-nepodalik-rivnoho-koristuyutsya-shalenoy20181107_5264.jpg"/>
            <img src="images/riv/3.jpg"/>   
            <img src="images/riv/u6b5xx-lzzkbkbqxaozjxwr7nn7iczxrcc6ouf3.jpg"/>          
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Фосфогіпсові терикони цього підприємства – за кілька кілометрів від Рубчого Рівненського району. Через популярність місцини вона навіть нанесена на Google Maps, що робить її ще більш привабливою для «масового туризму». Як зазначають у Городоцькій сільраді, на чиїй території «білі гори», ділянка для звалища фосфогіпсу — у постійному користуванні «Рівнеазоту». Територію охороняють від проїзду вантажного транспорту, а ось звичайних «туристів» не відганяють. У сільраді кажуть, що сусідство з териконами селянам не заважає.</p>

        <p>«Гори» лежать на бетонній подушці вже багато років – мабуть, ще із радянських часів. Не думаю, що вони дуже небезпечні, – зазначає заступник городоцького сільського голови Сергій Поліщук. – Із соціальних мереж бачимо, що туди все більше людей їде.</p>

        <p> Фосфогіпсові терикони є в усіх областях, де працюють азотні підприємства. Цю речовину за часів СРСР вважали малонебезпечними відходами хімічної промисловості. Виникає вона під час виробництва фосфорної кислоти, яку використовують для мінеральних добрив. Спершу відходам намагалися знайти застосування, проте складати їх «у гори» виявилося дешевше. Фосфогіпсові терикони «Рівнеазоту» на сьогодні нараховують уже понад 15 млн тонн.</p>

                
       </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.733023532263!2d26.183595015742096!3d50.743440379516855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f43ed8d72d015%3A0x9496cd6aa1eb3ba5!2sFosfohipsovi%20Terykony!5e0!3m2!1sen!2sua!4v1681307448416!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Fosf;   