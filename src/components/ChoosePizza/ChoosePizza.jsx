import React from 'react';
import { PizzaCard } from 'components/core';

const ChoosePizza = ({ pizzas }) => {
  return (
    <div>
      <p>Select one of the available pizzas</p>
      {pizzas.map(({ type, id }) => (
        <PizzaCard key={id} name={type} />
      ))}
    </div>
  );
};

export default ChoosePizza;
