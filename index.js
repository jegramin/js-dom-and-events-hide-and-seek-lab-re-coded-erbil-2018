function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  document.querySelectorAll('#app .ranked-list').innerHTML = parseInt(document.querySelectorAll('#app .ranked-list').innerHTML) + n;
}

function deepestChild(){
  
}