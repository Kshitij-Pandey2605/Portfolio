import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Wind, Droplets, Eye, Thermometer, MapPin, RefreshCw, Sun, Cloud, CloudRain, CloudSnow, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'demo';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const THEMES = {
  clear: {
    bg: 'from-orange-500/10 via-amber-500/5 to-transparent',
    accent: 'text-amber-400',
    glow: 'bg-amber-400/20',
    msg: 'Stay hydrated and enjoy the sun!'
  },
  clouds: {
    bg: 'from-blue-400/10 via-slate-400/5 to-transparent',
    accent: 'text-blue-300',
    glow: 'bg-blue-300/20',
    msg: 'Perfect weather for a cozy walk.'
  },
  rain: {
    bg: 'from-blue-900/20 via-indigo-900/10 to-transparent',
    accent: 'text-accent-cyan',
    glow: 'bg-accent-cyan/20',
    msg: 'Don\'t forget your umbrella today!'
  },
  snow: {
    bg: 'from-cyan-100/10 via-white/5 to-transparent',
    accent: 'text-white',
    glow: 'bg-white/20',
    msg: 'Beautiful snow! Stay warm outside.'
  },
  thunderstorm: {
    bg: 'from-purple-900/20 via-fuchsia-900/10 to-transparent',
    accent: 'text-accent-pink',
    glow: 'bg-accent-pink/20',
    msg: 'Stay safe and dry indoors.'
  },
  default: {
    bg: 'from-gray-500/10 via-transparent to-transparent',
    accent: 'text-accent-cyan',
    glow: 'bg-accent-cyan/20',
    msg: 'Checking the horizon for you...'
  }
};

const getWeatherTheme = (condition) => {
  const c = condition?.toLowerCase() || '';
  if (c.includes('clear')) return THEMES.clear;
  if (c.includes('cloud')) return THEMES.clouds;
  if (c.includes('rain') || c.includes('drizzle')) return THEMES.rain;
  if (c.includes('snow')) return THEMES.snow;
  if (c.includes('thunder') || c.includes('storm')) return THEMES.thunderstorm;
  return THEMES.default;
};

const getWeatherIcon = (condition, size = 48) => {
  const c = condition?.toLowerCase() || '';
  if (c.includes('rain') || c.includes('drizzle')) return <CloudRain size={size} className="text-accent-cyan" />;
  if (c.includes('snow')) return <CloudSnow size={size} className="text-white" />;
  if (c.includes('thunder') || c.includes('storm')) return <Zap size={size} className="text-accent-pink" />;
  if (c.includes('cloud')) return <Cloud size={size} className="text-blue-300" />;
  return <Sun size={size} className="text-amber-400" />;
};

const DEMO_DATA = {
  name: 'Gandhinagar', country: 'IN',
  temp: 32, feels_like: 35, humidity: 60, wind_speed: 12,
  visibility: 10, condition: 'Clear', description: 'clear sky',
  forecast: [
    { day: 'Mon', high: 33, low: 26, cond: 'Clear' },
    { day: 'Tue', high: 31, low: 25, cond: 'Clouds' },
    { day: 'Wed', high: 28, low: 23, cond: 'Rain' },
    { day: 'Thu', high: 30, low: 24, cond: 'Clear' },
    { day: 'Fri', high: 32, low: 26, cond: 'Clouds' },
  ]
};

