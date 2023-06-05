import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Tub = () => {
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
            <img src="images/khers/full_DSC_5420-460.jpg"/> 
            <img src="images/khers/full_DJI_0664-450.jpg"/> 
            <img src="images/khers/palac_trubeckoi3.webp"/>  
        </div>      
    </div>
             
<div class="inf">
                
        <a><p>Садиба князя Трубецького в селі Козацькому є одним з найбільших архітектурних ансамблів Херсонського краю. Вона включає численні будівлі, що знаходяться на території села, в тому числі і палацово-парковий ансамбль.</p>

        <p>Палац в нинішній час має потребу в реконструкції і складається з чудового ландшафтно-дизайнерського комплексу. Опорні стіни і башти, ворота, містки, аркбутани, що підтримують стіну над урвищем, є продовженням прибережного рельєфу і створюють враження загального гармонійного ансамблю. Сьогодні важко відокремити творіння рук людини і природи. У колишньому розкішному парку на березі річки Козак не залишилося ні аркових віадуків, ні інших паркових об`єктів. Тільки що біжать по прибережним камінню джерела, могли б розповісти про померлого велич маєтку Трубецьких і села Козацьке.</p>

        <p>Палац Трубецьких був створений в стилі французького ренесансу з елементами готики, весь комплекс був подібний до унікальному казкового замку. Йому належали великі головний будинок: палац, ряд флігелів, стайні; з землі піднімалися могутні стіни з зовнішніми кам`яними напіварки. Все вінчала кутова замкова вежа, що виходить до Дніпра. Палацовий комплекс оточував великий сад. На сьогоднішній день більшість споруд знаходиться в руїнах, зберігся лише каркас головної будівлі.</p>

        <p>В даний час палац знаходиться у власності ВАТ «Князя Трубецького», планується його реставрація. Починаючи відродження колишньої слави благородних вин Козацького, нові власники обіцяють відновити і садибу. Сам замок закритий, але прогулянка в його околицях, особливо з боку Дніпра, приносить величезне задоволення. Поруч з замком знаходиться знаменита Солов`їний гай, де можна почути різноголосі солов`їні трелі і попити з джерел чистої води.

</p>
                          
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.635958578437!2d33.361114215602385!3d46.791777279139055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c385060f409d91%3A0xf386168a82158cea!2sPalats%20Knyazya%20Trubets%CA%B9koho!5e0!3m2!1sen!2sua!4v1681405744802!5m2!1sen!2sua" width="100%" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Tub;  