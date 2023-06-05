import "../1.js"
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import moment from "moment";


const Chersones = () => {
  const [comment, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { currentUser } = useContext(AuthContext);

const idsehen = (useLocation().pathname).split('=')[1];
console.log(idsehen);

useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${idsehen}`);
        setComments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[idsehen]);

  // useEffect(() => {
  //   const getComments = async () => {
  //     try {
  //       const values = {
  //         idsehen: "01"
  //       }
        
  //       const res = await axios.get(`/posts/post`);
  //       setComments(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getComments();
  // });

  

  const addComment = async () => {
    const loginTest = JSON.parse(localStorage.getItem("user")).login

    const values = {
      idsehen: "01",
      text: newComment,
      da: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      login: loginTest,
    }
    try {
      await axios.post(`/posts/post`, values);
      setNewComment('');
      
    } catch (error) {
      console.log("test");
    }


  };

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addComment();
  };


  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${idsehen}`);
    } catch (err) {
      console.log(err);
    }
  }

  

    return(
<div class="header3">
        <div class="slide-first"></div>
        <div class="slide-second"></div>
        <div className="container">
        <div className="header-line">
          <div className="header-logo">
            <Link to="/"> <img src="images/logo-50.png"/></Link>
          </div>
          <div className="nav">
            <div>
            <Link to="/" className='nav-item'>ГОЛОВНА</Link>
            <Link to="/City"className="nav-item" >
              МІСТА
            </Link>
            </div>
          </div>
        </div>

        <div id ="slider">
        <div id = "polosa">
                
                <img src="images/crimea/Hersones_Tavricheskij.jpg"/>
                <img src="images/crimea/Chersonesus_Sevastopol.jpg"/>
                <img src="images/crimea/krym.hersones-tavricheskiy-puteshestviya-so-smyslom-maxsolis.ru__0.jpg"/>
        </div>      
        </div>

        <div class="inf">
        
        <a><p>Історія Херсонеса є частиною історії Давньої Греції, Давнього Риму, Візантії, Київської Русі. Адже саме тут, у Херсонесі, згідно з літописними даними, відбулося велике Таїнство – Хрещення Київського князя Володимира, який потім поширив християнство на всю Київську Русь…</p>

        <p>Херсонес Таврійський – таку назву носило місто, засноване давньогрецькими колоністами понад дві з половиною тисячі років тому на південному заході Кримського півострова.</p>

        <p>Слово „Херсонес” зазвичай перекладають з грецької як „півострів”. Місто дійсно було розташоване на невеличкому півострові поміж двох бухт. Таври – войовниче плем’я, що заселяло сусідні гористі місцевості, – спричинили народження епітету „Таврійський”, тобто „розташований на території таврів”.</p>

        <p>Територія сучасного заповідника охоплює межі стародавнього грецького міста – Херсонеса Таврійського, що виникло тут, на узбережжі Чорного моря, у V ст. до н.е. Місто було огороджене могутніми оборонними стінами і розплановане за схемою, поширеною тоді у грецькому та римському світах. До наших днів збереглося багато давніх споруд. Серед них – елліністичний театр, римська цитадель, середньовічні християнські храми, житлові квартали, вулиці, гончарні майстерні, обладнання для засолювання риби, колодязі тощо.</p>

        <p>У кінці XIV ст. навала кочівників поклала кінець існуванню міста, а його руїни поховала земля. Лише у 1827 р. тут розпочалися розкопки, які майже відразу принесли Херсонесу ще одну назву – „Руська Троя”. Масштаб досліджень та велика кількість археологічних пам’яток, що потребують збереження, спонукали до створення Національного заповідника „Херсонес Таврійський”.</p>

        <p>Територія Херсонеса досліджується археологами уже 180 років. За цей час відкрито понад третину міста. Серед археологічних знахідок є унікальні – присяга громадян Херсонеса ІІІ ст. до н.е., декрети, фрески, мозаїки, шиферні ікони християнських храмів, написи-присвяти, численні побутові предмети. Загалом музейні зібрання заповідника нараховують понад 200 тисяч експонатів.</p>

        <p>Згідно з літописом „Повість временних літ”, у 988 р. Київський князь Володимир, здійснивши напад на Херсонес, примусив Візантію видати за нього заміж царівну Анну, а потім хрестився та вінчався з нею. При цьому охрестилась і дружина (військо) князя. Після цього князь Володимир з Анною, дружиною і грецьким духовенством прибув до Києва, де того ж 988 р. відбулося славнозвісне хрещення киян у річці Дніпро.</p>
        
        <p>На місці руїн хрещальні князя Володимира у 1861 р. було закладено собор в ім’я Хрестителя Русі. Нині Володимирський собор у Херсонесі реконструйований та є символом Хрещення Русі.</p>

        <p>Сьогодні Ви зможете провести у заповіднику цілий день, розглядаючи численні експонати або просто насолоджуючись прогулянкою по території стародавнього городища. Можна здійснити й віртуальну екскурсію, скориставшись картою, на якій позначені розкопані ділянки міської території. А ті, хто особисто бажає взяти участь у розкопках, можуть зробити це, попередньо домовившись з адміністрацією.</p></a>
                        
        </div>    



        <div class="map">
        <iframe type="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.2480654531746!2d33.48804441552912!3d44.61240277910019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40953b47b4ef35dd%3A0x12380ab8eb1a910!2sNational%20Preserve%20of%20Tauric%20Chersonesos!5e0!3m2!1sen!2sua!4v1678891245363!5m2!1sen!2sua" width="100%" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="form-item__textarea">
          <textarea id="form-content"
          type="text"
          placeholder="Коментувати..."
          spellCheck="false"
          value={newComment}
          onChange={handleInputChange}/>
        </div>

        <div className="button_comm">
          <button type="comm" onClick={handleSubmit}>Надіслати</button>
        </div>
  
        {comment.map(comm => (
            <div className="info">
            {/* <span>{comm.login}</span> */}
            <h1>{comm.login}</h1>
            <img onClick={handleDelete} src={Delete} alt="" />  <img src={Edit} alt="" />
            <p>{comm.text}</p>
            <p>Опубліковано {moment(comm.da).fromNow()}</p>
          </div>
        ))}
{/* 
           {currentUser.login === comment.login && (
            <div className="edit">
                <img src={Edit} alt="" />
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        */}
    
        {/* {currentUser.login === comm.login && (
              <div className="edit">
                  <img src={Edit} alt="" />
                <img onClick={handleDelete} src={Delete} alt="" />
              </div>
            )}
         */}
      
     

{/* 

        {currentUser.login === comment.login && (
            <div className="edit">
                <img src={Edit} alt="" />
                <img onClick={handleDelete} src={Delete} alt="" />

        </div>)}
         */}
         
            {/* <div className="info">
            <span>{currentUser.login}</span>
            <p>Posted {moment(currentUser.date).fromNow()}</p>
          </div>
          {currentUser.login === currentUser.login && (
            <div className="edit">
                <img src={Edit} alt="" />
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )} */}
        </div>




    </div>
    //</div>
    


    );
};

export default Chersones;