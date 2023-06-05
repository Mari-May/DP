import { Link } from "react-router-dom";



const Carpat= () => {
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
                                    <Link to="/sehen=23"  > <img src="images/afCarpat/sinevir_magija_karpat.jpg" alt="Фотография 1"/></Link> 
                                </div>
                                <div class='content'>
                                    <Link to="/sehen=23" class='hr' ><h2>Озеро Синевир</h2><br/></Link>
                                      <a class='hr' href="https://www.google.com/maps/place/Synevyr/@48.6169981,23.6664903,14z/data=!4m10!1m2!2m1!1z0J7Qt9C10YDQviDQodC40L3QtdCy0LjRgA!3m6!1s0x4739e3e3f179593f:0xbc869f803c94acef!8m2!3d48.617!4d23.6839999!15sChnQntC30LXRgNC-INCh0LjQvdC10LLQuNGAkgEEbGFrZeABAA!16s%2Fm%2F027kppy?hl=en"> <span>Де знаходиться</span></a>
                                </div>
                            </div>
                        </div>
                    </td>   
             
                
                    <td>
                        <div class='container1'>
                            <div class='box'>
                                <div class='imgBox'>              
                                    <Link to="/sehen=24" > <img src="images/afCarpat/5-475x600.jpg" alt="Фотография 1"/></Link> 
                                </div>
                                <div class='content'>
                                    <Link to="/sehen=24"  class='hr'><h2>Музей виробництва Чиза</h2><br/></Link>
                                      <a class='hr' href="https://www.google.com/maps/place/Winemaker+Chiz+Museum/@48.2255681,22.638866,17z/data=!4m14!1m7!3m6!1s0x47385bed6a8efe4d:0x66aaa4372e7a3a3!2sWinemaker+Chiz+Museum!8m2!3d48.2255681!4d22.6410547!16s%2Fg%2F11fv38v88l!3m5!1s0x47385bed6a8efe4d:0x66aaa4372e7a3a3!8m2!3d48.2255681!4d22.6410547!16s%2Fg%2F11fv38v88l"> <span>Де знаходиться</span></a>
                                </div>
                            </div>
                        </div>
                    </td>   
                
                    
                    <td>
                        <div class='container1'>
                            <div class='box'>
                                <div class='imgBox'>              
                                    <Link to="/sehen=25"> <img src="images/afCarpat/Museum_of_Mountain_Ecology_and_History_of_Nature_Use_in_the_Ukrainian_Carpathians_(5167-69).jpg" alt="Фотография 1"/></Link> 
                                </div>
                                <div class='content'>
                                    <Link to="/sehen=25"  class='hr'><h2>Музей екології гір та історії природокористування в Українських Карпатах</h2><br/></Link>
                                    <a class='hr' href="https://www.google.com/maps/place/Muzey+Ekolohiyi+Hir+Ta+Istoriyi+Pryrodokorystuvannya+V+Ukrayins%CA%B9kykh+Karpatakh/@48.0248865,24.1664521,15z/data=!4m6!3m5!1s0x4737a973d290b009:0x8a37b987f6740074!8m2!3d48.0248865!4d24.1664521!16s%2Fg%2F11b7c8mh32"><span>Де знахлдиться</span></a>
                                </div>
                            </div>
                        </div>
                        
                    </td>   
                </tr>
                
                
            </table>
        </div>
    );
};

export default Carpat;   