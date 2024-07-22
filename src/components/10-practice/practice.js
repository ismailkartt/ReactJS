import React from 'react'
import "./practice.scss";

const Practice = () => {
  return (
<div className="card-container">
      <div className="card">
        <div className="card-top">
          <img src="../../assets/img/image5.jpg" alt="Cover" className="cover-image"/>
        </div>
        <div className="card-middle">
          <img src="../../assets/img/profile.jpg" alt="Profile" className="profile-image"/> 
        </div>
        <div className="card-bottom">
          <div className="title">
            <div>Vladislav Mikhailov</div>
            <span>Russia, Krasnodar</span>
          </div>
          <ul className="stats">
            <li>1</li>
            <li>2</li>
            <li>10</li>
          </ul>
          <ul className="labels">
            <li>Shot</li>
            <li>Followers</li>
            <li>Following</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Practice