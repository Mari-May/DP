import { Link } from "react-router-dom";



const Zhytom= () => {
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
                                        <Link to="/sehen=19" > <img src="images/zhytom/90764589_OqbUWnC-2jMyLo0MQnfqI5uPYioP5olsWJHbC08M9gw.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=19"  class='hr' ><h2>Палац Бержинських-Терещенків</h2><br/></Link>
                                        <a class='hr' href="  https://www.google.com/maps/place/Palats+Berzhyns%CA%B9kykh-Tereshchenkiv,+Vulytsya+Lenina,+Andrushivka,+Zhytomyrs'ka+oblast,+13401/@50.0162884,29.0211636,17z/data=!3m1!4b1!4m6!3m5!1s0x472c93577906569b:0xa9d918680bb39b4d!8m2!3d50.0162884!4d29.0233523!16s%2Fm%2F0hhtxvk"> <span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
    
    
                        <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=20"> <img src="images/zhytom/J6oyNXa.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=20"  class='hr' ><h2>Дружбівський кар'єр</h2><br/></Link>
                                           <a class='hr' href="https://www.google.com/maps/place/%D0%94%D1%80%D1%83%D0%B6%D0%B1%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9+%D0%BA%D0%B0%D1%80'%D1%94%D1%80+Druzhbivsky+quarry/@51.1934231,27.9701566,15z/data=!4m10!1m2!2m1!1z0JTRgNGD0LbQsdGW0LLRgdGM0LrQuNC5INC60LDRgCfRlNGA!3m6!1s0x47290d5c1bd87c6d:0x56dc37facd0c3a35!8m2!3d51.1954834!4d27.9844875!15sCiTQlNGA0YPQttCx0ZbQstGB0YzQutC40Lkg0LrQsNGAJ9GU0YCSAQZxdWFycnngAQA!16s%2Fg%2F11hg9kdxhc"> <span>Де знаходиться</span></a>
                                      </div>
                                </div>
                            </div>
                        </td>
    
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=21" > <img src="images/zhytom/fil04.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=21"   class='hr'><h2>Житомирська обласна філармонія</h2><br/></Link>
                                       <a class='hr' href="https://www.google.com/maps/place/Filarmoniya/@50.2493577,28.6644792,19.17z/data=!4m10!1m2!2m1!1z0YTRltC70LDRgNC80L7QvdGW0Y8gbmVhciDQstGD0LvQuNGG0Y8g0KHQstGP0YLQvtGB0LvQsNCy0LAg0KDRltGF0YLQtdGA0LAsIFpoeXRvbXlyLCBaaHl0b215ciBPYmxhc3Q!3m6!1s0x472c651f5f0c3f73:0xf8f67dd4578d7ce6!8m2!3d50.2494301!4d28.6645468!15sCmXRhNGW0LvQsNGA0LzQvtC90ZbRjyBuZWFyINCy0YPQu9C40YbRjyDQodCy0Y_RgtC-0YHQu9Cw0LLQsCDQoNGW0YXRgtC10YDQsCwgWmh5dG9teXIsIFpoeXRvbXlyIE9ibGFzdJIBEXBoaWxoYXJtb25pY19oYWxs4AEA!16s%2Fg%2F11nnzc3gmt"  > <span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
    
                        <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=22"> <img src="images/zhytom/3283_preview.v1.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=22"    class='hr'><h2>Острів кохання</h2><br/></Link>
                                        <a class='hr' href=" https://www.google.com/maps/place/Fisherman's+House/@50.0406216,28.6826474,17z/data=!3m1!4b1!4m6!3m5!1s0x472cf44da2126243:0x22fb6875773c52fe!8m2!3d50.0406216!4d28.6852223!16s%2Fg%2F11c0rgrlmv?hl=en"  > <span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                       
    
    
            </tr>              
                
        </table>
    </div>
    );
};

export default  Zhytom;