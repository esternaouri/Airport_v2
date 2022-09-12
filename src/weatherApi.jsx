import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function WeatherAPI(props) {
  const [items, setItems] = useState("");
  const city=[props.city]

  const getApiData = async (city) => {
    const response = await fetch(
      "https://www.meteosource.com/api/v1/free/point?place_id="+city+"&sections=daily&timezone=UTC&language=en&units=metric&key=tff08aymcwuw6pu8xe9fkrciboxdo9lnu3gj8omx"
    ).then((response) => response.json());

    setItems(response);
  };

  useEffect(() => {
    getApiData(city);
  }, []);

return (
    <ul>
      <br></br>
          <div>{items.lat}</div>
          <br></br>

           <div>{items.lon}</div>
           
           <br></br>
       
     
    </ul>
  );
}
export default WeatherAPI;