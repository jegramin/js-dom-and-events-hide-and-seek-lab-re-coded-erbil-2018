function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let ranks = document.querySelectorAll('#app .ranked-list').children;
  document.querySelectorAll('#app .ranked-list').innerHTML = parseInt(document.querySelectorAll('#app .ranked-list').innerHTML) + n;
}

function deepestChild(){
  let node = document.getElementById("grand-node");
  let nextNode = node.children[0];
  while(nextNode){
    node = nextNode;
    nextNode = node.children[0]
  }
  return node;
}
