import React from 'react';
import PropTypes from 'prop-types';

import ProfilePic from 'src/assets/image-jeremy.png';

import SingleCard from './SingleCard';

import './styles.scss';

const MainCard = ({ data }) => (
  <div className="mainCardContainer">
    <div className="mainCard">
      <div className="mainCard__header">
        <img src={ProfilePic} className="mainCard__header__avatar" alt="profilePic" />
        <p className="mainCard__header__subtitle">Report for</p>
        <h1 className="mainCard__header__title">Jeremy<br />Robson</h1>
      </div>
      <div className="mainCard__footer">
        <a className="mainCard__footer__data" href="#">Daily</a>
        <a className="mainCard__footer__data" href="#">Weekly</a>
        <a className="mainCard__footer__data" href="#">Monthly</a>
      </div>
    </div>
    <SingleCard data={data} />
  </div>
);

MainCard.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MainCard;
