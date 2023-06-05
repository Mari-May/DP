import { Link } from "react-router-dom";



const Lug= () => {
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
                                        <Link to="/sehen=42" > <img src="images/lug/j_KZB.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=42"  class='hr'><h2>Блакитне озеро Волнухинського кар’єру</h2><br/></Link>
                                      <a class='hr' href="https://www.google.com/maps/place/Volnukhyne,+Luhansk+Oblast,+92031/@48.3143137,38.8060238,10.45z/data=!4m6!3m5!1s0x40e02ae69ec1f107:0x9d319ac97a7a9038!8m2!3d48.3486977!4d39.2841138!16s%2Fg%2F12148w0_"> <span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                        <td>
                            <div class='container1'>
                                   <div class='box'>
                                       <div class='imgBox'>              
                                           <Link to="/sehen=43" > <img src="images/fr/400_0_1554367586-1003.jpg" alt="Фотография 1"/></Link> 
                                       </div>
                                       <div class='content'>
                                           <Link to="/sehen=43"   class='hr'><h2>Голубі озера</h2><br/></Link>
                                              <a class='hr' href="https://www.google.com/maps/place/48%C2%B059'28.1%22N+37%C2%B044'04.0%22E/@48.9901708,37.7120284,14.14z/data=!4m4!3m3!8m2!3d48.9911443!4d37.7344322?hl=en"> <span>Де знаходиться</span></a>
                                       </div>
                                   </div>
                               </div>
                           </td>
                    
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=44"> <img src="images/lug/8309a997-70fb-97f1-4c34-58f6375660bb_obj_img_2_c.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=44" class='hr' ><h2>Свято-Христо-Різдвяний кафедральний собор</h2><br/></Link>
                                        <a class='hr' href="https://www.google.com/maps/place/Svyato-Khrysto-Rizdvyanyy+Kafedral%CA%B9nyy+Sobor+Rptsvu/@48.9414777,38.5131258,17z/data=!3m1!4b1!4m6!3m5!1s0x412010851eb23f87:0x1e7e37185f7180b!8m2!3d48.9414777!4d38.5153145!16s%2Fg%2F120xcwqn"> <span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                </tr>              
                
        </table>
    </div>

);
};
export default Lug;