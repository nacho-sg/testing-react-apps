module.exports = function (app) {
  app.use('/api/get-pizzas', function (req, res) {
    res.send([
      { type: 'pepperoni', id: '1' },
      { type: 'hawaian', id: '2' },
      { type: 'meet lovers', id: '3' },
      { type: 'jam', id: '4' },
      { type: 'cheese', id: '5' },
    ])
  });
}
