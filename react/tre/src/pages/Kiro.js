import { Link } from "react-router-dom";



const Kiro= () => {
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
                                        <Link to="/sehen=38"> <img src="images/kiro/36319107_10155400127186363_808147274117939200_n.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=38"  class='hr'><h2>Садиба Даховських</h2><br/></Link>
                            <a class='hr' href="https://www.google.com/maps/place/Sadyba+Dakhovs%CA%B9kykh+Xix+St./@48.993974,29.872371,17z/data=!3m1!4b1!4m6!3m5!1s0x40d261531f18b1c1:0xab0f928e88baec17!8m2!3d48.993974!4d29.8745597!16s%2Fg%2F11n_xyy6q9?hl=en"> <span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                                    
                     <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=39"> <img src="images/kiro/urochische-kaskadu-5-58c545a09925f.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=39"  class='hr'><h2>Урочище Каскади</h2><br/></Link>
                                       <a class='hr' href=" https://www.google.com/maps/place/Urochyshche+Kaskady/@48.4398202,31.4932101,17z/data=!3m1!4b1!4m6!3m5!1s0x40d1cda964e1ffed:0x48a6ea617dacc857!8m2!3d48.4398202!4d31.4953988!16s%2Fg%2F120mt741"> <span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                     <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=40" > <img src="images/kiro/satana-3.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=40"  class='hr' ><h2>Музей Судного дня</h2><br/></Link>
                                       <a class='hr' href="https://www.google.com/maps/place/Museum+of+strategic+rocket+forces/@48.1865615,30.6628904,17z/data=!3m1!4b1!4m6!3m5!1s0x40ce3e2076824d8d:0x573ba569ce38d08a!8m2!3d48.1865615!4d30.6650791!16s%2Fm%2F0fphj95"> <span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
              
                
                
                     <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=41"> <img src="images/kiro/MG_1255.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=41" class='hr' ><h2>Веселі Боковеньки</h2><br/></Link>
                                        <a class='hr' href="https://www.google.com/maps/place/Arboretums+Forest+Centre+Veseli+Bokovenky/@48.2162725,32.8606859,15z/data=!4m6!3m5!1s0x40da9765ea756671:0xc25bbbfedbfe6f8b!8m2!3d48.2162725!4d32.8606859!16s%2Fg%2F120rlpt0"> <span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                
                </tr> 
                
        </table>
    </div>
);
};

export default Kiro;
