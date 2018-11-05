// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, nodes) {
  // your code here
  var answerArr = [];
  var docBody = document.body;
  var nodes = nodes || docBody;
//base case
//iterating through the nodes
  if (nodes.classList && nodes.classList.contains(className)) {
    answerArr.push(nodes);
  }

  if (nodes.hasChildNodes()) {
    for ( var i = 0; i < nodes.childNodes.length; i++) {
      var result = getElementsByClassName(className, nodes.childNodes[i]);
      answerArr = answerArr.concat(result);
    }
  }
//recurse case
//looping through children if has childNodes
  return answerArr;
};
