const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`Running in port ${process.env.PORT}`)
})