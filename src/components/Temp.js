// import React, { useState, useEffect } from "react";
// import Weathercard from "../Weathercard";
// import "./css/style.css";

// const Temp = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [tempInfo, setTempInfo] = useState({});

//   const getWeatherInfo = async () => {
//     try {
//       let url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}`;
//       //let url = `https://api.openweathermap.org/data/2.5/weather?lat=${searchValue}&lon={lon}&appid={API key}`;

//       let res = await fetch(url);
//       let data = await res.json();

//       const { temp, humidity, pressure } = data.main;
//       const { main: weathermood } = data.weather[0];
//       const { name } = data;
//       const { speed } = data.wind;
//       const { country, sunset } = data.sys;

//       const myNewWeatherInfo = {
//         temp,
//         humidity,
//         pressure,
//         weathermood,
//         name,
//         speed,
//         country,
//         sunset,
//       };

//       setTempInfo(myNewWeatherInfo);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getWeatherInfo();
//     console.log(getWeatherInfo);
//   }, []);

//   return (
//     <>
//       <div className="wrap">
//         <div className="search">
//           <input
//             type="search"
//             placeholder="search..."
//             autoFocus
//             id="search"
//             className="searchTerm"
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//           />

//           <button
//             className="searchButton"
//             type="button"
//             onClick={getWeatherInfo}
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       {/* our temp card  */}
//       <Weathercard {...tempInfo} />
//     </>
//   );
// };

// export default Temp;

import React, { useState, useEffect } from "react";
import Weathercard from "../Weathercard";
import "./css/style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("");
  const [tempInfo, setTempInfo] = useState({});

  // Mock weather data
  const mockWeatherData = {
    temp: 25,
    humidity: 60,
    pressure: 1012,
    weathermood: "Clear",
    name: "Ahmedabad, Gujarat",
    speed: 5,
    country: "India",
    sunset: 1620000000,
  };

  const getWeatherInfo = async () => {
    // Simulating an API call
    // Here, you can replace this with a real fetch if needed
    setTempInfo(mockWeatherData);
  };

  useEffect(() => {
    getWeatherInfo(); // Call mock data initially
  }, []);

  const handleSearch = () => {
    // Simulate fetching new data based on searchValue
    if (searchValue) {
      setTempInfo(mockWeatherData); // Use the same mock data
    }
  };

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button className="searchButton" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* Temp card */}
      <Weathercard {...tempInfo} />
    </>
  );
};

export default Temp;
