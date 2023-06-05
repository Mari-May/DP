import "../1.js"
import { Link, useLocation } from "react-router-dom";


const IslLov = () => {
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
                <img src="images/zhytom/rol0lmq0bso.jpg"/>
                <img src="images/zhytom/2706044_800x600_IMG_3870.jpg"/>
                <img src="images/zhytom/sx3rib5md-c.jpg"/> 
        
      
            
                      
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Цей будиночок розташований на Острові кохання, який був створений у 1970 році. Будівлю звели через 14 років після створення острова. Сам острів, а точніше його назва, вже дає зрозуміти, що відвідувач не залишиться байдужим до цієї локації. Не дарма Мисливський будиночок має досить романтичний вигляд, адже він оточений озером, а біля самої хатинки ростуть декілька струнких берез і вічнозелених ялинок.</p>

        <p>Місцеві жителі кажуть, що в цій надзвичайній будівлі живе дух риболова, який покінчив своє життя самогубством через нерозділене кохання. Також ходить легенда, що в річці, яка оточує острівець, живуть лісові мавки. Розповідають, що вони тільки те й роблять, що чекають кого б то заманити за собою на міль. Дім побудований з дерева, на якому виточені й розфарбовані візерунки. До острівця з будинку веде вузький дерев'яний міст, який, на жаль, в поганому стані. Двері будинку зачинені, тому всередину потрапити не вийде, але вигляд зовні повністю це компенсує. Раніше острівець був улюбленим місцем рибаків і мисливців. Вони залишались там для перепочинку та схову під час дощу, аж поки острівець не став туристичним місцем та не набрав популярності. Найкраща пора року для візиту - осінь, хоча там прекрасно в будь-яку пору.</p>

        <p>Якщо вам подобається малолюдність, то радимо відвідувати це місце в будні дні, коли небагато туристів. Сюди можна приїхати зі своїм наметом і заночувати під зоряним небом, прямісінько навпроти острова з будиночком. Відпочинок серед природи точно вийде вдалим! Також це, беззаперечно, хороша локація для фотосесій та сімейного відпочинку.</p> 
        </a>
                                
</div>    


	 
<div class="map">
    <iframe src="https://www.google.com/maps?q=50.0398946, 28.683672&z=13&t=m&output=embed" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default IslLov;