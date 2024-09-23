import { react, useEffect, useState } from "react";

function Wether() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState(null);

  // console.log(search);
  // console.log(city);

  const getWeather = async () => {
    if (!search) return;

    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=afcdd4dd9c872d11db16c1ed2bab2b97&units=metric`
      );
      let result = await response.json();
      setCity(result);
      console.log(response);
      console.log(result);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [search]);

  function removeFun() {
    setSearch("");
  }
  return (
    <>
      <form>
        <div className="input-field">
          <input
            type="text"
            placeholder="enter city..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </div>

        {/* <div className="close-btn">
         
        </div> */}
      </form>
      <div className="close-btn">
        <button
          onClick={removeFun}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>

      <button type="submit" className="btn btn-secondary" onClick={getWeather}>
        search
      </button>

      <div className="container">
        <div className="card text-center  mb-3  mt-5">
          <div className="card-header bg-secondary ">Today's weather</div>
          <div className="card-body">
            <h5 className="card-title">City name: {city?.name} </h5>
            <p className="card-text">temperature: {city?.main?.temp}℃ </p>
            <p className="card-text">wind speed: {city?.wind?.speed} km/h</p>
            <p className="card-text">humidity: {city?.main?.humidity} </p>
          </div>
        </div>
        {/* <div>
          <h2>Cityname: {city?.name}</h2>
        </div>

        <div>
          <h2>temperature: {city?.main?.temp}℃</h2>

          <div></div>
        </div>

        <div>
          <h2>wind speed: {city?.wind?.speed}</h2>
        </div> */}
      </div>
    </>
  );
}

export default Wether;
