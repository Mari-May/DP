import "../1.js"
import { Link, useLocation } from "react-router-dom";

const Olesch = () => {
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
              <img src="images/khers/0902657v89-2x1200x1200x0x0x0.png"/> 
              <img src="images/khers/oleshky-sands-01.jpg"/>
              <img src="images/khers/d2fd1889f0e5184f4c5d6eac317725ba.png"/> 
            </div>      
    </div>
             
<div class="inf">
                
        <a><p>Олешківські піски є найбільшим піщаним масивом у Європі. Складаються із безмежних барханів (тутешні мешканці називають їх «кучугурами»), висотою близько 5 м, і негустою рослинністю.</p>

        <p>Знаходяться ці піски у Цюрупінському районі (стара назва Цюрупінська – Олешки) Херсонської області,за 30 км на схід від обласного центру. Дніпровські піски існували здавна, але Олешківська пустеля у нинішньому своєму вигляді з’явилися порівняно недавно: через випасання величезних отар овець у ХІХ ст., які знищили траву, звільнили піски, а вітрова ерозія дала їм можливість розширюватися.</p>     

        <p>Стримують пустелю, яка в діаметрі має розмір близько 15 км, штучно насаджені густі ліси.</p>

        <p>Незважаючи на те, що Олешківські піски часто називають пустелею, це не зовсім правильно. За температурним режимом та кількістю опадів їх можна швидше віднести до напівпустель. Влітку пісок нагрівається до 70 градусів, і гарячі висхідні потоки, що йдуть від пісків, розгонять дощові хмари. Тому дощів тут менше, аніж в самому Херсоні, який знаходиться по іншу сторону Дніпра. Трапляються тут і піщані бурі, під час яких не видно ані неба, ані сонця.</p>
            
        <p>В пустелі на глибині 300-400 м існує прісне підземне озеро з дуже смачною водою. Проте, науковці дослідили, що масштабно добувати звідси воду не можна, оскільки рівень води знизиться, і ліси не зможуть стримувати піски. До найближчого населеного пункту від пустелі – біля 7 км.</p>
        
    
                          
    </a>
                                
</div>    


	 
      <div class="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175504.77486789515!2d32.736985094531235!3d46.582055600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c3f14006c3afa5%3A0x98976ad7f10b6467!2sOleshky%20Sands%20National%20Nature%20Park!5e0!3m2!1sen!2sua!4v1681413043194!5m2!1sen!2sua" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export default Olesch;  