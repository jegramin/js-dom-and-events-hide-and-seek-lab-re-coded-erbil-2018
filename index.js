function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  document.querySelectorAll('#app .ranked-list').innerHTML = parseInt(document.querySelectorAll('#app .ranked-list').innerHTML) + parseInt(n);
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
