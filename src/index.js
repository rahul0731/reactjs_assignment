import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {SliderContainer} from './component/slidercontainer';
import { VolumeSlider } from './component/VolumeSlider';
import {Slider } from './component/slider'
import { RangeSlider } from './component/rangeSlider'
ReactDOM.render(
  <SliderContainer/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
