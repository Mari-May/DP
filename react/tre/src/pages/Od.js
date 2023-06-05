import { Link } from "react-router-dom";



const Od= () => {
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
                                        <Link to="/sehen=53"> <img src="images/od/akkerman.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=53"  class='hr' ><h2>Аккерманська (Білгород-Дністровська) фортеця</h2><br/></Link>
                                       <a class='hr' href="https://www.google.com/maps/place/Bilhorod-Dnister+fortress/@46.200496,30.3484913,17z/data=!3m1!4b1!4m6!3m5!1s0x40c7dcd52e629623:0x6b58c41bdd799cab!8m2!3d46.200496!4d30.35068!16s%2Fg%2F122q0bt6" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                  
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=54"> <img src="images/od/47ba47952f772c2900e89502c5388e4c.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=54"  class='hr' ><h2>Озеро Ялпуг</h2><br/></Link>
                                       <a class='hr' href="https://www.google.com/maps/place/Yalpuh+Lake/@45.5488571,28.6023439,10.26z/data=!4m6!3m5!1s0x40b70dc5822397f5:0x978b34f50c6e84ee!8m2!3d45.475211!4d28.6179098!16s%2Fm%2F02rrfch" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                      <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=55" > <img src="images/od/center-shabo-768x513.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=55"  class='hr' ><h2>Центр культури вина Шабо</h2><br/></Link>
                                         <a class='hr' href="https://www.google.com/maps/place/Wine+Culture+Center+Shabo/@46.1431065,30.3714402,17z/data=!4m10!1m2!2m1!1z0KbQldCd0KLQoCDQmtCj0JvQrNCi0KPQoNCYINCS0JjQndCQIOKAnNCo0JDQkdCe4oCd!3m6!1s0x40c7e9da40ab9153:0x52de63482e5a225f!8m2!3d46.143119!4d30.3736412!15sCjPQptCV0J3QotCgINCa0KPQm9Cs0KLQo9Cg0Jgg0JLQmNCd0JAg4oCc0KjQkNCR0J7igJ2SAQZtdXNldW3gAQA!16s%2Fg%2F113qbhnw6?hl=en" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>   
                    
                    
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=56"> <img src="images/od/117931136_1229942240687884_756939802788707153_o.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=56" class='hr' ><h2>Куяльницький лиман</h2><br/></Link>
                                           <a class='hr' href="https://www.google.com/maps/place/Kuyalnik+Estuary/@46.6333469,30.7078908,15z/data=!3m1!4b1!4m6!3m5!1s0x40c626a9bf0d8ac1:0xcc7162c54541a0ab!8m2!3d46.633333!4d30.716667!16s%2Fm%2F0g58xy2?hl=en" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>   
                    
                    
                    
            </tr>              
                
        </table>
    </div>

    );
};
export default Od;