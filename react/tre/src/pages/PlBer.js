import { Link } from "react-router-dom";



const PlBer= () => {
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
            <img src="images/zhytom/tild3164-3066-4136-a666-656130366465__berdichev-2835.jpg"/>
            <img src="images/zhytom/D_04.jpg"/>         
            <img src="images/zhytom/tild6661-3064-4231-b134-333535333864__berdichev-2844.jpg"/>       
        </div>      
    </div>
             
<div class="inf">
                
        <a><p>В історичних джерелах Андрушівка згадується лише в 1683р., як село, що приписане до Старої Котельні (там зберігся старий костел!). В сучасному прапорі та гербі використовується андріївський хрест.</p>

        <p>У XVII столітті власниками Андрушівки стають польські магнати Бержинські. Для них будується палац, розбивається великий гарний парк. Родина Бержинських будує тут у 1848р. цукровий завод, до речі, один з перших на Житомирщині. Саме завдяки розвитку цукрової промисловості через одинадцять років Андрушівці надають статус містечка. 1861 року село перекуповує цукровий "король" Артем Терещенко. Він декілька років поспіль скуповує або бере в оренду різні підприємства, модернізує їх, і якісно з новими технологіями налагоджує виробництво цукру з буряка. В Андрушівці його увагу привертає і сам маєток. Нащадкам Станіслава Бержинського він був фінансовим тягарем.</p>

        <p>1871 р. за кошти Терещенка засноване однокласне училище, в якому працював один вчитель, законовчитель та прибиральниця. Цікавим є той факт, що на цукровому заводі працював на той час студентом-практикантом майбутній вчений Іван Фещенко-Чопівський - відомий металург, професор металургії та металографії краківської гірничо-гутничої академії. Вартує додати, що Андрушівка має й цікаві пам'ятки археології. Так, неподалік від міста, виявлено залишки поселень черняхівської культури.</p>

        <p>В часи Миколи Терещенка, старшого сина Артема Терещенка, який повністю пішов по батьківському шляху та удосконалював його, палац набуває рис французького неоренесансу. Родина й не жила постійно в палаці, а перебування було досить коротким.</p>

        <p>Двоповерховий палац розташований посеред старого парку, де ще збереглися завезені Терещенком коркові та кедрові дерева. В парку викопані були ставки, на них щороку й сьогодні повертаються лебеді.</p>
    
        
            
  
        </a>
                                
</div>    


	 
<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.7367925316657!2d29.02116361571577!3d50.016288379417816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c93577906569b%3A0xa9d918680bb39b4d!2sPalats%20Berzhyns%CA%B9kykh-Tereshchenkiv%2C%20Vulytsya%20Lenina%2C%20Andrushivka%2C%20Zhytomyrs&#39;ka%20oblast%2C%2013401!5e0!3m2!1sen!2sua!4v1680789572013!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
  
   
    <div class="form-item__textarea">
            <grammarly-extension data-grammarly-shadow-root="true" class="dnXmp"></grammarly-extension>
            <grammarly-extension data-grammarly-shadow-root="true" class="dnXmp"></grammarly-extension>
            <textarea id="form-content" placeholder="Kоментувати..." spellcheck="false" ></textarea>
           
    </div>
             <div class="button_comm" >
              <button type="comm">Надіслати</button>
             
             </div>
    
</div>
</div>
    );
};

export default PlBer;