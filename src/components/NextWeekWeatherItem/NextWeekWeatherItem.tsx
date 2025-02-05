import React from 'react';

import CurrentWeatherItem from '../CurrentWeatherItem/CurrentWeatherItem';
import { NextWeekWeatherItemInterface } from '../../interfaces/interfaces';

import './NextWeekWeatherItem.scss';

interface INextWeekWeatherItemProps {
  data: NextWeekWeatherItemInterface,
}

function NextWeekWeatherItem({ data }: INextWeekWeatherItemProps) {
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const date = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(data.date));

  return (
    <div className="nextweek__card">
      <div className="nextweek__card-title">
        <div className="nextweek__card-item">{date}</div>
        <img className="nextweek__card-img" src={`https://developer.foreca.com/static/images/symbols/${data.symbol}.png`} alt="weather" />
      </div>
      <div className="nextweek__card-content">
        <CurrentWeatherItem name="Max Temp" data={`${data.maxTemp}°C`} />
        <CurrentWeatherItem name="Min Temp" data={`${data.minTemp}°C`} />
        <CurrentWeatherItem name="Max Wind" data={`${data.maxWindSpeed} m/s`} />
        <CurrentWeatherItem name="Precipitation" data={`${data.precipAccum} mm`} />
        <CurrentWeatherItem name="Wind direction" data={`${data.windDir} deg`} />
      </div>
    </div>
  );
}

export default NextWeekWeatherItem;
