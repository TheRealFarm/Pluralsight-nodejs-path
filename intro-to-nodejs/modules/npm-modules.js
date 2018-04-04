var request = require('request');

function getJSONData(callback){
  request('https://api.coinmarketcap.com/v1/ticker/?limit=5', function(err, response, body){
    if (!err && response.statusCode == 200){
      return callback(JSON.parse(body));
    }
  });
}

getJSONData(function(data) {
  for (var i = 0; i < data.length; i++){
    console.log("$" + data[i].market_cap_usd.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
  }
});
