const app = require('express')();

app.get('/', (req, res) => res.send('gubeesh test'));


module.exports = () => {
  app.listen(3000);
}
