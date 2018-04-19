function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var collection = document.querySelectorAll(".ranked-list")
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection[i].children.length; j++) {
      collection[i].children[j].innerHTML = `${parseInt(collection[i].children[j].innerHTML,10)+n}`;
    }
  }
}

function deepestChild() {
  var current_level = document.getElementById("grand-node");
  var next_level, deepest_level;
  var found = false;
  while (found === false) {
    next_level = current_level.children
    if (next_level.length == 0) {
      deepest_level = current_level;
      found = true;
    }
    else {
      current_level = next_level[0];
    }
  }
  return deepest_level
}
