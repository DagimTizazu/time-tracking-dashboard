import React, { useState } from 'react'
import avatar from '../assets/image-jeremy.png'
import data from '../assets/data.json'
import Card from './Card'
import WorkIcon from '../../images/icon-work.svg'
import PlayIcon from '../../images/icon-play.svg'
import StudyIcon from '../../images/icon-study.svg'
import ExerciseIcon from '../../images/icon-exercise.svg'
import SocialIcon from '../../images/icon-social.svg'
import SelfCareIcon from '../../images/icon-self-care.svg'

function App() {
  const [timeFrame, setTimeFrame] = useState('weekly');
  const [frameName, setFrameName] = useState('Week');

  function handleClick(e) {
    const timeLimit = e.target.textContent.toLowerCase();
    setTimeFrame(timeLimit);

    timeLimit === 'daily' ? setFrameName('Day') : timeLimit === 'weekly' ? setFrameName('Week') : timeLimit === 'monthly' ? setFrameName('Month') : null;
  }

  const backgroundColors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)'
  ];

  const backgroundImages = [
    WorkIcon,
    PlayIcon,
    StudyIcon,
    ExerciseIcon,
    SocialIcon,
    SelfCareIcon
  ]

  return (
    <main>
      <div className="avatar-container">

        <div className="avatar-inner">

          <img className="avatar-img" src={avatar} alt="avatar" />
          <div className="avatar-txt__container">
            <p className='avatar-txt__txt'>Report for</p>
            <h1 className='avatar-name'>Jeremy Robson</h1>
          </div>

        </div>

        <div className="date-scope-selector">
          <p className='date-scope' style={timeFrame === 'daily' ? { color: "#fff" }  : null } onClick={handleClick}>Daily</p>
            <p className='date-scope' style={timeFrame === 'weekly' ? { color: "#fff" }  : null } onClick={handleClick}>Weekly</p>
          <p className='date-scope' style={timeFrame === 'monthly' ? { color: "#fff" }  : null } onClick={handleClick}>Monthly</p>
        </div>

      </div>

      {data.map((data, i) => (
        <Card key={i}
          type={data.title}
          backgroundcolor={backgroundColors[i]}
          backgroundimage={backgroundImages[i]}
          current={
            timeFrame === 'daily' ? data.timeframes.daily.current :
              timeFrame === 'weekly' ? data.timeframes.weekly.current :
                timeFrame === 'monthly' ? data.timeframes.monthly.current : null
          }
          previous={
            timeFrame === 'daily' ? data.timeframes.daily.previous :
              timeFrame === 'weekly' ? data.timeframes.weekly.previous :
                timeFrame === 'monthly' ? data.timeframes.monthly.previous : null
          }
          frame={frameName} />
      ))}
      
    </main>
  )
}

export default App
