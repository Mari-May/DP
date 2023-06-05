import "../1.js"
import { Link, useLocation } from "react-router-dom";

const StAndr = () => {
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
            <img src="images/lviv/full_DSC_1660.jpg"/>
            <img src="images/lviv/1.jpg"/>
            <img src="images/lviv/kost_bern_int1.jpg"/> 
        </div>      
    </div>
             
<div class="inf">
        <a><p>Роль сторожового бастіону Львова, що тільки опосередковано поєднувався з комплексом міських укріплень, відігравав фортифікований монастир Бернардинів, фортечні мури якого збереглися донині. Здалеку помітний гарний силует барокової вежі, що здіймається з корпусу храму з-поміж оборонних мурів з бійницями та монастирських забудувань.</p>

        <p>Перед костелом на високій колоні здіймається статуя (колона) св. Яна з Дуклі, поставлена на пам'ятку "чуда", яке у 1648 році врятувало Львів від захоплення Хмельницьким.</p>
            
        <p>На подвір'ї за колодязем, у глибині збереглися помітні останки мурів бернардинської фортеці із помітними слідами дерев'яних риштовань, на яких стояли оборонці монастиря, та характерними бійницями, помітними зовні від повороту Личаківської і Панської (нині Франка–Винниченка) вулиці. Подібні, одначе частково знесені фортечні мури донині оточують усе монастирське подвір'я.</p>
            
        <p>В забудовах Бернардинського монастиря зберігається славний архів міських і земських актів, званий також "Бернардинським". В архіві можна знайти судові книги давнього руського і белзького воєводства, де від 1434 року існувало заведене Польщею городське і земське судівництво. Урядова мова актів – латинська, хоч тут трапляються польські й українські записи. Крім цього, архів містить книги інших судів, а саме книги підкоморські, каптурових судів, підвоєводських, скарбових, карного трибуналу та книги прав вищого суду німецького права в Сяноці, книги австрійських судів (1772–1784) та депозит міст, містечок і сіл, краєвої дирекції скарбу тощо. Другу групу пізніших актів становлять останки книг шляхетського суду, акти кримінально-політичних процесів середини XIX століття та книги Йосефинської метрики від 1789 року і ґрунтовні 1780. До цього безцінного архіву входить біля 12000 оправлених і впорядкованих фоліантів.</p>
                                
    </a>
                                
</div>    


	 
      <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1541917984623!2d24.032285651272833!3d49.83956023897237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c1cf1bd15%3A0xf98d031cfb204a67!2sBernardine%20monastery!5e0!3m2!1sen!2sua!4v1681073016712!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default StAndr;   

