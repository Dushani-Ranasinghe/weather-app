import './App.css';

function App() {
  return (
    <div className="app">
        <div className='container'>
            <div className='top'>
                <div className='location'><p>London</p></div>
                <div className='temp'><h1>19.03 °C</h1></div>
                <div className='description'>Drizzle Rain</div>
            </div>
            <div className='bottom'>
                <div className='feels'>
                <p className='bold'>19.31 °C</p>
                <p>Feels Like</p></div>
                <div className='humidity'> <p className='bold'>89%</p>
                <p>Humidity</p></div>
                <div className='wind'> <p className='bold'>4.63 m/s</p>
                <p>Wind Speed</p> </div>
            </div>
        </div>
    </div>
  );
}

export default App;
