import axiosClient from './client';

export default {
  getPizzas: async () => {
    const response = await axiosClient.get('/get-pizzas/');

    return response && response.data;
  },
};
