const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
import { apikey } from './src/utils/variables';


const whitelist = [`https://api.meetup.com/find/upcoming_events?key=${apikey}&sign=true&photo-host=public&lon=-105.04521419999999&page=2000&text=craft beer, brewery&radius=100&lat=39.7283755`, 'http://meetup.com']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.use(cors(corsOptions));
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});