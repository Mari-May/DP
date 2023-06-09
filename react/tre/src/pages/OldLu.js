import { Link, useLocation } from "react-router-dom";
import "../1.js"

const OldLu = () => {
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
                        
                        <img src="images/volyn/zamok-lyubarta-1-min.jpg"/>
                        <img src="images/volyn/rss-photo.jpg"/>
                        <img src="images/volyn/post-1-0-00206700-1404653817.jpg"/>
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>У зв'язку з відзначенням 900-ліття першої згадки про Луцьк в Іпатіївському літопису у 1985 р. Рада Міністрів УРСР прийняла постанову «Про оголошення комплексу архітектурних пам’яток у місті Луцьку історико-культурним заповідником». Перший директор Заповідника архітектор Віктор Іржицький зумів сформувати вмотивований колектив, який заклав підвалини подальшого розвитку установи. У 1989-2012 рр. Заповідником керував архітектор Тарас Рабан (1958-2021), за якого було створено низку постійних експозицій. З моменту створення і до 1997 р. Заповідник проводив значну науково-дослідну діяльність, наслідком якої було створення значної фондової колекції археологічних пам'яток, стародруків тощо.</p>

        <p>З моменту створення в 1985 р. Заповідник активно підтримував проведення археологічних досліджень на території Старого міста та в його охоронній зоні. В 1988 р. Заповідник підписав договір з Львівським історичним музеєм про спільне дослідження археології Луцька. У зв'язку з цим на території Заповідника протягом десяти років працювала спільна археологічна експедиція, яка в 1996-1998 рр. отримувала також фінансову підтримку з боку Державного фонду фундаментальних досліджень України. Результатом роботи експедиції було укладання детальної археологічної карти міста, відкрито рештки дерев'яної забудови XIV-XVII ст., в т.ч. єдиний в Україні, фізично збережений об’єкт дерев’яного храмового будівництва кінця XIV ст. - храм Св. І.Хрестителя, що стояв на луцькому Ринку.Серед багаторічних наукових працівників Заповідника, які заклали основи луцькознавства — Борис Сайчук, Петро Троневич, Ростислав Метельницький, Микола ХІлько та інші.</p>

        <p>Площа заповідника є відносно невеликою — близько 41 га. Але на цьому просторі можна побачити і оцінити багато стародавніх пам'яток матеріальної культури. І перш за все, це Верхній замок — велична фортеця часів середньовіччя. Замок зараз — не лише музеї, виставки, діючі моделі старовинної зброї і устаткування. Він також є своєрідною культурною сценою Луцька, де проходять різноманітні фестивалі, шоу, зокрема і лицарські турніри, конкурси, концерти, інші культурні події.</p>

        <p>На території заповідника знаходиться 52 пам'ятки під охороною держави, з них 39 — національного значення. кафедральний костьол XVII ст., оборонна синагога XVII ст., найстаріші православні церкви міста, стіни яких пам'ятають визначних діячів України: Івана Виговського, Данила Братковського, Петра Могилу, Іова Кондзелевича. Поруч — порівняно не така вже й стара німецька лютеранська кірха. Також до заповідника віднесено рештки мурів Окольного замку XVI ст. і сторінку історії сучасного міста — «будинок з химерами» місцевого скульптора Миколи Голованя.</p></a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161601.27216104994!2d25.186881358603735!3d50.73812019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599932397bb75%3A0x919bbf2e5483cc76!2sAdministration%20of%20the%20State%20Historical%20and%20Cultural%20Reserve%20in%20Lutsk%20City!5e0!3m2!1sen!2sua!4v1680641155483!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
  
   
    <div class="form-item__textarea">
            <grammarly-extension data-grammarly-shadow-root="true" class="dnXmp"></grammarly-extension>
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

export default OldLu;