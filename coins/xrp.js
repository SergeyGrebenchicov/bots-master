const app = require("../app");

let config = {
  "name": 'Bot 2',
  "apiKey": 'K-f152e536c1a433d8639dbc736d81a2186202c70d',
  "apiSecret": 'S-8647dfdbe7b63b037e8bcde2ef045d6ee699968b',
  "currency1": 'XRP',
  "currency2": 'USD',
  "canSpend": 20,
  "decimal": 6
};

var timerId = setTimeout(function tick() {
  app.initialization(config);
  timerId = setTimeout(tick, 15000);
}, 15000);
