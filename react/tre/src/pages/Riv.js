import { Link } from "react-router-dom";



const Riv= () => {
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
                                        <Link to="/sehen=60" > <img src="images/riv/Chervonohorod_chateu_ruins_Far.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=60"  class='hr' ><h2>Джуринський водоспад у руїн Черaвоноградського замку</h2><br/></Link>
                                         <a class='hr' href="https://www.google.com/maps/place/Chervonohorod+Castle/@48.7897557,25.4885334,11.75z/data=!4m10!1m2!2m1!1z0KfQtdGA0LLQvtC90L7Qs9GA0LDQtNGB0YzQutC-0LPQviDQt9Cw0LzQutGD!3m6!1s0x47316accfdf7e157:0x5bada258f7431f36!8m2!3d48.8040736!4d25.5968295!15sCi3Qp9C10YDQstC-0L3QvtCz0YDQsNC00YHRjNC60L7Qs9C-INC30LDQvNC60YNaLyIt0YfQtdGA0LLQvtC90L7Qs9GA0LDQtNGB0YzQutC-0LPQviDQt9Cw0LzQutGDkgEGY2FzdGxlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5MYkhKdGVrNUJFQUXgAQA!16s%2Fg%2F12q4_jqcb" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                    
                    <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=61"> <img src="images/riv/5_tunel-kohannia-v-klevani-5.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                        <Link to="/sehen=61" class='hr'><h2>Тунель Кохання</h2><br/></Link>
                                         <a class='hr' href="https://www.google.com/maps/place/Tunnel+of+Love/@50.7505626,26.041781,17z/data=!3m1!4b1!4m6!3m5!1s0x472f6794eb3359ad:0xd64867ba48ab1f13!8m2!3d50.7505626!4d26.0439697!16s%2Fm%2F011qbyv4" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>

                    
                     <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=62"> <img src="images/riv/d62471d03f99d874d69ff5c009e2e07f.jpeg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                         <Link to="/sehen=62"  class='hr' href="bst.html"><h2>Базальтові стовпи</h2><br/></Link>
                                            <a class='hr' href="https://www.google.com/maps/place/Basalt+Columns/@50.9226478,26.2321375,17z/data=!3m1!4b1!4m6!3m5!1s0x472f5019a5e8d88b:0x469f947353fdf809!8m2!3d50.9226478!4d26.2343262!16s%2Fg%2F1q6fq_mvm?hl=en" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    
                    
                     <td>
                         <div class='container1'>
                                <div class='box'>
                                    <div class='imgBox'>              
                                        <Link to="/sehen=63"> <img src="images/riv/108077790_409349759982592_6957712394770953976_n-1.jpg" alt="Фотография 1"/></Link> 
                                    </div>
                                    <div class='content'>
                                         <Link to="/sehen=63"  class='hr' ><h2>Фосфатні гори</h2><br/></Link>
                                        <a class='hr' href="https://www.google.com/maps/place/Fosfohipsovi+Terykony/@50.7434404,26.183595,17z/data=!3m1!4b1!4m6!3m5!1s0x472f43ed8d72d015:0x9496cd6aa1eb3ba5!8m2!3d50.7434404!4d26.1857837!16s%2Fg%2F11g0w0jv2q?hl=en" ><span>Де знаходиться</span></a>
                                    </div>
                                </div>
                            </div>
                        </td>
  
             </tr>              
                
        </table>
    </div>
    );
};
export default Riv;
