import Image from 'next/image';

export default function Weather(props) {
  const icon_url = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`;
  
  return (
    <div>
      <h2>{props.data.name}, {props.data.sys.country}</h2>
      <div style={{textAlign:"left", paddingLeft:65, fontSize: 17}}>
      <p>
        <Image src="/temp.png" alt="Temperature"
                width={23}
                height={23}/> 
        CURRENT {props.data.main.temp} °C </p>           
      
      <p>
        <Image src="/temp.png" alt="Temperature"
                width={23}
                height={23}/>
        FEELS LIKE {props.data.main.feels_like} °C </p>

      <p>
        <Image src="/temp.png" alt="Temperature"
                width={23}
                height={23}/>
        LOW {props.data.main.temp_min} °C </p>

      <p>
        <Image src="/wind.png" alt="Wind"
                  width={23}
                  height={23}/>
        WIND {props.data.wind.speed} m/s </p>
      
      <p>
        <Image src="/humidity.png" alt="Humidity"
                  width={23}
                  height={23}/>
        HUMIDITY {props.data.main.humidity}% </p>
        
      <p>
        <Image src={icon_url} alt="Weather"
                  width={23}
                  height={23}/>
        {props.data.weather[0].main.toUpperCase()}</p>

      <p >
        <Image src={icon_url} alt="Weather" 
                  width={23}
                  height={23}/>
        {props.data.weather[0].description.toUpperCase()}</p>

        </div>
    </div>
  );
}
