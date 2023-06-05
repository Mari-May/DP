





import { Link } from "react-router-dom";



const Vinn= () => {
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
                                <Link to="/sehen=05"> <img src="images/vinn/738d533e7c5cd31f92b1516bd4999ec0.jpeg" alt="Фотография 1"/></Link> 
                                </div>
                                <div class='content'>
                                    <Link to="/sehen=05" class='hr' ><h2>Автомотовелофототелерадіо музей</h2><br/></Link>
                                    <a class="hr" href="https://www.google.com/maps/place/Museum+of+Retro+Technology+Avtomotovelofototeleradio/@49.2334332,28.4768997,17z/data=!3m1!4b1!4m6!3m5!1s0x472d5b6faf8380e5:0xde48b3c7651fa78!8m2!3d49.2334332!4d28.4790884!16s%2Fg%2F1yg4f8lh_?hl=en"><span>Де знаходиться</span></a>
                                </div>
                            </div>
                        </div>
                    </td>
            
                <td>
                    <div class='container1'>
                            <div class='box'>
                                <div class='imgBox'>              
                                    <Link to="/sehen=06"><img src="images/vinn/Screenshot_8.jpg" alt="Фотография 1"/></Link>
                                </div>
                                <div class='content'>
                                    <Link to="/sehen=06"  class='hr' ><h2>Вінницький планетарій</h2><br/></Link>
                                    <a class="hr" href="https://www.google.com/maps/place/Vinnytsia+Planetarium/@49.2366398,28.4510084,17z/data=!3m1!4b1!4m6!3m5!1s0x472d5c836bf3fb69:0xd83f4c6fbc3291a4!8m2!3d49.2366398!4d28.4531971!16s%2Fg%2F11c1s1bmrx"><span>Де знаходиться</span></a>
                                </div>
                            </div>
                    </div>
                </td>
            
                
                <td>
                <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                    <Link to="/sehen=07"> <img src="images/vinn/613764c035575.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=07" class='hr' ><h2>Подільський зоопарк</h2><br/></Link>
                                    <a class="hr" href="https://www.google.com/maps/place/Podil%CA%B9s%CA%B9kyy+Zoopark/@49.2714477,28.4735107,17z/data=!3m1!4b1!4m6!3m5!1s0x472d434e87ef3b6d:0xa28784fef825df2!8m2!3d49.2714477!4d28.4756994!16s%2Fg%2F121jyv1z"><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                    </td>
            </tr>              
            
        </table>
    </div>
    );
};
export default Vinn;