import { Link } from "react-router-dom";



const Pol= () => {
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
                                        <Link to="/sehen=57"> <img src="images/pol/IMG_0012--scaled.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=57" class='hr' ><h2>Краєзнавчий музей</h2><br/></Link>
                                        <a class='hr' href="https://www.google.com/maps/place/Poltava+Local+Lore+Museum/@49.5834185,34.5592577,17z/data=!3m1!4b1!4m6!3m5!1s0x40d82f61ab8502f7:0x3b509d1dd5d1e388!8m2!3d49.5834185!4d34.5614464!16s%2Fg%2F122cthxh?hl=en" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=58"> <img src="images/pol/3685.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=58"  class='hr'><h2>Подільська Вежа</h2><br/></Link>
                                        <a class='hr' href="https://www.google.com/maps/place/Podil+Watchtower/@49.5820165,34.5667822,17z/data=!3m1!4b1!4m6!3m5!1s0x40d82f62608aee95:0x9e473e7680bf85ce!8m2!3d49.5820165!4d34.5689709!16s%2Fg%2F1q5bp16kr?hl=en" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
       
                    
                     <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=59" > <img src="images/pol/ae265ec8d02add74bcb0f72e47ec001b_XL.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=59"  class='hr'><h2>Музей Кераміки</h2><br/></Link>
                                          <a class='hr' href="https://www.google.com/maps/place/Opishnya,+Poltava+Oblast,+38164/@49.9634887,34.593709,14z/data=!3m1!4b1!4m6!3m5!1s0x40d7fa8cd5616247:0x454b5b60e55a3912!8m2!3d49.9584184!4d34.6093416!16s%2Fg%2F1216lc43?hl=en" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                
                </tr>              
                
        </table>
    </div>


);
};
export default Pol;