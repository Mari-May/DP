import {Link } from "react-router-dom";
const City = () =>{
return(

<div class="wrapper">  
     <div class='header1' >

                <div class='container'>
                    <div class='header-line'>

                        <div class='header-logo'>
                            <Link to="/"> <img src="images/logo-50.png"/></Link>
                        </div>

                        <div class='nav'>
                            <div>
                            <Link to="/" class='nav-item' >ГОЛОВНА</Link>
                            <Link to="/City" class='nav-item'>МІСТА</Link>
                            </div>
                        </div>

                    </div> 
                </div>

            <div class='name-ct'>
            <div class='ct'>

                <table class="cty" border="0" width="70%"  >
            <tr>
                <td><Link to="/obl=01" class='ct-item' >Автономна Республіка Крим</Link></td>
                <td><Link to="/obl=14" class='ct-item' >Миколаївська область</Link> </td>
            </tr>
            <tr>
                <td><Link to="/obl=02"  class='ct-item'>Вінницька область</Link></td>
                <td><Link to="/obl=15" class='ct-item' >Одеська область</Link> </td>
            </tr>
            <tr>
                <td><Link to="/obl=03" class='ct-item'>Волиньска область</Link> </td>
                <td><Link to="/obl=16" class='ct-item' >Полтавська область</Link></td>
            </tr>
            <tr>
                <td><Link to="/obl=04" class='ct-item'>Дніпропетровська область</Link></td>
                <td><Link to="/obl=17"class='ct-item' >Рівненська область</Link></td>
            </tr>
            <td><Link to="/obl=05" class='ct-item'>Донецька область</Link></td>
            <td><Link to="/obl=18" class='ct-item' >Сумська область</Link></td>
        
            <tr>
                <td> <Link to="/obl=06" class='ct-item'>Житомирська область</Link> </td>
                <td><Link to="/obl=19"class='ct-item' >Тернопільська область</Link> </td>
            </tr>
            <td><Link to="/obl=07"  class='ct-item'>Закарпатська область</Link> </td>
            <td><Link to="/obl=20" class='ct-item' >Харківська область</Link></td>

            <tr>
                <td><Link to="/obl=08" class='ct-item' >Запорізька область</Link> </td>
                <td><Link to="/obl=21"class='ct-item'>Херсонська область</Link></td>
            </tr>
            <td><Link to="/obl=09"class='ct-item' >Івано-Франківська область</Link> </td>
            <td><Link to="/obl=22" class='ct-item' >Хмельницька область</Link></td>

            <tr>
                <td><Link to="/obl=10" class='ct-item'>Київська область</Link> </td>
                <td><Link to="/obl=23" class='ct-item' >Черкаська область</Link> </td>
            </tr>
            <td> <Link to="/obl=11" class='ct-item' >Кіровоградська область</Link> </td>
            <td><Link to="/obl=24" class='ct-item' >Чернівецька область</Link> </td>
            <tr>
                <td> <Link to="/obl=12" class='ct-item'>Луганська область</Link>  </td>
                <td> <Link to="/obl=25" class='ct-item' >Чернігівська область</Link></td>
            </tr>
            <td><Link to="/obl=13" class='ct-item' >Львівська область</Link> </td>
            </table>
            </div>

        </div>   

    </div>
    </div>  

);
};
export default City;