import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import React, { Component } from 'react';
const sliderStyle = {  //give the slider some width
    position: 'relative',
    height: '8rem',
    width: '2rem',
    marginLeft :'8rem'
  }
  
  
  const railStyle = {
    position: 'absolute',
    width: '25%',
    height: '9.2rem',
    marginTop: 35,
    
    backgroundColor: '#ADACAC'
  }
  
  
  export function Handle({
    handle: { id, value, percent },
    getHandleProps
  }) {
    return (
      <div
        style={{
          top: `${percent}%`,
          position: 'absolute',
          marginLeft: -9,
          marginTop: 37,
          zIndex: 2,
          width: '1.7rem',
          height: 3,
          border: 0,
          textAlign: 'center',
          cursor: 'pointer',
          // borderRadius: '50%',
          backgroundColor: '#CE2C00',
          color: '#333',
        }}
        {...getHandleProps(id)}
      >
        <div className="value">
          {value}
        </div>
      </div>
    )
  }
  
  
  function Track({ source, target, getTrackProps }) {
    return (
      <div
        style={{
          
          position: 'absolute',
          marginTop: 35.8,
          marginLeft:3.8,
          zIndex: 1,
          backgroundColor: '#009909',
          // borderRadius: 5,
          cursor: 'pointer',
          width: 6.5,
          transform: 'translate(-50%, 0%)',
          top: `${source.percent}%`,
          height: `${target.percent - source.percent}%`,
        }}
        {...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */}
      />
    )
  }
  
  

// function Tick({ tick, count }) {
//   return (
//     <div>
//       <div
//         style={{
//           position: 'absolute',
//           marginTop: 52,
//           marginLeft: -0.5,
//           width: 1,
//           height: 8,
//           backgroundColor: 'silver',
//           left: `${tick.percent}%`,
//         }}
//       />
//       <div
//         style={{
//           position: 'absolute',
//           marginTop: 60,
//           fontSize: 10,
//           textAlign: 'center',
//           marginLeft: `${-(100 / count) / 2}%`,
//           width: `${100 / count}%`,
//           left: `${tick.percent}%`,
//         }}
//       >
//         {tick.value}
//       </div>
//     </div>
//   )
// }



export default class RangeSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      volume: 0
    }
  }


  
render(){
  return( <Slider
  vertical = {true}
    rootStyle={sliderStyle}
    domain={[75, 105]}
    step={1}
    mode={2}
    reversed
    values={[80, 99]}
  >
    <Rail>
      {({ getRailProps }) => (
        <div style={railStyle} {...getRailProps()} />
      )}
    </Rail>
    <Handles>
      {({ handles, getHandleProps }) => (
        <div className="slider-handles">
          {handles.map(handle => (
            <Handle
              key={handle.id}
              handle={handle}
              getHandleProps={getHandleProps}
            />
          ))}
        </div>
      )}
    </Handles>
    <Tracks left={false} right={false}>
      {({ tracks, getTrackProps }) => (
        <div className="slider-tracks">
          {tracks.map(({ id, source, target }) => (
            <Track
              key={id}
              source={source}
              target={target}
              getTrackProps={getTrackProps}
            />
          ))}
        </div>
      )}
    </Tracks>
   
  </Slider>)
}

}