// (module in node js)

// normal method of module exports

function add(a, b) {
  return a + b;
}

module.exports = add;

//2nd method with multiple value's

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = { add, sub };

// (3rd )

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = {add , sub};


//(3)  function exports
// exports.add = (a, b) => a * b;