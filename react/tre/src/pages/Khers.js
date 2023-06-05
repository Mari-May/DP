import { Link } from "react-router-dom";



const Khers= () => {
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
                                        <Link to="/sehen=75" > <img src="images/khers/Q8MBf.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=75"  class='hr'><h2>Набережна</h2><br/></Link>
                                        <a class='hr' href="https://www.google.com/maps/place/Kazkova+Dibrova/@46.7643755,33.3383581,14z/data=!4m6!3m5!1s0x40c3855e8d5d145b:0x99d8056369be7022!8m2!3d46.7633824!4d33.3608815!16s%2Fg%2F11bx0p70f9?hl=en" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                    
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=76"> <img src="images/khers/24_6016f2355c12a.png" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=76"  class='hr'><h2>Руїни палацу князя Трубецького</h2><br/></Link>
                                         <a class='hr' href="https://www.google.com/maps/place/Palats+Knyazya+Trubets%CA%B9koho/@46.7917773,33.3611142,17z/data=!3m1!4b1!4m6!3m5!1s0x40c385060f409d91:0xf386168a82158cea!8m2!3d46.7917773!4d33.3633029!16s%2Fg%2F11jj7dkcgd" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                     
                    
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=77"> <img src="images/khers/28209_9da_ht8p04.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=77"  class='hr'><h2>Національний природний парк «Олешківські піски»</h2><br/></Link>
                                         <a class='hr' href="https://www.google.com/maps/place/Oleshky+Sands+National+Nature+Park/@46.5820556,32.7369851,11z/data=!4m10!1m2!2m1!1z0J7Qu9C10YjQutGW0LLRgdGM0LrRliDQv9GW0YHQutC4!3m6!1s0x40c3f14006c3afa5:0x98976ad7f10b6467!8m2!3d46.5820556!4d33.0418557!15sCiHQntC70LXRiNC60ZbQstGB0YzQutGWINC_0ZbRgdC60LiSAQ1uYXRpb25hbF9wYXJr4AEA!16s%2Fg%2F119x6_dcs?hl=en" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div class='container1'>
                                   <div class='box'>
                                       <div class='imgBox'>              
                                           <Link to="/sehen=78"> <img src="images/cher/0_img-221108085495.jpg" alt="Фотография 1"/></Link> 
                                       </div>
                                       <div class='content'>
                                           <Link to="/sehen=78"  class='hr' ><h2>Заповідник «Асканія-Нова»</h2><br/></Link>
                                              <a class='hr' href="https://www.google.com/maps/place/Askania-Nova/@46.4658583,33.9794836,17z/data=!3m1!4b1!4m6!3m5!1s0x40c24b61e063f919:0xcf0a954fc7fe3640!8m2!3d46.4658583!4d33.9816723!16s%2Fm%2F0264_hq?hl=en" ><span>Де знаходиться</span></a>
                                       </div>
                                   </div>
                               </div>
                       </td>
        
            </tr>         
        </table>
    </div>
    );
};
export default Khers;   
