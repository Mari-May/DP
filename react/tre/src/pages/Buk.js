import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Buk = () => {
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
                
                <img src="images/cherniv/velykyi_huk.jpg"/>
              <img src="images/cherniv/bukovynski-smugarski-vodospady.jpg"/>
              <img src="images/cherniv/vorota.jpg"/>

            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Буковинські водоспади (інша назва – Смугарські) – низка водоспадів, що розташовані в Карпатах на сході с. Розтоки Путильського району Чернівецької області. Каскад із цих близько розташованих один до одного водоспадів знаходиться в гірській долині р. Смугарів, що є правою притокою р. Черемош. Вздовж течії цієї річки каскад простирається на 2 км. Біля водоспадів є виходи великого вапняку, піщаника, сланцю.</p>

        <p>Буковинські водоспади, серед яких семеро найбільш відомих, об’єднанні в ландшафтний гідрологічний заказник місцевого значення з однойменною назвою. Сам заказник з площею в 38,5 га входить до Вижницького національного природного парку. Ці сім абсолютно різних за показниками водоспадів, що э унікальними для Карпат, мають перепад висот 3-19 метрів.</p>   
            
        <p>Перший водоспад – Ковбер (висота – 3, 5 м, більша ніж його ширина) – названий на честь заможного аристократа, що за часів Румунського королівства спорудив тут бетонну стіну для забору води для свого млина. </p>   
            
        <p>Другий – Сич (висота 10, 5) – вертикальний водоспад, знаходиться на 20 м вище від Ковбера, названий за особливе шипіння води.</p>
            
        <p>Третій – Нижній Гук(висота – 9 м) – вертикальний водоспад, дещо вище за Сича.</p>
            
        <p>Четвертий – Ворота (висота –3,5) –  на 1 км вище за Нижнього Гука.</p>
         
        <p>П’ятий – Середній Гук (висота –3, 5) – вертикальний водоспад, за 250 м від Воріт.</p>
            
        <p>Шостий – Великий Гук (висота 9 м )–  500 м від Середнього Гука, вважається найгарнішим та найвищим водоспадом.</p>
        
        <p>Сьомий – Верхній Гук (висота –5 м) – останній водоспад із низки відомих у цій місцині.</p>
        
        <p>«Буковинські водоспади» зайняли 9 місце  в конкурсі «7 чудес України», тому подивитися на це диво природи – треба вже обов’язково. Навколо цієї гідрологічної пам’ятки активно розвивається екотуризм. Вводять цікаві екскурсії та прокладено різні пішохідні маршрути. Особливо естетичне враження цей каскад справляє на весні, коли води стає більше і водоспад стрімко та бурхливо рухається вниз.</p>
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21285.45510854026!2d25.115400324921225!3d48.17421197047276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736967683086b93%3A0x639be516f10e5e83!2sBukovyns%CA%B9ki%20Vodospady!5e0!3m2!1sen!2sua!4v1681499556553!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Buk;  