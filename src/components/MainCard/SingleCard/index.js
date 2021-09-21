/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const SingleCard = ({ data }) => (

  <div className="singleCardsContainer">
    {data.map((item) => (
      <div className="singleCard" key={item.title}>
        <h2 className="singleCard__title">{item.title}</h2>
        <p className="singleCard__hours">{item.timeframes.daily.current}hrs</p>
        <p className="singleCard__time">Last week - {item.timeframes.daily.previous}hrs</p>
      </div>
    ))}
  </div>

);

SingleCard.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SingleCard;