const WeatherApp = ({ theme, toggleTheme }) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('C');
  const [isDemo, setIsDemo] = useState(false);

  const currentTheme = getWeatherTheme(weather?.condition);

  const convertTemp = (t) => unit === 'C' ? Math.round(t) : Math.round(t * 9 / 5 + 32);
  const unitLabel = unit === 'C' ? '°C' : '°F';

  const fetchWeather = useCallback(async (searchCity) => {
    if (!searchCity.trim()) return;
    if (API_KEY === 'demo' || API_KEY.includes('your_')) {
      setIsDemo(true);
      setWeather(DEMO_DATA);
      setForecast(DEMO_DATA.forecast);
      setHourlyForecast(DEMO_DATA.forecast.map(d => ({ ...d, time: '12:00', temp: d.high, pressure: 1012, wind: 5 })));
      setError('');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const [cur, fore] = await Promise.all([
        fetch(`${BASE_URL}/weather?q=${searchCity}&appid=${API_KEY}&units=metric`),
        fetch(`${BASE_URL}/forecast?q=${searchCity}&appid=${API_KEY}&units=metric&cnt=40`)
      ]);
      if (!cur.ok) throw new Error('City not found');
      const curData = await cur.json();
      const foreData = await fore.json();

      setWeather({
        name: curData.name,
        country: curData.sys.country,
        temp: curData.main.temp,
        feels_like: curData.main.feels_like,
        humidity: curData.main.humidity,
        pressure: curData.main.pressure,
        wind_speed: curData.wind.speed,
        visibility: (curData.visibility / 1000).toFixed(1),
        condition: curData.weather[0].main,
        description: curData.weather[0].description
      });

      // Detailed hourly/3-hourly forecast
      setHourlyForecast(foreData.list.slice(0, 10).map(item => ({
        time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        temp: item.main.temp,
        cond: item.weather[0].main,
        pressure: item.main.pressure,
        wind: item.wind.speed,
        humidity: item.main.humidity
      })));

      // Group forecast by day
      const days = {};
      const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      foreData.list.forEach(item => {
        const d = new Date(item.dt * 1000);
        const key = dayNames[d.getDay()];
        if (!days[key]) days[key] = { day: key, highs: [], lows: [], cond: item.weather[0].main };
        days[key].highs.push(item.main.temp_max);
        days[key].lows.push(item.main.temp_min);
      });

      setForecast(Object.values(days).slice(0, 5).map(d => ({
        day: d.day,
        high: Math.round(Math.max(...d.highs)),
        low: Math.round(Math.min(...d.lows)),
        cond: d.cond
      })));
      setIsDemo(false);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const handleGeolocate = () => {
    if (!navigator.geolocation) { setError('Geolocation not supported'); return; }
    if (API_KEY === 'demo' || API_KEY.includes('your_')) { setIsDemo(true); setWeather(DEMO_DATA); setForecast(DEMO_DATA.forecast); return; }
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`);
        const data = await res.json();
        setCity(data.name);
        fetchWeather(data.name);
      } catch { setError('Could not get location'); setLoading(false); }
    });
  };

  useEffect(() => { fetchWeather('Gandhinagar'); }, [fetchWeather]);

  return (
    <PageWrapper theme={theme} toggleTheme={toggleTheme}>
      <div className="relative min-h-screen overflow-hidden bg-[#020205]">
        {/* Dynamic Background Overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={weather?.condition || 'default'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 bg-gradient-to-br ${currentTheme.bg} transition-colors duration-1000 pointer-events-none`}
          />
        </AnimatePresence>

        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto px-4 py-8 max-w-5xl relative z-10 font-outfit">
          {/* Back button */}
          <Link to="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-all hover:gap-4 interactive text-xs font-black uppercase tracking-widest bg-white/5 px-5 py-2.5 rounded-full border border-white/5 backdrop-blur-md">
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          {/* Header */}
          <div className="grid md:grid-cols-[1fr_auto] items-end mb-12 gap-6">
            <div className="text-left">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-accent-cyan/20 bg-accent-cyan/5">
                   <Zap className="text-accent-cyan" size={24} />
                </div>
                <div>
                   <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Weather <span className="text-accent-cyan underline decoration-white/10 underline-offset-8">Terminal</span></h1>
                   <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mt-1">Status: Active // Data: Real-time</p>
                </div>
              </motion.div>
            </div>
            
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-cyan transition-colors" size={16} />
                <input
                  type="text"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  placeholder="Query Location..."
                  className="w-48 sm:w-64 pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-accent-cyan transition-all"
                />
              </div>
              <button type="button" onClick={handleGeolocate}
                className="p-3 bg-white/5 border border-white/10 text-gray-400 hover:text-accent-cyan rounded-xl transition-all" title="GPS Search">
                <MapPin size={18} />
              </button>
            </form>
          </div>

          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="px-6 py-4 bg-accent-pink/5 border border-accent-pink/20 rounded-2xl text-accent-pink text-xs font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-pink animate-pulse" />
              SYSTEM_ERROR: {error.toUpperCase()}
            </motion.div>
          )}

          {weather && (
            <AnimatePresence>
              <div className="grid lg:grid-cols-[1fr_320px] gap-6">
                <div className="space-y-6">
                  {/* Main card */}
                  <motion.div key={weather.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
                    className="glass rounded-[3rem] p-8 md:p-12 border border-white/5 bg-[#050505]/60 relative overflow-hidden group">
                    <div className={`absolute top-0 right-0 w-80 h-80 ${currentTheme.glow} blur-[120px] rounded-full pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-1000`} />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                      <div>
                        <div className="flex items-center gap-3 text-gray-500 font-mono text-[10px] uppercase tracking-widest mb-6">
                          <code className="bg-white/5 px-2 py-1 rounded text-accent-pink">{weather.name.toUpperCase()}</code> 
                          <span>INST_04</span>
                        </div>
                        <div className="flex items-start gap-4 mb-4">
                          <span className="text-8xl md:text-[9rem] font-black text-white leading-none tracking-tighter drop-shadow-2xl font-outfit">{convertTemp(weather.temp)}</span>
                          <div className="flex flex-col gap-2 mt-4">
                            <button onClick={() => setUnit('C')} className={`text-2xl font-black ${unit === 'C' ? 'text-accent-cyan' : 'text-gray-700 hover:text-gray-400'}`}>°C</button>
                            <button onClick={() => setUnit('F')} className={`text-2xl font-black ${unit === 'F' ? 'text-accent-cyan' : 'text-gray-700 hover:text-gray-400'}`}>°F</button>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className={`text-3xl font-black capitalize ${currentTheme.accent}`}>{weather.description}</p>
                          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em]">{currentTheme.msg}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-[2.5rem] border border-white/5 backdrop-blur-sm">
                        {getWeatherIcon(weather.condition, 140)}
                      </div>
                    </div>

                    {/* Stats Dash */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-white/5 relative z-10">
                      {[
                        { icon: <Droplets size={18} className="text-accent-cyan" />, label: 'HUMID', val: `${weather.humidity}%` },
                        { icon: <Wind size={18} className="text-accent-purple" />, label: 'WIND', val: `${weather.wind_speed} m/s` },
                        { icon: <Thermometer size={18} className="text-amber-400" />, label: 'PRESS', val: `${weather.pressure} hPa` },
                        { icon: <Eye size={18} className="text-accent-pink" />, label: 'VISIB', val: `${weather.visibility} km` },
                      ].map((stat, i) => (
                        <div key={i} className="flex flex-col gap-1 p-5 rounded-2xl bg-white/5 border border-transparent hover:border-white/5 transition-all">
                          <div className="flex items-center gap-2 mb-2">{stat.icon} <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{stat.label}</span></div>
                          <div className="text-xl font-black text-white font-mono">{stat.val}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Hourly detailed forecast timeline */}
                  <div className="glass rounded-[2.5rem] p-8 border border-white/5 bg-[#050505]/40 overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                       <h3 className="text-xs font-black text-white uppercase tracking-[0.4em]">Multi-Hour Feed</h3>
                       <div className="w-12 h-1 bg-white/5 rounded-full" />
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-accent-cyan/40 transition-all">
                      {hourlyForecast.map((hour, i) => (
                        <div key={i} className="min-w-[120px] flex flex-col items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-accent-cyan/20 transition-all group">
                          <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full">{hour.time}</span>
                          <div className="group-hover:scale-110 transition-transform">{getWeatherIcon(hour.cond, 28)}</div>
                          <div className="flex flex-col items-center">
                            <span className="text-xl font-black text-white font-mono">{convertTemp(hour.temp)}°</span>
                            <span className="text-[9px] font-mono text-gray-600 uppercase mt-1">{hour.wind} m/s</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vertical 5-day sidebar */}
                <div className="space-y-6">
                  <div className="glass rounded-[2.5rem] p-8 border border-white/5 bg-[#050505]/40 h-full">
                    <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10 border-b border-white/10 pb-4">Outlook_5D</h3>
                    <div className="space-y-6">
                      {forecast.map((day, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-transparent hover:border-white/5 transition-all">
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest w-10">{day.day}</span>
                          <div className="px-3">{getWeatherIcon(day.cond, 20)}</div>
                          <div className="flex gap-3 text-sm font-mono tracking-tighter">
                            <span className="font-black text-white">{convertTemp(day.high)}°</span>
                            <span className="text-gray-600">{convertTemp(day.low)}°</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-12 p-6 glass rounded-2xl border border-white/5 bg-accent-cyan/5">
                       <p className="text-[10px] font-mono text-gray-400 leading-relaxed italic opacity-80">
                         "Precision is the difference between a tool and a toy."
                       </p>
                    </div>
                  </div>
                </div>
            </div>
          </AnimatePresence>
        )}
      </div>
    </div>
  </PageWrapper>
);
};

export default WeatherApp;

