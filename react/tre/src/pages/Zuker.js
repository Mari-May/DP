import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Zuker = () => {
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
                
              <img src="images/chernig/c937f72ec70e5f8b.jpg"/>
              <img src="images/chernig/12393_800x600_Saharnyizavod,Parafievka2.jpeg"/>
              <img src="images/chernig/cykrovuu_zavod-2.jpg"/>
              
                
              
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Парафіївський цукровий завод – не функціонуючий і з 2020 р. вже, на жаль, неіснуючий промисловий об’єкт. Знаходиться у приватній власності. На заводі більше 150 років виготовляли цукор. Оглянути споруду можна ззовні – на територію і в середину вхід заборонено.</p>

        <p> Парафіївський цукровий завод на Чернігівщині зведений у 1846 році на гроші поміщика Тарновського – власника відомого Качанівського палацу. З 1852 року на заводі почали виробляти цукор. Особливістю підприємства стало використання інноваційних технологій та ультрасучасного обладнання. Завдяки введенню в експлуатацію парових машин Парафіївський цукровий завод впевнено тримав лідерство у свій галузі і вважався найбільш потужним виробництвом у Чернігівський губернії. Дивиною тоді було і те, що для роботи використовували не кріпаків, а вільних людей з великим бажанням працювати. Можливо, це було одним із ключових факторів успіху виробництва.</p>   
            
        <p> Наприкінці XIX ст. відбулася зміна власника – підприємство перейшло в руки до цукрового магната П. Харитоненка. Він перейменував завод на Оленівський – в честь улюбленої доньки Олени, а вже через рік після придбання організував масштабну реконструкцію споруди. На території збудували цегельний завод, а через декілька років оновлене та модернізоване підприємство було не впізнати. Будинок для персоналу, нові робочі цехи та введення в роботу електричних двигунів – таких масштабів розбудови тут не бачили більше ніколи.</p>   
            
        <p> Після революції 1918 р. завод був націоналізований і після того жодного разу не оновлювався. З 2011 р. підприємство припинило діяльність.
    </p>
                 
        <p>Цікаві факти:</p>
            
        <p>Парафіївський завод – автентичний, не змінений з панських часів, індустріальний комплекс, площа якого займає декілька десятків га. Варто побачити раритетні будівлі підприємства та величезну димову трубу. В приміщенні досі стоїть обладнання, яким користувались понад 100 років тому. Сьогодні завод варто розглядати як достойний приклад розвитку індустрії позаминулого століття на території України.</p>
        
       <p>Від мешканців Парафіївки можна дізнатись цікаві історії та факти про Парафіївський цукровий завод, адже більшість тамтешніх селян пропрацювали на ньому все життя.</p>
        
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95838.14964899735!2d32.45915015480894!3d50.86012500167605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412a73ea356d4e73%3A0x651c79796c4f5e04!2sKompleks%20Istorychnykh%20Vyrobnychykh%20Budivel%CA%B9%20Parafiyivs%CA%B9koho%20Tsukrovoho%20Zavodu!5e0!3m2!1sen!2sua!4v1681505901042!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Zuker;  
