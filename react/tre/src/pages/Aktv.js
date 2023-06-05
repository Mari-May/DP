import "../1.js"
import { Link, useLocation } from "react-router-dom";


const Aktv = () => {
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
                        <img src="images/vinn/maxresdefault(1).jpg"/>
                        <img src="images/vinn/24aac9c2aff4c92fc23e049e79238c88eb738eea.jpeg"/>
                        <img src="images/vinn/museum.jpg"/>
            </div>      
    </div>
             
<div class="inf">
    <p>Свою роботу музей «Автомотовелофоторадіо» розпочав 2013 року в приміщенні автосалону «Володимир» в центрі міста. З тих пір його двері відкриті для поціновувачів усього унікального й цікавого. Колекцію раритетних предметів засновник закладу Олексій Стрембіцький почав збирати ще 1977 року. Починалося все з трохи більше як 10 експонатів. Поступово їх кількість збільшувалася за рахунок покупок, дарунків від друзів та знайомих. 1979 року придбано перший ретро-автомобіль ГАЗ 67. Сьогодні музей «Автомотовелофоторадіо» поповнюється і завдяки простим вінничанам, які приносять всілякі цікаві речі.</p>

        <p>«Автомотовелофоторадіо» називають музеєм, який ламає стереотипи і тим самим вабить до себе відвідувачів. Експозиція представлена раритетними автомобілями та іншою технікою з приватної колекції вінницького поціновувача Олексія Стрембіцького та налічує вже більше ста експонатів. Тут ви можете побачити унікальні марки як радянських автомобілів, так і моделі зарубіжного автопрому, випущені до 90-тих років 20 століття. Деякі з них можна й зараз зустріти на вулицях міста, а деякі вже давно стали тільки музейними експонатами.</p>

        <ul>
            <li>армійський ГАЗ-67;</li>
            <li>унікальний пожежний та санітарний автомобілі;</li>
            <li>рідкісний тривісний «Вілліс»;</li> 
            <li>ГАЗ-М-20 «Перемога»;</li>
            <li>«Москвичі» і «Волги» різних років випуску;</li>
            <li>автоколекція мініатюрних автомобілів;</li>
            <li>велосипеди, патефони, телевізори, фотоапарати, радіоприймачі;</li>
            <li>мініатюрні моделі суден та кораблів;</li>
            <li>побутові раритетні речі, які вийшли з ужитку: патефони, платівки, старі друкарські машинки, рахівниці та інше.</li></ul>
        
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.2666662428915!2d28.476899715687697!3d49.233433179326006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b6faf8380e5%3A0xde48b3c7651fa78!2sMuseum%20of%20Retro%20Technology%20Avtomotovelofototeleradio!5e0!3m2!1sen!2sua!4v1681995154373!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
  
   
    <div class="form-item__textarea">
            <grammarly-extension data-grammarly-shadow-root="true"  class="dnXmp"></grammarly-extension>
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

export default Aktv;


