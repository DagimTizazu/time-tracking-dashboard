import React from 'react'

function Card({ type, current, backgroundcolor, backgroundimage, previous, frame  }) {
  return (
    <div className="card-container" style={{
      backgroundImage: `url('${backgroundimage}')`,
      backgroundColor: backgroundcolor,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '94% -8%'
    }}>

      <div className="inner-card-container">

        <h2 className='card-type'>{type}</h2>
          <svg className='menu-dots' width="21" height="5"  xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"  fill-rule="evenodd" />
          </svg>
        <h3 className='card-current'>{current}{'hrs'}</h3>
          
        <p className='card-previous'>Last {frame} - {previous}{'hrs'}</p>
        
      </div>
      
    </div>
  )
}

export default Card
