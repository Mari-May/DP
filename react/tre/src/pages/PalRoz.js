import "../1.js"
import { Link, useLocation } from "react-router-dom";

const PalRoz = () => {
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
              <img src="images/chernig/image.webp"/>
              <img src="images/chernig/image(1).webp"/> 
              <img src="images/chernig/148241_original.jpg"/>
            </div>      
    </div>
             
<div class="inf">
                
        <a><p> У 1799-1803 рр. на замовлення Кирила Розумовського за проектом шотландського архітектора Чарльза Камерона на околиці Батурина було споруджено великий палацово-парковий комплекс.</p>   
            
        <p>Однак після смерті графа будівництво припинили. Син Кирила, Андрій Розумовський проживав у Відні. Замість нього тут залишався управитель. Саме він, за однією з версій, підпалив палац, щоб приховати сліди своїх крадіжок.</p>   
            
        <p> Занепад тривав більше сторіччя. У другій половині ХХ століття було здійснено кілька спроб реставрації цього палацу, але її так і не вдалося завершити. В 2002 році Кабінетом Міністрів України була ухвалена комплексна програма відбудови пам’яток заповідника «Гетьманська столиця», яка була успішно реалізовано протягом останніх п’яти років.

У серпні 2009 року було закінчено масштабну відбудову цієї пам’ятки архітектури, зокрема, відбудовано палацовий комплекс та повністю оновлено експозиції. Під час реставрації будівлі інтер’єрну частину відтворювали за аналогами робіт Камерона в Павловську і Царському селі.</p>
                 
        <p>Наразі палац налічує 55 кімнат. Значну частину нинішньої картинної колекції Батурин отримав у подарунок від Львівської галереї. Тут постають портрети майже всіх українських гетьманів: Вишневецький, Хмельницький, Дорошенко, Конашевич-Сагайдачний, Многогрішний, Брюховецький та інші.

Кирило Розумовський мав чисельну бібліотеку, яка налічувала більше дві тисяч томів. Для її обслуговування він навіть виписав з Франції бібліотекаря-упорядника. Граф мріяв передати своє літературне надбання Руссо, та їхня зустріч так і не відбулася, і згодом бібліотека була розпорошена.</p>
            
        <p>До наших днів дійшла лише нотна збірка. А Розумовський був дійсно поціновувачем гарної музики, товаришував з Моцартом і Бетховеном. Останній присвятив графу три свої квартети.</p>   
        
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189645.80287853954!2d32.60246142035727!3d51.35237087927606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412a514fc4f07b71%3A0x15e3951a99ae5415!2sRozumovskyi%20Palace!5e0!3m2!1sen!2sua!4v1681513324331!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default PalRoz;  