import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Monast = () => {
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
                <img src="images/kiro/E1hTcSWXsAw3HqF.jpg"/>
                <img src="images/kiro/leskove19_6.jpg"/>
                <img src="images/kiro/palac-dahovskyh-serednovichnyy-zamok-u-cherkaskomu.12@2x.jpg"/>              
            </div>      
    </div>
             
<div class="inf">
        <a><p> Створений вихідцем із Польші, палац загубився у глухому селі і потихеньку руйнується. Ландшафтно-архітектурний комплекс займає досить велику площу. Цей комплекс створювали протягом сторіччя чотири покоління сімейства Даховських.</p>

        <p>На жаль, ім'я першого архітектора палацу залишається невідомим. Споруда, виконана із червоної цегли, нагадує англійський замок епохи Середньовіччя. Будівельні матеріали для палацу Даховські випускали на власному заводі. Навіть зараз подекуди трапляються цеглини із позначкою TD – Tadeus Dachowski – власник, який і спроектував замок у тому вигляді, що ми бачимо зараз.
</p>

        <p>Всередині палац вражав не менше, ніж зовні. Там було близько 20 залів для прийому гостей, балів та ігор, ванна, зимовий сад, величезні підвали, численні господарські споруди, підземні переходи і багато інших цікавинок. На території було багато конюшен, оскільки Тадеуш Даховський займався кінним спортом і дуже любив коней. Леськівських скакунів шанували в усій Російській імперії та за кордоном.
</p>
            
        <p>Споруда встояла у буремні післяреволюційні роки, селяни не дозволили зруйнувати маєток. У палаці в радянські часи працював табір для піонерів, а потім санаторій для заможних людей, лікарня для людей із розладами психіки, тубдиспансер, склад... Прохід до будівлі останніми роками здебільшого закритий. Однак людей це не зупиняє. Дехто домовляється із охороною і проходить на територію. Дехто пролазить через численні дірки в цегляному паркані.
</p>
            
       
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.8730134423804!2d29.872371015679146!3d48.99397397930097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d261531f18b1c1%3A0xab0f928e88baec17!2sSadyba%20Dakhovs%CA%B9kykh%20Xix%20St.!5e0!3m2!1sen!2sua!4v1681056011206!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Monast;   