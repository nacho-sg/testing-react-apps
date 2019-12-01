import React from 'react';
import { ChoosePizza as ChoosePizzaComponent } from 'components';
import api from 'api';

class ChoosePizza extends React.Component {
  state = {
    pizzas: [],
  };

  componentDidMount = async () => {
    const pizzas = await api.getPizzas();

    this.setState({ pizzas });
  }

  render() {
    const { pizzas } = this.state;

    return <ChoosePizzaComponent pizzas={pizzas} />;
  }
}

export default ChoosePizza;
