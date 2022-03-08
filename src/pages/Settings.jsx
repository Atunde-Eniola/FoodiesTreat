import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';

const Settings = () => {
  const [settings, setSettings] = useState({
    '--background-color': '#fff',
    '--background-light': '#fff',
    '--shadow-color': 'rgba(0, 0, 0, 0.2)',
    '--primary-color': 'rgb(255, 0, 86)',
    '--text-color': '#0a0a0a',
    '--text-light': '#575757',
    '--btn-color': '#5543fab0',
    '--font-size': '1rem',
    '--speed': 1,
  });

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  const primaryColors = [
    'rgb(225, 0, 86)',
    'rgb(33, 150, 243)',
    'rgb(225, 193, 7)',
    'rgb(0,200, 83)',
    'rgb(156, 39, 176)',
  ];

  const fontSizes = [
    {
      title: 'Small',
      value: '12px',
    },
    {
      title: 'Medium',
      value: '16px',
    },
    {
      title: 'Large',
      value: '20px',
    },
  ];

  const animationSpeeds = [
    {
      title: 'Slow',
      value: '2',
    },
    {
      title: 'Medium',
      value: '1',
    },
    {
      title: 'Fast',
      value: '.5',
    },
  ];

  const [theme, setTheme] = useState('light');
  const themes = [
    {
      '--background-color': '#fff',
      '--background-light': '#fff',
      '--shadow-color': 'rgba(0, 0, 0, 0.2)',
      '--text-color': '#0a0a0a',
      '--text-light': '#575757',
    },
    {
      '--background-color': 'rgb(29, 29, 29)',
      '--background-light': 'rgb(77, 77, 77)',
      '--shadow-color': 'rgba(0, 0, 0, 0.2)',
      '--text-color': '#ffffff',
      '--text-light': '#eceaea',
    },
  ];

  function changeTheme(i) {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? 'light' : 'dark');
    let _settings = { ...settings };
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
  }

  function changeColor(i) {
    const _color = primaryColors[i];
    let _settings = { ...settings };
    _settings['--primary-color'] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
  }

  function changeFontSize(i) {
    const _size = fontSizes[i];
    let _settings = { ...settings };
    _settings['--font-size'] = _size.value;
    setFontSize(i);
    setSettings(_settings);
  }

  function changeAnimationSpeed(i) {
    const _speed = animationSpeeds[i];
    let _settings = { ...settings };
    _settings['--animation-speed'] = _speed.value;
    setAnimationSpeed(i);
    setSettings(_settings);
  }

  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontsize, setFontSize] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  return (
    <div>
      <div className='section d-block'>
        <h2>Preferred theme</h2>
        <div className='option-container'>
          <div className='option light' onClick={() => changeTheme(0)}>
            {theme === 'light' && (
              <div className='check'>
                <FaIcons.FaCheck />
              </div>
            )}
          </div>
          <div className='option dark' onClick={() => changeTheme(1)}>
            {theme === 'dark' && (
              <div className='check'>
                <FaIcons.FaCheck />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='section d-block'>
        <h2>Preferred color</h2>
        <div className='option-container'>
          {primaryColors.map((color, index) => (
            <div
              className='option light'
              style={{ backgroundColor: color }}
              onClick={() => changeColor(index)}>
              {primaryColor === index && (
                <div className='check'>
                  <FaIcons.FaCheck />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='section d-block'>
        <h2>Font size</h2>
        <div className='option-container'>
          {fontSizes.map((size, index) => (
            <button className='btn' onClick={() => changeFontSize(index)}>
              {size.title}
              {fontsize === index && (
                <span>
                  <FaIcons.FaCheck />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className='section d-block'>
        <h2>Animation speed</h2>
        <div className='option-container'>
          {animationSpeeds.map((speed, index) => (
            <button className='btn' onClick={() => changeAnimationSpeed(index)}>
              {speed.title}
              {animationSpeed === index && (
                <span>
                  <FaIcons.FaCheck />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
