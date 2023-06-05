import { Link } from "react-router-dom";



const Lviv= () => {
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
                        <Link to="/sehen=45"> <img src="images/6044ee.jpg" alt="Фотография 1"/></Link> 
                    </div>
                    <div class='content'>
                        <Link to="/sehen=45"  class='hr' ><h2>Італійський дворик</h2><br/></Link>
                       <a class='hr' href="https://www.google.com/maps/place/Italian+Courtyard/@49.8423151,24.0308385,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6cfe330bab:0x73a56de803231767!8m2!3d49.8423151!4d24.0330272!16s%2Fg%2F11b5wfmkv9" ><span>Де знаходиться</span></a>
                    </div>
                </div>
            </div>
                    </td>
                
            
            
            <td>
             <div class='container1'>
                <div class='box'>
                    <div class='imgBox'>              
                        <Link to="/sehen=46"> <img src="images/604a.jpg" alt="Фотография 2"/></Link> 
                    </div>
                    <div class='content'>
                        <Link to="/sehen=46" class='hr'><h2>Костел Святого Андрія</h2><br/></Link>
                       <a class='hr' href="https://www.google.com/maps/place/Bernardine+monastery/@49.8395602,24.0322857,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6c1cf1bd15:0xf98d031cfb204a67!8m2!3d49.8395568!4d24.0344797!16s%2Fm%2F03c60hc" ><span>Де знаходиться</span></a>
                    </div>
                </div>
            </div>
            </td>
              
                    
                    
          
                    
              <td>
             <div class='container1'>
                <div class='box'>
                    <div class='imgBox'>              
                        <Link to="/sehen=47"> <img src="images/64522802.jpg" alt="Фотография 2"/></Link> 
                    </div>
                    <div class='content'>
                        <Link to="/sehen=47" class='hr' ><h2>Музей сакральної барокової скульптури Йогана Георга Пензеля</h2><br/></Link>
                        <a class='hr' href="https://www.google.com/maps/place/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9+%C2%AB%D0%86%D0%B2%D0%B0%D0%BD%D0%B0+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D1%8F+%D0%9F%D1%96%D0%BD%D0%B7%D0%B5%D0%BB%D1%8F%C2%BB/@49.8396085,24.0345508,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6bea6f5445:0x70e0afbe43d8e058!8m2!3d49.8396085!4d24.0367395!16s%2Fg%2F1230vf01 " ><span>Де знаходиться</span></a>
                    </div>
                </div>
            </div>
            </td> 
                    
            <td>
            <div class='container1'>
                <div class='box'>
                    <div class='imgBox'>              
                        <Link to="/sehen=48"> <img src="images/degustation-area-in-lvivarnya.jpg" alt="Фотография 1"/></Link> 
                    </div>
                    <div class='content'>
                        <div class='it'><Link to="/sehen=48"class='hr'><h2>Львівярня</h2><br/></Link></div>
                            <a class='hr' href="https://www.google.com/maps/place/Muzeyno-Kul%CA%B9turnyy+Kompleks+Pyvnoyi+Istoriyi+-+L%CA%B9vivarnya/@49.847571,24.0134465,17z/data=!3m1!4b1!4m6!3m5!1s0x473add9fe362a8ab:0x234e560980b647cb!8m2!3d49.8475676!4d24.0156405!16s%2Fg%2F11jgf7zs3?hl=en" ><span>Де знаходиться</span></a>
                    </div>
                </div>
            </div>
            </td>  
            </tr>
            </table>
        </div>



    );
};
export default Lviv;