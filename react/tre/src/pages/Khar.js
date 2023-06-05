import { Link } from "react-router-dom";

const Khar= () => {
    return(
    <div class='header2' >
        <div className='container'>
            <div className='header-line'>
    
                <div className='header-logo'>
                    <Link to="/"> <img src="images/logo-50.png"/></Link>
                </div>
    
                <div className="nav">
                    <div>
                        <Link to="/" className="nav-item">ГОЛОВНА</Link>
                        <Link to="/City" className="nav-item">МІСТА</Link>
                    </div>
                </div>
    
                    </div> 
                    </div>
                    <table border="0" width="100%" pading-top="5%">
                <tr>
                     <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=71"> <img src="images/khar/Kharkiv,_Darvina_Street_-_05.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=71"  class='hr' ><h2>Вулиця Дарвіна</h2><br/></Link>
                                        <a class='hr' href="https://www.google.com/maps/place/Darvina+St,+Kharkiv,+Kharkivs'ka+oblast,+61000/@49.9976175,36.2421565,17z/data=!3m1!4b1!4m6!3m5!1s0x4127a0e944d8b8bb:0xa2c5a065708b8c7a!8m2!3d49.9976175!4d36.2443452!16s%2Fg%2F1222j8cd"><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=72"> <img src="images/khar/3282.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=72"  class='hr' ><h2>Собор Успіння Пресвятої Діви Марії </h2><br/></Link>
                                       <a class='hr' href="https://www.google.com/maps/place/Roman+Catholic+Church+of+the+Assumption+of+Mary+Prisnodivy/@49.9964066,36.2332277,17z/data=!3m1!4b1!4m6!3m5!1s0x4127a0ef7d4403c3:0xb4edd3cc457f7ab0!8m2!3d49.9964066!4d36.2354164!16s%2Fg%2F1227vkjs?hl=en" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                     <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=73"> <img src="images/khar/photo_2021-10-10_20-05-04_0.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=73" class='hr' ><h2>Фентезі-парк </h2><br/></Link>
                                         <a class='hr' href="https://www.google.com/maps/place/Fantasy+Park/@49.9782744,36.2667974,19.02z/data=!4m10!1m2!2m1!1z0KTQldCd0KLQldCX0IYt0J_QkNCg0Jo!3m6!1s0x4127a1bd6fefa30f:0x7d2287b72ea0116d!8m2!3d49.9783105!4d36.2681521!15sChfQpNCV0J3QotCV0JfQhi3Qn9CQ0KDQmloZIhfRhNC10L3RgtC10LfRliDQv9Cw0YDQupIBBHBhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTkhiVXBwWkZCM0VBReABAA!16s%2Fg%2F11p67hkc5n" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                     <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=74"> <img src="images/khar/IMG_8825-455x455.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=74"  class='hr' ><h2>Парк імені Максима Горького  </h2><br/></Link>
                                        <a class='hr' href="https://www.google.com/maps/place/Maxim+Gorky+Central+Park+for+Culture+and+Recreation/@50.0162903,36.2441439,17z/data=!3m1!4b1!4m6!3m5!1s0x4127a1000e0da5b9:0x7bc3ddab9336dd55!8m2!3d50.0162869!4d36.2467188!16s%2Fm%2F09gm5x7" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                </tr>              
                
        </table>
    </div>
);
};
export default Khar;