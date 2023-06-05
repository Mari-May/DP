import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

const cityOptions = [
  { value: 'Автономна Республіка Крим', path: '/obl=01' },
  { value: 'Вінницька область', path: '/obl=02' },
  { value: 'Волиньска область', path: '/obl=03' },
  { value: 'Дніпропетровська область', path: '/obl=04' },
  { value: 'Донецька область', path: '/obl=05' },
  { value: 'Житомирська область', path: '/obl=06' },
  { value: 'Закарпатська область', path: '/obl=07' },
  { value: 'Запорізька область', path: '/obl=08' },
  { value: 'Івано-Франківська область', path: '/obl=09' },
  { value: 'Київська область', path: '/obl=10' },
  { value: 'Кіровоградська область', path: '/obl=11' },
  { value: 'Луганська область', path: '/obl=12' },
  { value: 'Львівська область', path: '/obl=13' },
  { value: 'Миколаївська область', path: '/obl=14' },
  { value: 'Одеська область', path: '/obl=15' },
  { value: 'Полтавська область', path: '/obl=16' },
  { value: 'Рівненська область', path: '/obl=17' },
  { value: 'Сумська область', path: '/obl=18' },
  { value: 'Тернопільська область', path: '/obl=19' },
  { value: 'Харківська область', path: '/obl=20' },
  { value: 'Херсонська область', path: '/obl=21' },
  { value: 'Хмельницька область', path: '/obl=22' },
  { value: 'Черкаська область', path: '/obl=23' },
  { value: 'Чернівецька область', path: '/obl=24' },
  { value: 'Чернігівська область', path: '/obl=25' }
 
];

const Home = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const navigate = useNavigate();
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      if (selectedCity) {
        const selectedCityPath = cityOptions.find(city => city.value === selectedCity)?.path;
        if (selectedCityPath) {
          navigate(`${selectedCityPath}`);
        }
      }
    };
  
    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
    };
    return (
    <div className="auth1">
      <Navbar />
      <section className="fullskrean">
        <div className="header-down">
          <div className="header-title">Обирай місто для подорожі</div>

          <div className="input">
            <form onSubmit={handleFormSubmit}>
            <input className="l" list="citys"  value={selectedCity} onChange={handleCityChange}/>
              <datalist id="citys">
                {cityOptions.map(city => (
                  <option key={city.value} value={city.value} />
                ))}
              </datalist>
              {/* <datalist id="citys">
              <option value="Автономна Республіка Крим" />
                <option value="Вінницька область" />
                <option value="Волиньска область" />
                <option value="Дніпропетровська область" />
                <option value="Донецька область" />
                <option value="Житомирська область" />
                <option value="Закарпатська область" />
                <option value="Запорізька область" />
                <option value="Івано-Франківська область" />
                <option value="Київська область" />
                <option value="Кіровоградська область" />
                <option value="Луганська область" />
                <option value="Львівська область" />
                <option value="Миколаївська область" />
                <option value="Одеська область" />
                <option value="Полтавська область" />
                <option value="Рівненська область" />
                <option value="Сумська область" />
                <option value="Тернопільська область" />
                <option value="Харківська область" />
                <option value="Херсонська область" />
                <option value="Хмельницька область" />
                <option value="Черкаська область" />
                <option value="Чернівецька область" />
                <option value="Чернігівська область" />
            </datalist> */}
            
        <button type="submi"><i className="found"></i></button>
    </form>
</div>
</div>
</section>
</div>
    );
    };


export default Home;