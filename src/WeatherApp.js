import React from 'react'

const WeatherApp = () => {
  return (
        <div className='container'>
            <div className='top'>
                <div className='location'><p>London</p></div>
                <div className='temp'><h1>19.03 °C</h1></div>
                <div className='description'>Drizzle Rain</div>
            </div>
            <div className='bottom'>
                <div className='feels'>19.31 °C</div>
                <div className='humidity'>89%</div>
                <div className='wind '> 4.63 m/s</div>
            </div>
        </div>
  )
}

export default WeatherApp