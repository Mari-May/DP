import { Link } from "react-router-dom";



const Mik= () => {
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
                                        <Link to="/sehen=49"> <img src="images/mik/1.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=49"  class='hr' ><h2>Українська Швейцарія</h2><br/></Link>
                                        <a class='hr' href="https://www.google.com/maps/place/Myhiya,+Mykolaiv+Oblast,+55223/@48.0397527,30.9291684,14z/data=!3m1!4b1!4m6!3m5!1s0x40ce4a04d5b0e609:0x373ac691846a46f5!8m2!3d48.0398428!4d30.9521026!16s%2Fg%2F122kcq_b" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=50"> <img src="images/mik/48811_15_990x480.png" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=50" class='hr'><h2>Радонове озеро</h2><br/></Link>
                                         <a class='hr' href="https://www.google.com/maps/place/Radonove+Ozero/@48.0218672,30.9656844,17z/data=!3m1!4b1!4m6!3m5!1s0x40ce4a7056a5c277:0x13ad409afb988513!8m2!3d48.0218672!4d30.9678731!16s%2Fg%2F11ddwsb7pn" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
    
                        <td>
                             <div class='container1'>
                                    <div class='box'>
                                        <div class='imgBox'>              
                                            <Link to="/sehen=51"> <img src="images/mik/rozovye-ozera-kinburn-768x511.jpg" alt="Фотография 1"/></Link> 
                                        </div>
                                        <div class='content'>
                                            <Link to="/sehen=51"  class='hr'><h2>Кінбурнська коса</h2><br/></Link>
                                             <a class='hr' href="https://www.google.com/maps/place/Kinburn+Spit/@46.5672329,31.4720706,12.91z/data=!4m10!1m2!2m1!1z0JrRltC90LHRg9GA0L3RgdGM0LrQsCDQutC-0YHQsA!3m6!1s0x40c66159e4d65de3:0x47441d2a555c9511!8m2!3d46.5633284!4d31.5216315!15sCh_QmtGW0L3QsdGD0YDQvdGB0YzQutCwINC60L7RgdCwkgEJcmVzdF9zdG9w4AEA!16s%2Fg%2F11b86cxtv5" ><span>Де знаходиться</span></a>
                                        </div>
                                    </div>
                                </div>
                            </td>
                    
                        <td>
                             <div class='container1'>
                                    <div class='box'>
                                        <div class='imgBox'>              
                                            <Link to="/sehen=52"> <img src="images/mik/33.jpg" alt="Фотография 1"/></Link> 
                                        </div>
                                        <div class='content'>
                                            <Link to="/sehen=52"  class='hr' ><h2>Національний природний парк “Бузький Гард”</h2><br/></Link>
                                                  <a class='hr' href="https://www.google.com/maps/place/Bug+Guard+National+Park/@48.0292039,30.9542735,15z/data=!4m6!3m5!1s0x40cfb4e752860c93:0xa1d444d2fce26087!8m2!3d48.0292039!4d30.9542735!16s%2Fg%2F11b6rzzxs4" ><span>Де знаходиться</span></a>
                                        </div>
                                    </div>
                                </div>
                            </td>
            </tr>              
                
        </table>
    </div>
    );
};
export default Mik;                

