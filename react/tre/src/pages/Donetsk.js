


import { Link } from "react-router-dom";



const Donetsk= () => {
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
                            <Link to="/sehen=16" > <img src="images/donetsk/2.jpg" alt="Фотография 1"/></Link> 
                        </div>
                        <div class='content'>
                            <Link to="/sehen=16"  class='hr' ><h2>Кам'яні Могили</h2><br/></Link>
                            <a class='hr' href="https://www.google.com/maps?q=%D0%BA%D0%B0%D0%BC%27%D1%8F%D0%BD%D1%96+%D0%BC%D0%BE%D0%B3%D0%B8%D0%BB%D0%B8&source=lmns&entry=mt&bih=880&biw=1403&rlz=1C1GGRV_ruUA1012UA1012&hl=en&sa=X&ved=2ahUKEwjpkb6u1pP-AhWDsyoKHQioAUwQ_AUoAnoECAEQAg
        "> <span>Де знаходиться</span></a>
                        </div> 
                    </div>
                </div>
            </td>
        
        
        <td>
            <div class='container1'>
                    <div class='box'>
                        <div class='imgBox'>              
                            <Link to="/sehen=17"> <img src="images/donetsk/622d781172a458.17487607.max-1920x900.jpg" alt="Фотография 1"/></Link> 
                        </div>
                        <div class='content'>
                            <Link to="/sehen=17"  class='hr'><h2>Свято-Успенська Святогірська лавра</h2><br/></Link>
                                <a class='hr' href="        https://www.google.com/maps/search/%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B0+%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D1%96%D1%80%D1%81%D1%8C%D0%BA%D0%B0+%D0%BB%D0%B0%D0%B2%D1%80%D0%B0/@49.0281481,37.5653756,17z/data=!3m1!4b1
        "> <span>Де знаходиться</span></a>
                        </div>
                    </div>
                </div>
            </td>
        
        <td>
            <div class='container1'>
                    <div class='box'>
                        <div class='imgBox'>              
                            <Link to="/sehen=18" > <img src="images/donetsk/bk03.jpg" alt="Фотография 1"/></Link> 
                        </div>
                        <div class='content'>
                            <Link to="/sehen=18"   class='hr'><h2>Білокузьминівські крейдяні скелі</h2><br/></Link>
                            <a class='hr' href="https://www.google.com/maps/place/Kreydyani+Bilokuz%CA%B9mynivs%CA%B9ki+Skeli/@48.660111,37.6832064,17z/data=!3m1!4b1!4m6!3m5!1s0x40df956965c79a0d:0x59eaade308440497!8m2!3d48.660111!4d37.6853951!16s%2Fg%2F11c60ksfb7"> 
                            <span>Де знаходиться</span></a>
                        </div>
                    </div>
                </div>
            </td>
        
        </tr>              
    
    </table>
    </div>
    );
};

export default Donetsk;