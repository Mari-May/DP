import { Link } from "react-router-dom";



const Summ= () => {
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
                                        <Link to="/sehen=64"> <img src="images/sum/shpilivka_3.1200x800.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=64"  class='hr' href="sumSh.html"><h2>Сумська Швейцарія</h2><br/></Link>
                                        <a class='hr' href="https://www.google.com/maps/place/Shpylevskyy+Kholm/@50.7934882,34.6753939,14z/data=!4m15!1m8!3m7!1s0x4129ab348fbde8ed:0x4e95c7911d212978!2sShpylivka,+Sumy+Oblast,+42354!3b1!8m2!3d50.7968172!4d34.6885037!16s%2Fg%2F11r7pt1bs!3m5!1s0x4129ab9626faa33b:0x2fdbc8ee9dec242!8m2!3d50.803579!4d34.700291!16s%2Fg%2F11l4b39f46" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=65"> <img src="images/sum/Mon_1.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=65"  class='hr' ><h2>Мовчанський монастир</h2><br/></Link>
                                           <a class='hr' href="https://www.google.com/maps/place/Molchenskyy+convent/@51.3259337,33.8731426,16.5z/data=!4m6!3m5!1s0x412bda1cade09333:0x95d48311a144110a!8m2!3d51.3259657!4d33.8751091!16s%2Fg%2F121_js2v" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                    
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=66"> <img src="images/sum/4ced842de5e6e066f97e8cf767011d90.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=66"  class='hr' href="ked.html"><h2>Крейдяні гори</h2><br/></Link>
                                          <a class='hr' href="https://www.google.com/maps/place/%D0%9C%D0%BE%D0%B3%D1%80%D0%B8%D1%86%D1%8F+%D0%9A%D1%80%D0%B5%D0%B9%D0%B4%D1%8F%D0%BD%D0%B0+%D0%A5%D0%B0%D1%82%D0%B0/@51.0337106,35.0215513,13z/data=!4m10!1m2!2m1!1z0JrRgNC10LnQtNGP0L3RliDQs9C-0YDQuCwg0KHRg9C80YHRjNC60LAg0L7QsdC70LDRgdGC0Yw!3m6!1s0x4128e1990fa0eba9:0x424892367417817!8m2!3d51.0215979!4d35.1303276!15sCjjQmtGA0LXQudC00Y_QvdGWINCz0L7RgNC4LCDQodGD0LzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjFo5IjfQutGA0LXQudC00Y_QvdGWINCz0L7RgNC4INGB0YPQvNGB0YzQutCwINC-0LHQu9Cw0YHRgtGMkgETdmFjYXRpb25fYXBwYXJ0bWVudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOaGMxOTJTekIzUlJBQuABAA!16s%2Fg%2F11ft9_krng" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                        
    
            </tr>              
                
        </table>
    </div>

);
};
export default Summ;