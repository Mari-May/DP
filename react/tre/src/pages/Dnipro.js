import { Link } from "react-router-dom";

const Dnipro = () =>{
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
                                            <Link to="/sehen=12" > <img src="images/dnipro/21_60743beeb4b74.jpg" alt="Фотография 1"/></Link> 
                                        </div>
                                        <div class='content'>
                                            <Link to="/sehen=12" class='hr' ><h2>Монастирський острів</h2><br/></Link>
                                            <a class='hr' href="https://www.google.com/maps/place/Monastyrs%CA%B9kyy+Ostriv/@48.4600603,35.0709289,15z/data=!3m1!4b1!4m6!3m5!1s0x40dbe2cca77629b7:0x471fcfef41a333b1!8m2!3d48.463292!4d35.0795589!16s%2Fg%2F12h2sxqjr?hl=en"> <span>Де знаходиться</span></a>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        
                        
                        
                        
                        <td>
                            <div class='container1'>
                                    <div class='box'>
                                        <div class='imgBox'>              
                                            <Link to="/sehen=13"> <img src="images/dnipro/41906_800x600_1e0c71e8e395.jpg" alt="Фотография 21"/></Link> 
                                        </div>
                                        <div class='content'>
                                            <Link to="/sehen=13"  class='hr'><h2>Блакитне озеро</h2><br/></Link>
                                    <a class='hr' href="https://www.google.com/maps/search/%D0%B1%D0%BB%D0%B0%D0%BA%D0%B8%D1%82%D0%BD%D1%96+%D0%BE%D0%B7%D0%B5%D1%80%D0%B0+%D0%B4%D0%BD%D1%96%D0%BF%D1%80%D0%BE/@48.610128,34.5674008,13z/data=!3m1!4b1?hl=en"> <span>Де знаходиться</span></a>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        
                        

                        
                        <td>
                            <div class='container1'>
                                    <div class='box'>
                                        <div class='imgBox'>              
                                            <Link to="/sehen=14"> <img src="images/dnipro/1200px.jpg"alt="Фотография 21"/></Link> 
                                        </div>
                                        <div class='content'>
                                            <Link to="/sehen=14"   class='hr'><h2>Скеля "Орлине Гніздо"</h2><br/></Link>
                                            <a class='hr' href="https://www.google.com/maps/place/Rock+Eagle's+Nest/@47.8873413,33.3056545,17z/data=!3m1!4b1!4m6!3m5!1s0x40dad8ea95b94983:0x274a306cffa266e3!8m2!3d47.8873413!4d33.3078432!16s%2Fg%2F1ygbcgb9y"> <span>Де знаходиться</span></a>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        
                        <td>
                            <div class='container1'>
                                    <div class='box'>
                                        <div class='imgBox'>              
                                            <Link to="/sehen=15" > <img src="images/dnipro/vodospad-u-dnipri.jpg"alt="Фотография 21"/></Link> 
                                        </div>
                                        <div class='content'>
                                            <Link to="/sehen=12" class='hr'><h2>Водоспад "Поріг Ревучий"</h2><br/></Link>
                                                <a class='hr' href="https://www.google.com/maps/place/Monastyrs%CA%B9kyy+Ostriv/@48.4600603,35.0709289,15z/data=!3m1!4b1!4m6!3m5!1s0x40dbe2cca77629b7:0x471fcfef41a333b1!8m2!3d48.463292!4d35.0795589!16s%2Fg%2F12h2sxqjr?hl=en"> <span>Де знаходиться</span></a>
                                        </div>
                                    </div>
                                </div>
                            </td>
                    </tr>              
                    
                </table>
            </div>
    );
};

export default Dnipro;