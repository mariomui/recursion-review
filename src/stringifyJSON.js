// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {
  // your code goes here
  if (obj == null || typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } 
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      var arr = [];
      for (var i = 0; i < obj.length; i++) {
        arr.push(stringifyJSON(obj[i]));
      }
    return '[' + arr + ']';
    }
    var objs = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        var pair = [];
        pair.push(`"${key}"`);
        pair.push(stringifyJSON(obj[key]));
        objs.push(pair.join(':'));
      }
    }
    return '{' + objs + '}';
  }
  // if (typeof obj === "function") {

  // }
};
