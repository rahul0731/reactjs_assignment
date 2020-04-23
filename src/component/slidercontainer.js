import React, { Component }  from 'react';
import PeakSlider from './slider//peakSlider';
import MinSlider from './slider/minSlider';
import BreathSlider from './slider/breathSlider';
import TidalSlider from './slider/tidalSlider';
import SpSlider from './slider/spSlider';

import './slider.css'



export  class SliderContainer extends Component{

	render(){

	
	
		return (
			<div className="templete" >


				
				<h1 class="header"> PCV-AC</h1>
				<div className="card">
				<div className ="peak" > 
						<h3>Ppeak</h3>
						<PeakSlider/>
				</div>
				<div className ="minute"> 
						<h3>Minute V</h3>
						<MinSlider/>
				</div>
				<div className ="breath"> 
						<h3>Breath R</h3>
						<BreathSlider/>
				</div>
				<div className ="tidal"> 
						<h3>Tidal Vol</h3>
						<TidalSlider/>
				</div>
				<div className ="spo"> 
						<h3>SpO2</h3>
						<SpSlider/>
				</div>
			</div>
			<div className = "button">
			<button className="btn">Confirm</button>
			<button className="btn">Cancle</button>
			</div>
		</div>

			)
	}
}
