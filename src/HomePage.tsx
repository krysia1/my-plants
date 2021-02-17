import React from 'react';
import monstera1 from './assets/monstera1.svg'
import monstera2 from './assets/monstera2.svg'

const HomePage = () => {
  return (
    <div className="home-page__wrapper">
      <div className="header">
        <div className="header__text-box">
          <span className="heading--main">My Plants</span>
          <span className="heading--sub">An app that helps me take care of plants</span>
        </div>
      </div>
      <div className="home-page__content">
        <img className="monstera-icon--1" src={monstera1} alt="monstera" />
        <img className="monstera-icon--2" src={monstera2} alt="monstera" />
      </div>
    </div>
  )
}

export default HomePage;