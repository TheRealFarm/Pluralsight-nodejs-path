var maxTime = 1000;

var evenDoubler = function(v, callback) {

};

var handleResults = function(err, results, time) {
  if (err) {
    console.log("ERROR: " + err.message);
  } else {
    console.log("The results are: " + results + " (" + time + " ms)");
  }
};

evenDouble(2, handleResults);

console.log("-----");
