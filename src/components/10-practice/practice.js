import React from 'react'
import "./practice.scss";
import Stat from './stat1';

const Practice = (props) => {

  const imgSrc1 = require(`../../assets/img/${props.src || 'profile.jpg'}`);
  const profileBackgroundStyle1 = {
    backgroundImage: `url(${imgSrc1})`
  }

  return (
      <div className="profile-card-container1">
        <div className="header1" style={profileBackgroundStyle1}></div>
        <div className="content1">
            <div className="avatar1" style={profileBackgroundStyle1}></div>
            <h3>{props.name}</h3>
            <h5>{props.location}</h5>
            <div className='stats'>
              {
                props.statistics?.map((statistics)=>(
                  <Stat
                  key={statistics.title}
                  {...statistics}
                  />
                ))
              }
            </div>
            
        </div>



      </div>
  )
}

export default Practice