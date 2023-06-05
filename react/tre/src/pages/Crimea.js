import { Link } from "react-router-dom";



const Crimea= () => {
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
                                    <Link to="/sehen=01"> <img src="images/crimea/Chersonesus_Sevastopol.jpg" alt="Фотография 1"/></Link> 
                                </div>
                                <div class='content'>
                                    <Link to="/sehen=01" class='hr'><h2>Херсонес Таврійський</h2><br/></Link>
                                    <a class='hr' href="https://goo.gl/maps/KMZkf7wJhvzY7RtCA"><span>Де знаходиться</span></a>
                                </div>
                            </div>
                        </div>
                    </td>   
                    
                    <td> 
                        <div class='container1'>
                            <div class='box'>
                                <div class='imgBox'>              
                                    <Link to="/sehen=02"> <img src="images/crimea/075136987.jpg" alt="Фотография 2"/></Link> 
                                </div>
                                <div class='content'>
                                <Link to="/sehen=02" class='hr'><h2>Воронцовський палац</h2><br/></Link>
                                    <a class='hr' href="https://www.google.com/maps/place/Vorontsov+Palace/@46.4903363,30.7363052,17z/data=!4m6!3m5!1s0x40c631c664c34021:0x94ce8bdbdfc1ccc8!8m2!3d46.490185!4d30.7387675!16s%2Fm%2F0bxywlr" ><span>Де знаходиться</span></a>
                                </div>
                            </div>
                        </div>
                    </td>
                        
                    <td> 
                        <div class='container1'>
                            <div class='box'>
                                <div class='imgBox'>              
                                <Link to="/sehen=03"> <img src="images/crimea/maxresdefault.jpg" alt="Фотография 3"/></Link> 
                                </div>
                                <div class='content'>
                                    <Link to="/sehen=03"  class='hr' ><h2>Ластівчине гніздо</h2><br/></Link>
                                    <a class='hr' href="https://www.google.com/maps/place/Swallow's+Nest/@44.4304342,34.126263,17z/data=!3m1!4b1!4m6!3m5!1s0x4094c78678024639:0xab730c5afd6ab04e!8m2!3d44.4304742!4d34.1283835!16zL20vMGgwMjJf?hl=en"> <span>Де знаходиться</span></a>
                                </div>
                            </div>
                        </div>
                    </td>               
                    
                     <td> 
                        <div class='container1'>
                            <div class='box'>
                                <div class='imgBox'>              
                                    <Link to="/sehen=04" > <img src="images/crimea/94f4bfab7fee3d1892c4e2d090d87f73.jpg" alt="Фотография 4"/></Link> 
                                </div>
                                <div class='content'>
                                    <Link to="/sehen=04"   class='hr' ><h2>Лівадійський палац</h2><br/></Link>
                                    <a class='hr'href='https://www.google.com/maps/place/Livadia+Palace/@44.4676867,34.1413443,17z/data=!3m1!4b1!4m6!3m5!1s0x4094c87204aefc81:0x8f9dc462c215962d!8m2!3d44.4676867!4d34.143533!16zL20vMDcxcDd2?hl=en'><span>Де знаходиться</span></a>
                                </div>
                            </div>
                        </div>
                    </td>  
                        
                        
                    
                </tr>
            </table>
        </div>
    );
};
export default Crimea;