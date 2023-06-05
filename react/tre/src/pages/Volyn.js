import { Link } from "react-router-dom";



const Volyn= () => {
    return(
        <div class='header2' >
               <div class='container'>
                <div class='header-line'>

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
                                        <Link to="/sehen=08" > <img src="images/volyn/museum-of-lesya-ukrainka.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=08"  class='hr' ><h2>Музей-садиба Лесі Українки</h2><br/></Link>
                                     <a  class='hr' href="https://www.google.com/maps/place/Museum+of+Lesya+Ukrainka/@51.1757601,24.7899557,17z/data=!3m1!4b1!4m6!3m5!1s0x472430ebed6ac759:0xae03a49812a21e9e!8m2!3d51.1757601!4d24.7921444!16s%2Fg%2F12226v4b"> <span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                        <td>
                             <div class='container1'>
                                    <div class='box'>
                                        <div class='imgBox'>              
                                            <Link to="/sehen=09" > <img src="images/volyn/luckii_zamok.jpg" alt="Фотография 1"/></Link> 
                                        </div>
                                        <div class='content'>
                                            <Link to="/sehen=09" class='hr' ><h2>Заповідник "Старий Луцьк"</h2><br/></Link>
                                              <a class='hr' href="https://www.google.com/maps/place/Administration+of+the+State+Historical+and+Cultural+Reserve+in+Lutsk+City/@50.7381202,25.1868814,11z/data=!4m10!1m2!2m1!1z0LfQsNC_0L7QstGW0LTQvdC40Log0YHRgtCw0YDQuNC5INC70YPRhtGM0Lo!3m6!1s0x472599932397bb75:0x919bbf2e5483cc76!8m2!3d50.7381202!4d25.3190952!15sCizQt9Cw0L_QvtCy0ZbQtNC90LjQuiDRgdGC0LDRgNC40Lkg0LvRg9GG0YzQupIBE3RyaWJhbF9oZWFkcXVhcnRlcnPgAQA!16s%2Fg%2F1tgcl1gw?hl=en"> <span>Де знаходиться</span></a>
                                        </div>
                                    </div>
                                </div>
                            </td>  
                    
                            <td>
                                <div class='container1'>
                                            <div class='box'>
                                                <div class='imgBox'>              
                                                    <Link to="/sehen=10" > <img src="images/volyn/33.jpg" alt="Фотография 1"/></Link> 
                                                </div>
                                                <div class='content'>
                                                    <Link to="/sehen=10" class='hr' ><h2>Резиденція роду Радзивилів</h2><br/></Link>
                                                  <a class='hr' href="https://www.google.com/maps/place/Olyka+Castle/@50.7230923,25.8094826,16.48z/data=!4m6!3m5!1s0x472f623b593d6c41:0x87fb557ea3c9649e!8m2!3d50.7233005!4d25.8096538!16s%2Fm%2F05ms75x"> <span>Де знаходиться</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                    
                            <td>
                                <div class='container1'>
                                            <div class='box'>
                                                <div class='imgBox'>              
                                                    <Link to="/sehen=11" > <img src="images/volyn/berestechko.jpg" alt="Фотография 1"/></Link> 
                                                </div>
                                                <div class='content'>
                                                    <Link to="/sehen=11"   class='hr'><h2>Заповідник “Поле Берестецької битви”</h2><br/></Link>
                                                     <a class='hr' href="https://www.google.com/maps/place/Field+of+the+Battle+of+Berestechko/@50.3495322,25.1922346,17z/data=!3m1!4b1!4m6!3m5!1s0x472564281bc7ab41:0x9443d80f23844cf3!8m2!3d50.3495322!4d25.1944233!16s%2Fg%2F121xw9r4"> <span>Де знаходиться</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>   
                
                            </tr>              
                
            </table>
        </div> 
    );
};

export default Volyn;