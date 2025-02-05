import React from 'react';

import TodaysWeatherItem from '../TodaysWeatherItem/TodaysWeatherItem';
import NextWeekWeatherItem from '../NextWeekWeatherItem/NextWeekWeatherItem';
import CurrentWeatherItem from '../CurrentWeatherItem/CurrentWeatherItem';
import {
  CurrentWeatherinterface,
  LocationInfoInterface,
  NextWeekWeatherItemInterface,
  TodaysWeatherItemInterface,
} from '../../interfaces/interfaces';

import './SelectedCityInfo.scss';

interface ISelectedCityInfoProps {
  locationInfo: LocationInfoInterface;
  currentWeather: CurrentWeatherinterface;
  todaysWeather: TodaysWeatherItemInterface[];
  nextWeekWeather: NextWeekWeatherItemInterface[];
}

function SelectedCityInfo({ locationInfo, currentWeather, todaysWeather, nextWeekWeather }: ISelectedCityInfoProps) {
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const date = new Intl.DateTimeFormat('en-US', dateOptions).format(currentWeather.time);

  return (
    <div className="city">
      <div className="city__title">{`${locationInfo.name}, ${locationInfo.country}`}</div>
      <div className="city__date">{date}</div>

      <div className="city__current">
        <div className="city__current-weather">
          <img className="city__current-img" src={`https://developer.foreca.com/static/images/symbols/${currentWeather.symbol}.png`} alt="weather" />
          <div className="city__current-temperature">
            <div className="city__current-temperature-item">{currentWeather.temperature}</div>
            <div className="city__current-temperature-description">{currentWeather.symbolPhrase}</div>
          </div>
        </div>
        <div className="city__current-info">
          <CurrentWeatherItem name="Wind speed" data={`${currentWeather.windSpeed} mph`} />
          <CurrentWeatherItem name="Cloudiness" data={`${currentWeather.cloudiness}%`} />
          <CurrentWeatherItem name="Pressure" data={`${Math.round(currentWeather.pressure)} hPa`} />
          <CurrentWeatherItem name="Visibility" data={`${currentWeather.visibility} m`} />
          <CurrentWeatherItem name="Humidity" data={`${currentWeather.relHumidity}%`} />
          <CurrentWeatherItem name="Wind gust" data={`${currentWeather.windGust} m/s`} />
        </div>
      </div>

      <div className="city__header">Weather for the next 24 hours:</div>
      <div className="city__todays">
        {todaysWeather.map((item) => <TodaysWeatherItem data={item} key={String(item.time)} />)}
      </div>
      <div className="city__header">Weather for the next 7 days:</div>
      <div className="city__nextweek">
        {nextWeekWeather.map((item) => <NextWeekWeatherItem data={item} key={item.date} />)}
      </div>
    </div>
  );
}

export default SelectedCityInfo;
