import React from 'react';
import { ReactComponent as PizzaSvg } from './pizza.svg';
import './PizzaCard.scss';

const blockName = 'pizza-card';

const Pizza = ({ name }) => {
  return (
    <div className={blockName}>
      <PizzaSvg />
      <p>{name}</p>
    </div>
  );
};

export default Pizza;
